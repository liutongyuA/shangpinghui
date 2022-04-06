<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
//1.引入echarts
import * as echarts from "echarts";
export default {
  name: "lineChart",
  //2.当组件挂载时通过ref获取dom，初始化echarts实例
  mounted() {
    let mycharts = echarts.init(this.$refs.charts);
    //指定图表的配置项与数据
    mycharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        type: "category",
      },
      yAxis: {
        show: false,
      },
      //系列
      series: [
                 {
          type: "line",
          data: [10, 7, 33, 12, 48, 9,29,10,44],
          //拐点的样式的设置
          itemStyle: {
            opacity: 0,
          },
          //线条的样式
          lineStyle: {
            color: "purple",
          },
          //填充颜色设置
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "purple", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        }, 
      ],
     //布局调试
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    });
  },
};
</script>

<style scope>
.charts {
  width: 100%;
  height: 100%;
}
</style>