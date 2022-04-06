<template>
  <el-card class="box-card">
    <!-- 头部 -->
    <div slot="header" class="clearfix">
      <!-- @tab-click="handleClick" -->
      <el-tabs v-model="activeName" class="tab">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visite"></el-tab-pane>
      </el-tabs>
      <!-- 头部右侧内容 -->
      <div class="right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <!--    v-model="value1" -->
        <el-date-picker
          size="mini"
          v-model="date"
          class="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>
    <!-- 下部 -->
    <div>
      <el-row :gutter="10">
        <!-- 左柱状图 -->
        <el-col :span="18">
          <!-- 准备容器 -->
          <div class="charts" ref="charts"></div>
        </el-col>
        <!-- 右排行 -->
        <el-col :span="6">
          <h3>门店{{ title }}排名</h3>
          <ul class="clearfixUl">
            <li>
              <span class="rindex">1</span>
              <span>肯德基</span>
              <span class="rvalue">15684</span>
            </li>
            <li>
              <span class="rindex">2</span>
              <span>麦当劳</span>
              <span class="rvalue">15684</span>
            </li>
            <li>
              <span class="rindex">3</span>
              <span>德克士</span>
              <span class="rvalue">15684</span>
            </li>
            <li>
              <span>4</span>
              <span>海底捞</span>
              <span class="rvalue">15684</span>
            </li>
            <li>
              <span>5</span>
              <span>华莱士</span>
              <span class="rvalue">15684</span>
            </li>
            <li>
              <span>6</span>
              <span>德庄火锅</span>
              <span class="rvalue">15684</span>
            </li>
            <li>
              <span>7</span>
              <span>贤合庄</span>
              <span class="rvalue">15684</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import dayjs from 'dayjs'
export default {
  name: "Sale",
  data() {
    return {
      activeName: "sale",
      myCharts: null,
      //收集时间
      date: [],
    };
  },

  methods: {
    //本天
    setDay() {
      const day = dayjs().format("YYYY-MM-DD");
      this.date = [day, day];
    },
    //本周
    setWeek() {
      const start = dayjs().day(1).format("YYYY-MM-DD");
      const end = dayjs().day(7).format("YYYY-MM-DD");
      this.date = [start, end];
    },
    //本月
    setMonth() {
      const start = dayjs().startOf("month").format("YYYY-MM-DD");
      const end = dayjs().endOf("month").format("YYYY-MM-DD");
      this.date = [start, end];
    },
    //本年
    setYear() {
      const start = dayjs().startOf("year").format("YYYY-MM-DD");
      const end = dayjs().endOf("year").format("YYYY-MM-DD");
      this.date = [start, end];
    },
  },
  mounted() {
    this.myCharts = echarts.init(this.$refs.charts);
    this.myCharts.setOption({
      title: {
        text: "销售额趋势",
        textStyle: {
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
            "8",
            "9",
            "10",
            "11",
            "12",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220, 56, 233, 333, 44, 243, 344],
          color: "yellowgreen",
        },
      ],
    });
  },
  computed: {
    //计算出activeName的中文值
    title() {
      return this.activeName == "sale" ? "销售额" : "访问量";
    },
  },
  watch: {
    //监听计算的title的变化重新获取myCharts实例
    title(a, b) {
      //重新给echarts实例设置
      this.myCharts.setOption({
        title: {
          text: a + "趋势",
        },
      });
    },
  },
};
</script>

<style scope>
.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
}
.right span {
  margin: 0px 10px;
}
.date {
  width: 250px;
  margin: 0px 20px;
}
.box-card {
  margin: 10px 0;
}

.box-card .charts {
  width: 100%;
  height: 300px;
}
.clearfixUl {
  list-style: none;
  margin: 0;
  padding: 0;
}
.clearfixUl li {
  height: 37.5px;
  width: 100%;
}
/* .clearfixUl > li span:nth-child(2){
  position:absolute;
  left:20px
} */
.rindex {
  width: 20px;
  height: 20px;
  text-align: center;
  float: left;
  border-radius: 50%;
  color: white;
  background: black;
}
.rvalue {
  float: right;
}
</style>