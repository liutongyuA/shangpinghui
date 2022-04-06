<template>
  <div>
    <el-card style="margin: 20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" :show="!isShowTable"></CategorySelect>
    </el-card>
    <el-card>
      <!-- 上来先展示属性列表 -->
      <div v-show="isShowTable">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addAttr"
          >添加属性</el-button
        >
        <el-table :data="attrList" style="width: 100%" border>
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="attrName" label="属性名称" width="150">
          </el-table-column>
          <el-table-column prop="prop" label="属性值" width="width">
            <template slot-scope="{ row }">
              <el-tag
                type="success"
                v-for="attrValue in row.attrValueList"
                :key="attrValue.id"
                style="margin: 0 20px"
                >{{ attrValue.valueName }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="150">
            <template slot-scope="{ row }">
              <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                @click="updateAttr(row)"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 切换至修改添加属性页面 -->
      <div v-show="!isShowTable">
        <el-form :inline="true" ref="form" label-width="80px" :model="attrInfo">
          <el-form-item label="属性名">
            <el-input v-model="attrInfo.attrName" placeholder="请输入属性名"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-plus" @click="addAtrrValue" :disabled="!attrInfo.attrName">添加属性值</el-button>
        <el-button @click="isShowTable = true">取消</el-button>
        <el-table
          :data="attrInfo.attrValueList"
          style="width: 100%; margin: 20px 0"
          border
        >
          <el-table-column type="index" label="序号" width="80px" align="center"> </el-table-column>
          <el-table-column label="属性值名称" width="width">
          <template slot-scope="{row,$index}">
            <!-- 开始是编辑模式 flag 为true-->
            <el-input v-model.trim="row.valueName" placeholder="请输入属性值名称" size="mini" v-if="row.flag" @blur="toLook(row)" @keyup.native.enter="toLook(row)" :ref="$index"></el-input>
            <!-- 还要换成查看模式 -->
            <span v-else style="display:block" @click="toEdit(row,$index)">{{row.valueName}}</span>
          </template>  
          </el-table-column>
          <el-table-column label="操作" width="width"> 
            <template slot-scope="{row,$index}">
              <el-popconfirm :title='`确定要删除${row.valueName}？`' @onConfirm="deleteAttrValue($index)">
                <el-button type="danger" size="mini" icon="el-icon-delete" slot="reference">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="addOrUpdateAttr" :disabled ="attrInfo.attrValueList.length <1">保存</el-button>
        <el-button @click="isShowTable = true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
//按需引入lodash深拷贝
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: "Attr",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      //接受平台属性的数据
      attrList: [],
      //展示页面
      isShowTable: true,
      //收集新增属性和修改属性
      attrInfo: {
        attrName: "",//属性名
        attrValueList: [ //属性值，值有很多用数组存
          // { 默认是空数组
          //   attrId: 0, //属性名id
          //   valueName: "", //属性值名
          // },
        ],
        categoryId: 0, //三级分类id
        categoryLevel: 3,
      },
    };
  },
  methods: {
    //自定义事件的回调
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
        this.getAttrList();
      }
    },
    //获取平台属性的数据(封装)
    //当用户确定三级分类的数据时候，可以向服务器发请求获取平台属性进行展示
    async getAttrList() {
      //获取分类的ID
      const { category1Id, category2Id, category3Id } = this;
      //获取属性列表的数据
      let result = await this.$API.attr.reqAttrList(
        category1Id,
        category2Id,
        category3Id
      );
      if (result.code == 200) {
        this.attrList = result.data;
      }
    },
    //点击添加属性值按钮回调
    addAtrrValue(){
      this.attrInfo.attrValueList.push({
        attrid:this.attrInfo.id, // 新增属性没有属性id
        valueName:'',
        //加一个独有信号量控制span和input的显示
        flag:true
        })
        //当点击添加属性值时让input聚焦
        this.$nextTick(()=>{
        //获取input，聚焦
        this.$refs[this.attrInfo.attrValueList.length-1].focus()
      })
    },
    //点击添加属性按钮回调
    addAttr(){
      //影藏属性列表div
      this.isShowTable = false
      //清楚数据并收集三级id
      this.attrInfo ={
        attrName: "",
        attrValueList: [],
        categoryId: this.category3Id, //此时收集三级id
        categoryLevel: 3,
      }
    },
    //修改属性回调
    updateAttr(row){
      //隐藏属性列表div
      this.isShowTable = false
      //将选中的属性row赋值给AttrInfo展示页面，但是要进行深拷贝
      this.attrInfo=cloneDeep(row)
      //修改时，给每一个属性值加一个flag标记，用于切换查看与编辑模式
      this.attrInfo.attrValueList.forEach(item=>{
        //对象的变化vue监测不到,没办法做响应式，不能这样写
        //item.flag=false
        //用一个新的api
        this.$set(item,'flag',false)
      })
    },
    //失去焦点事件，切换为查看模式，展示span
    toLook(row){
      //如果属性值为空，不能成功作为新的属性值
      if(row.valueName.trim() ==''){
        this.$message('属性值输入非法！请重新输入')
        
        return
      }
      //如果新增的属性值与已有的属性值重复，不能作为新的属性值
      let isRepat = this.attrInfo.attrValueList.some(item =>{
        if(row!==item){ 
          //row：最新添加的属性值，attrValueList数组的最后一项
          //item：attrValueList数组所有属性值项
          //row!==item把它自身过滤掉，然后与其他项对比，相等返回true
          return row.valueName == item.valueName
        }
      })
      if(isRepat){
        this.$message('属性值重复，请重新输入！')
        return
      }
      row.flag = false

    },
    //点击span切换为修改模式，展示input
    toEdit(row,index){
      //展示input
      row.flag =true
      this.$nextTick(()=>{
        //获取input，聚焦
        this.$refs[index].focus()
      })
    },
    //删除属性值，气泡框确认按钮回调
    deleteAttrValue(index){
      this.attrInfo.attrValueList.splice(index,1)
    },
     //保存按钮：进行添加属性或者修改属性的操作
    async addOrUpdateAttr(){
      //整理参数:1,如果用户添加很多属性值，且属性值为空的不应该提交给服务器
      //提交给服务器数据当中不应该出现flag字段
      this.attrInfo.attrValueList = this.attrInfo.attrValueList.filter(item=>{
          //过滤掉属性值不是空的
          if(item.valueName!=''){
            //删除掉flag属性
            delete item.flag;
            return true;
          }
      })
      try {
         //发请求
        await this.$API.attr.reqAddOrUpdateAttr(this.attrInfo);
        //展示平台属性的信号量进行切换
        this.isShowTable = true;
        //提示消失
        this.$message({type:'success',message:'保存成功'});
        //保存成功以后需要再次获取平台属性进行展示
        this.getAttrList();
      } catch (error) {
        // this.$message('保存失败')
      }

    }
  },
};
</script>

<style>
</style>