<template>
  <div>
    <el-table style="width: 100%" :data="records">
      <el-table-column type="index" label="序号" width="80" align="center">
      </el-table-column>
      <el-table-column width="width" prop="skuName" label="名称" >
      </el-table-column>
      <el-table-column width="width" prop="skuDesc" label="描述" >
      </el-table-column>
      <el-table-column width="110"  label="默认图片" >
        <template slot-scope="{row}">
        <img :src="row.skuDefaultImg" alt="" style="width:100px;height:100px;">
        </template>
      </el-table-column>
      <el-table-column width="width" prop="weight" label="重量" >
      </el-table-column>
      <el-table-column width="80" prop="price" label="价格" >
      </el-table-column>
      <el-table-column width="width"  label="操作" >
        <template slot-scope="{row}">
          <el-button type="success" icon="el-icon-sort-up" size="mini" v-if="row.isSale ==0" @click="sale(row)"></el-button>
          <el-button type="success" icon="el-icon-sort-down" size="mini" v-else @click="cancel(row)"></el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit"></el-button>
          <el-button type="info" icon="el-icon-info" size="mini" @click="getSaleInfo(row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="getSkuList"
      style="text-align: center"
      :current-page="page"
      :page-sizes="[3, 5, 10]"
      :page-size="limit"
      layout="prev, pager, next, jumper,->,sizes,total"
      :total="total">
    </el-pagination>
    <el-drawer
      :visible.sync="drawer"
      :show-close="false"
      size='50%'>
  <el-row>
  <el-col :span="5">名称</el-col>
  <el-col :span="16">{{skuInfo.skuName}}</el-col>
</el-row>
  <el-row>
  <el-col :span="5">描述</el-col>
  <el-col :span="16">{{skuInfo.skuDesc}}</el-col>
</el-row>
  <el-row>
  <el-col :span="5">价格</el-col>
  <el-col :span="16">{{skuInfo.price}}元</el-col>
</el-row>
  <el-row>
  <el-col :span="5">平台属性</el-col>
  <el-col :span="16">
    <el-tag type="success" v-for="attr in skuInfo.skuAttrValueList" :key="attr.id" style="margin-right:10px">{{attr.attrId}}-{{attr.valueId}}</el-tag>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="5">商品图片</el-col>
  <el-col :span="16">
    <!-- 轮播图 -->
  <el-carousel height="350px">
      <el-carousel-item v-for="item in skuInfo.skuImageList" :key="item.id">  
        <img :src="item.imgUrl">
      </el-carousel-item>
  </el-carousel>
  </el-col>
</el-row>
</el-drawer>
  </div>
</template>

<script>
export default {
  name: "Sku",
  data() {
    return {
      page:1,
      limit:3,
      records: [],//存储SKU列表的数据
      total:0,//存储服务器返回的总页数
      drawer:false,//控制抽屉显示或隐藏
      skuInfo:{},//sku详情信息
    }
  },
  mounted(){
    //发请求
    this.getSkuList()
  },
  methods:{
    //获取sku列表数据的方法
    async getSkuList(pages = 1) {
      this.page = pages;
      //解构出默认的参数
      const { page, limit } = this
      let result = await this.$API.sku.reqSkuList(page, limit);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },
    //分页器一页展示条数变化时
    handleSizeChange(limit){
      this.limit=limit
      //发请求,加上参数this.page可以控制页面停在当前页
      this.getSkuList(this.page)
    },
    //上架
    async sale(row){
      row.isSale=1
      let result = await this.$API.sku.reqSale(row.id)
      if(result.code ==200){
        this.$message({type:'success',message:'上架成功！'})
      }
    },
    //下架
    async cancel(row){
      row.isSale=0
      let result = await this.$API.sku.reqCancel(row.id)
      if(result.code ==200){
        this.$message({type:'success',message:'下架成功！'})
      }
    },
    //修改
    edit(){
      this.$message({type:'info',message:'程序员正在加班开发中！！！'})
    },
    //查看详情按钮
    async getSaleInfo(row){
      //打开抽屉
      this.drawer= true
      //发请求获取详情数据
      let result = await this.$API.sku.reqSkuById(row.id)
      if (result.code ==200 ){
        this.skuInfo = result.data
      }
      
    }
  }
};
</script>

<style scoped>
   .el-row .el-col-5{
      font-size:18px;
      text-align:right;
   }
   .el-col{
     margin:10px 10px;
   }
   >>>.el-carousel__button{
    width:10px;
    height:10px;
    background:red;
    border-radius:50%;
  }
</style>