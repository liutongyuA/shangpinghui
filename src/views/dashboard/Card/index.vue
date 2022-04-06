<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <!-- 第一个card -->
          <Detail title="总销售额" count="￥ 12560">
            <template slot="charts">
              <span>周同比56.67%</span>
              <i class="el-icon-caret-top"></i>
              <span>日同比17%</span>
              <i class="el-icon-caret-bottom"></i>
            </template>
            <template slot="footer">
              <span>日销售额￥ 12423</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <!-- 第二个card -->
          <Detail title="访问量" count="88454">
            <!-- 折线图 -->
            <template slot="charts">
                <lineChart></lineChart>
            </template>
            <template slot="footer">
              <span>日访问量 1234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <!-- 第三个 -->
          <Detail title="支付笔数" count="88965">
              <!-- 柱状图 -->
            <template slot="charts">
                <barChart></barChart>
            </template>
            <template slot="footer">
              <span>转换率64%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <!-- 第四个 -->
          <Detail title="运营活动效果" count="77%">
              <!-- 进度条 -->
            <template slot="charts">
                <progressChart></progressChart>
            </template>
            <template slot="footer">
              <span>周同比56.67%</span>
              <i class="el-icon-caret-top"></i>
              <span>日同比17%</span>
              <i class="el-icon-caret-bottom"></i>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import lineChart from './lineChart'
import barChart from './barChart'
import progressChart from './progressChart'
export default {
  name: "Card",
  components: {
    Detail,
    lineChart,
    barChart,
    progressChart
  },
};
</script>

<style>
</style>