<template>
  <div>
    <!-- 控制三级联动可操作性 -->
    <el-card style="margin: 20px 0">
      <CategorySelect
        @getCategoryId="getCategoryId"
        :show="scene != 0"
      ></CategorySelect>
    </el-card>
    <el-card>
      <!-- 0展示SPU列表 -->
      <div v-show="scene == 0">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addSpu"
          >添加SPU</el-button
        >
        <el-table style="width: 100%" border :data="records">
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="spuName" label="SPU名称" width="width">
          </el-table-column>
          <el-table-column prop="description" label="SPU描述" width="width">
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="width">
            <template slot-scope="{ row }">
              <el-button
                type="success"
                icon="el-icon-plus"
                size="mini"
                title="添加sku"
                @click="addSku(row)"
              ></el-button>
              <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                @click="updateSpu(row)"
              ></el-button>
              <el-button
                type="info"
                icon="el-icon-info"
                size="mini"
                @click="handler(row)"
              ></el-button>
              <el-popconfirm
                :title="`确定删除${row.spuName}吗？`"
                @onConfirm="deleteSpu(row)"
              >
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  slot="reference"
                  style="margin-left:10px"
                ></el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align: center"
          @size-change="handleSizeChange"
          @current-change="getSpuList"
          :current-page="page"
          :page-sizes="[3, 7, 12]"
          :page-size="limit"
          layout="prev, pager, next, jumper,->,sizes,total"
          :total="total"
        >
        </el-pagination>
      </div>
      <!-- 添加spu或修改spu -->
      <spuForm
        v-show="scene == 1"
        @changeScene="changeScene"
        ref="spu"
      ></spuForm>
      <!-- 展示添加SKU结构 -->
      <skuForm v-show="scene == 2" ref="sku" @changeScenes="changeScenes"></skuForm>
    </el-card>
    <!-- 对话框 dialog-->
  <el-dialog :title="`${spu.spuName}的sku信息`" :visible.sync="dialogTableVisible" :before-close="close">
  <el-table :data="skuList"  v-loading="loading">
    <el-table-column property="skuName" label="名称"></el-table-column>
    <el-table-column property="price" label="价格" ></el-table-column>
    <el-table-column property="weight" label="重量"></el-table-column>
    <el-table-column property="skuDefaultImg" label="默认图片">
      <template slot-scope="{row}">
        <img :src="row.skuDefaultImg" style="width:100px;heigth:100px;">
      </template>
    </el-table-column>
  </el-table>
</el-dialog>
  </div>
</template>

<script>
//import { splice } from 'mock/user';
import skuForm from "./skuForm";
import spuForm from "./spuForm";
export default {
  name: "Spu",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      page: 1, //当前页数
      limit: 3, //一页展示几条
      records: [], //存储spu列表数据
      total: 0, //总页数，分页器需要
      scene: 0, //信号量
      dialogTableVisible:false,//对话框默认隐藏
      spu:'',
      skuList:[],//展示sku列表
      loading:true,//控制loading展示
    };
  },
  components: { skuForm, spuForm },
  methods: {
    //三级联动的自定义事件，收集子组件传来的三级id
    getCategoryId({ categoryId, level }) {
      //区分三级分类相应的id，以及父组件进行存储
      if (level == 1) {
        this.category1Id = categoryId;
        this.category2Id = "";
        this.category3Id = "";
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = "";
      } else {
        //代表三级分类的id有了
        this.category3Id = categoryId;
        //发请求获取平台的属性数据
        this.getSpuList();
      }
    },
    //获取spu数据的请求函数
    async getSpuList(pager = 1) {
      this.page = pager;
      let { page, limit, category3Id } = this;
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code == 200) {
        this.records = result.data.records;
        this.total = result.data.total;
      }
    },
    //分页器改变每页展示条数回调
    handleSizeChange(limit) {
      this.limit = limit;
      this.getSpuList(this.page);
    },
    //添加spu按钮回调
    addSpu() {
      this.scene = 1;
      this.$refs.spu.addSpuData(this.category3Id);
    },
    //修改spu按钮回调
    updateSpu(row) {
      this.scene = 1;
      //调用子组件的方法发请求
      this.$refs.spu.initSpuData(row);
    },
    //自定义事件切换scene
    changeScene({ scene, flag }) {
      this.scene = scene;
      if (flag == "修改") {
        this.getSpuList(this.page);
      } else {
        this.getSpuList();
      }
    },
    //删除spu回调
    async deleteSpu(row) {
      let result = await this.$API.spu.reqDeleteSpu(row.id)
      if (result.code ==200 ){
        this.$message({ type: "success", message: "删除成功" })
        //回到页面重新发请求获取数据
        //代表SPU个数大于1删除的时候停留在当前页，如果SPU个数小于1 回到上一页
        this.getSpuList(this.records.length > 1 ? this.page : this.page - 1);
      }
    },
    //添加sku按钮回调
    addSku(row){
      this.scene =2
      //ref获取skuform发请求方法调用
      this.$refs.sku.getdata(this.category1Id,this.category2Id,row)
    },
    //skuForm子组件自定义事件
    changeScenes(scene){
      this.scene = scene
    },
    //按钮点击后发请求获取sku数据，弹出对话框
    async handler(spu){
      //显示对话框
      this.dialogTableVisible =true
      //保存spu信息
      this.spu = spu
      //发请求获取数据
     let result = await this.$API.spu.reqSkuList(spu.id)
     if(result.code == 200){
       this.skuList =result.data
       this.loading = false
     }
    },
    //对话框关闭前回调
    close(done){
      //重新展示loading效果
      this.loading= true
      //清空服务器返回数据
      this.skuList =[]
      done()
    }
  },
};
</script>

<style>
</style>