(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-106212ee"],{1941:function(t,a,e){"use strict";e("68d3")},"1e67":function(t,a,e){},"250a":function(t,a,e){"use strict";e("1e67")},"5a60":function(t,a,e){"use strict";e("e77a")},"68ac":function(t,a,e){},"68d3":function(t,a,e){},"6adc":function(t,a,e){"use strict";e("68ac")},9406:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Card"),e("Sale"),e("Observe")],1)},l=[],r=e("5530"),i=e("2f62"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("el-tabs",{staticClass:"tab",model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"销售额",name:"sale"}}),e("el-tab-pane",{attrs:{label:"访问量",name:"visite"}})],1),e("div",{staticClass:"right"},[e("span",{on:{click:t.setDay}},[t._v("今日")]),e("span",{on:{click:t.setWeek}},[t._v("本周")]),e("span",{on:{click:t.setMonth}},[t._v("本月")]),e("span",{on:{click:t.setYear}},[t._v("本年")]),e("el-date-picker",{staticClass:"date",attrs:{size:"mini",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}})],1)],1),e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:18}},[e("div",{ref:"charts",staticClass:"charts"})]),e("el-col",{attrs:{span:6}},[e("h3",[t._v("门店"+t._s(t.title)+"排名")]),e("ul",{staticClass:"clearfixUl"},[e("li",[e("span",{staticClass:"rindex"},[t._v("1")]),e("span",[t._v("肯德基")]),e("span",{staticClass:"rvalue"},[t._v("15684")])]),e("li",[e("span",{staticClass:"rindex"},[t._v("2")]),e("span",[t._v("麦当劳")]),e("span",{staticClass:"rvalue"},[t._v("15684")])]),e("li",[e("span",{staticClass:"rindex"},[t._v("3")]),e("span",[t._v("德克士")]),e("span",{staticClass:"rvalue"},[t._v("15684")])]),e("li",[e("span",[t._v("4")]),e("span",[t._v("海底捞")]),e("span",{staticClass:"rvalue"},[t._v("15684")])]),e("li",[e("span",[t._v("5")]),e("span",[t._v("华莱士")]),e("span",{staticClass:"rvalue"},[t._v("15684")])]),e("li",[e("span",[t._v("6")]),e("span",[t._v("德庄火锅")]),e("span",{staticClass:"rvalue"},[t._v("15684")])]),e("li",[e("span",[t._v("7")]),e("span",[t._v("贤合庄")]),e("span",{staticClass:"rvalue"},[t._v("15684")])])])])],1)],1)])},o=[],c=e("313e"),d=e("5a0c"),h=e.n(d),p={name:"Sale",data:function(){return{activeName:"sale",myCharts:null,date:[]}},methods:{setDay:function(){var t=h()().format("YYYY-MM-DD");this.date=[t,t]},setWeek:function(){var t=h()().day(1).format("YYYY-MM-DD"),a=h()().day(7).format("YYYY-MM-DD");this.date=[t,a]},setMonth:function(){var t=h()().startOf("month").format("YYYY-MM-DD"),a=h()().endOf("month").format("YYYY-MM-DD");this.date=[t,a]},setYear:function(){var t=h()().startOf("year").format("YYYY-MM-DD"),a=h()().endOf("year").format("YYYY-MM-DD");this.date=[t,a]}},mounted:function(){this.myCharts=c["a"](this.$refs.charts),this.myCharts.setOption({title:{text:"销售额趋势",textStyle:{fontSize:16}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","8","9","10","11","12"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Direct",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220,56,233,333,44,243,344],color:"yellowgreen"}]})},computed:{title:function(){return"sale"==this.activeName?"销售额":"访问量"}},watch:{title:function(t,a){this.myCharts.setOption({title:{text:t+"趋势"}})}}},u=p,f=(e("a467"),e("2877")),v=Object(f["a"])(u,n,o,!1,null,null,null),m=v.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"总销售额",count:"￥ 12560"}},[e("template",{slot:"charts"},[e("span",[t._v("周同比56.67%")]),e("i",{staticClass:"el-icon-caret-top"}),e("span",[t._v("日同比17%")]),e("i",{staticClass:"el-icon-caret-bottom"})]),e("template",{slot:"footer"},[e("span",[t._v("日销售额￥ 12423")])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"访问量",count:"88454"}},[e("template",{slot:"charts"},[e("lineChart")],1),e("template",{slot:"footer"},[e("span",[t._v("日访问量 1234")])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"支付笔数",count:"88965"}},[e("template",{slot:"charts"},[e("barChart")],1),e("template",{slot:"footer"},[e("span",[t._v("转换率64%")])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"运营活动效果",count:"77%"}},[e("template",{slot:"charts"},[e("progressChart")],1),e("template",{slot:"footer"},[e("span",[t._v("周同比56.67%")]),e("i",{staticClass:"el-icon-caret-top"}),e("span",[t._v("日同比17%")]),e("i",{staticClass:"el-icon-caret-bottom"})])],2)],1)],1)],1)],1)},_=[],C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"card-header"},[e("span",[t._v(t._s(t.title))]),e("svg",{staticClass:"icon",attrs:{t:"1637478175000",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2179",width:"16",height:"16"}},[e("path",{attrs:{d:"M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z","p-id":"2180",fill:"#8a8a8a"}})])]),e("div",{staticClass:"card-content"},[t._v(t._s(t.count))]),e("div",{staticClass:"card-charts"},[t._t("charts")],2),e("div",{staticClass:"card-footer"},[t._t("footer")],2)])},y=[],w={name:"Detail",props:["title","count"]},g=w,x=(e("f3f0"),Object(f["a"])(g,C,y,!1,null,null,null)),M=x.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},O=[],z={name:"lineChart",mounted:function(){var t=c["a"](this.$refs.charts);t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"line",data:[10,7,33,12,48,9,29,10,44],itemStyle:{opacity:0},lineStyle:{color:"purple"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"purple"},{offset:1,color:"#fff"}],global:!1}}}],grid:{left:0,top:0,right:0,bottom:0}})}},Y=z,E=(e("6adc"),Object(f["a"])(Y,D,O,!1,null,null,null)),L=E.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},A=[],j={name:"barChart",mounted:function(){var t=c["a"](this.$refs.charts);t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"bar",data:[10,7,33,12,48,9,29,10,44,33,22,8],color:"cyan"}],grid:{left:0,top:0,right:0,bottom:0},tooltip:{}})}},$=j,k=(e("250a"),Object(f["a"])($,S,A,!1,null,"29568550",null)),H=k.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},W=[],N=e("ade3"),F={name:"progressChart",mounted:function(){var t,a=c["a"](this.$refs.charts);a.setOption({xAxis:{show:!1,min:0,max:100},yAxis:{show:!1,type:"category"},series:[(t={type:"bar",data:[78],color:"cyan",barWidth:10},Object(N["a"])(t,"color","yellowgreen"),Object(N["a"])(t,"showBackground",!0),Object(N["a"])(t,"backgroundStyle",{color:"#eee"}),Object(N["a"])(t,"label",{show:!0,formatter:"|",position:"right"}),t)],grid:{left:0,top:0,right:0,bottom:0}})}},T=F,V=(e("a097"),Object(f["a"])(T,B,W,!1,null,"2e9f765e",null)),J=V.exports,U={name:"Card",components:{Detail:M,lineChart:L,barChart:H,progressChart:J}},P=U,R=Object(f["a"])(P,b,_,!1,null,null,null),q=R.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:12}},[e("Search")],1),e("el-col",{attrs:{span:12}},[e("Category")],1)],1)},I=[],K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",[e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"search-header"},[e("span",[t._v("线上热门搜索")]),e("el-dropdown",[e("span",[e("i",{staticClass:"el-icon-more"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[t._v("黄金糕")]),e("el-dropdown-item",[t._v("狮子头")]),e("el-dropdown-item",[t._v("螺蛳粉")]),e("el-dropdown-item",[t._v("双皮奶")]),e("el-dropdown-item",[t._v("蚵仔煎")])],1)],1)],1)]),e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:12}},[e("lineCharts")],1),e("el-col",{attrs:{span:12}},[e("lineCharts")],1)],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{label:"排名",width:"80",type:"index"}}),e("el-table-column",{attrs:{label:"搜搜关键字",width:"180"}}),e("el-table-column",{attrs:{label:"用户数",sortable:""}}),e("el-table-column",{attrs:{label:"周涨幅",sortable:""}})],1),e("el-pagination",{staticClass:"pagination",attrs:{layout:"prev, pager, next",total:1e3}})],1)])},Q=[],X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"header"},[e("span",{staticClass:"search-header"},[t._v("搜索用户数")]),e("svg",{staticClass:"icon",attrs:{t:"1637478175000",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2179",width:"26",height:"26"}},[e("path",{attrs:{d:"M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z","p-id":"2180",fill:"#8a8a8a"}})])]),e("div",{staticClass:"main"},[e("span",{staticClass:"main-title"},[t._v("12321")]),e("span",{staticClass:"main-content"},[t._v("17.1")]),e("svg",{staticClass:"icon",attrs:{t:"1637478902688",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3315",width:"16",height:"16"}},[e("path",{attrs:{d:"M786.295467 485.000533l-6.126934 2.082134v-18.295467h6.024534l0.1024 16.213333zM221.5424 485.239467h-8.9088l-0.085333-16.247467 8.994133-0.512v16.759467z",fill:"#1afa29","p-id":"3316"}}),e("path",{attrs:{d:"M784.469333 480.290133L504.456533 178.978133a6.826667 6.826667 0 0 0-10.001066 0L214.459733 480.290133a6.826667 6.826667 0 0 0 5.922134 11.4176l158.1056-21.435733L358.4 853.333333v16.162134a6.826667 6.826667 0 0 0 6.826667 7.168h268.356266a6.826667 6.826667 0 0 0 6.826667-7.168l-0.119467-16.3328-19.848533-382.8736 158.122667 21.418666a6.826667 6.826667 0 0 0 5.922133-11.4176z",fill:"#1afa29","p-id":"3317"}}),e("path",{attrs:{d:"M191.3344 734.6176l103.031467 72.789333 103.048533-72.789333a127.197867 127.197867 0 0 0-206.097067 0z",fill:"#1afa29","p-id":"3318"}}),e("path",{attrs:{d:"M294.382933 681.984a127.010133 127.010133 0 0 1 103.048534 52.6336l-103.048534 72.789333-103.031466-72.789333a127.010133 127.010133 0 0 1 103.048533-52.6336m0-10.24a137.915733 137.915733 0 0 0-111.342933 56.849067 10.24 10.24 0 0 0 2.269866 14.2848l0.136534 0.1024L288.426667 815.786667a10.24 10.24 0 0 0 11.810133 0l103.031467-72.772267a10.24 10.24 0 0 0 2.4064-14.3872 137.915733 137.915733 0 0 0-111.342934-56.849067z",fill:"#1afa29","p-id":"3319"}}),e("path",{attrs:{d:"M384.1536 444.142933h1.5872l-20.48 409.6h268.2368l-20.48-409.6",fill:"#1afa29","p-id":"3320"}}),e("path",{attrs:{d:"M633.4976 860.5696H365.226667a6.826667 6.826667 0 0 1-6.826667-7.168l20.48-409.6 5.239467 0.256v-6.826667h1.5872a6.826667 6.826667 0 0 1 6.826666 7.168l-20.1216 402.432H626.346667l-20.1216-402.432 13.653333-0.682666 20.48 409.6a6.826667 6.826667 0 0 1-6.826667 7.168z",fill:"#1afa29","p-id":"3321"}}),e("path",{attrs:{d:"M613.0176 446.276267l166.365867 22.545066L499.387733 167.509333 219.374933 468.821333l164.778667-22.545066",fill:"#1afa29","p-id":"3322"}}),e("path",{attrs:{d:"M633.4976 860.5696H365.226667a6.826667 6.826667 0 0 1-6.826667-7.168l19.968-399.240533-158.122667 21.435733a6.826667 6.826667 0 0 1-5.922133-11.4176L494.370133 162.8672a6.826667 6.826667 0 0 1 10.001067 0L784.384 464.213333a6.826667 6.826667 0 0 1-5.922133 11.4176l-158.122667-21.418666L640.3072 853.333333a6.826667 6.826667 0 0 1-6.826667 7.168z m-261.12-13.653333H626.346667L606.3104 446.634667a6.826667 6.826667 0 0 1 7.7312-7.099734l147.3536 19.950934L499.370667 177.493333 237.3632 459.485867l147.3536-19.968a6.826667 6.826667 0 0 1 7.7312 7.099733z",fill:"#1afa29","p-id":"3323"}}),e("path",{attrs:{d:"M557.3632 617.5744l149.5552 105.659733 149.572267-105.659733a184.644267 184.644267 0 0 0-299.1616 0z",fill:"#1afa29","p-id":"3324"}}),e("path",{attrs:{d:"M706.935467 541.184a184.32 184.32 0 0 1 149.572266 76.3904l-149.572266 105.659733-149.5552-105.659733a184.32 184.32 0 0 1 149.572266-76.3904m0-10.24a194.56 194.56 0 0 0-157.866666 80.622933 10.24 10.24 0 0 0 2.184533 14.2336l0.221867 0.1536 149.5552 105.659734a10.24 10.24 0 0 0 11.810133 0l149.5552-105.642667a10.24 10.24 0 0 0 2.4064-14.3872 194.56 194.56 0 0 0-157.866667-80.622933z",fill:"#1afa29","p-id":"3325"}})]),e("svg",{staticClass:"icon",attrs:{t:"1637478988225",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4331",width:"16",height:"16"}},[e("path",{attrs:{d:"M252.484267 566.749867h11.776v16.6912h-11.776zM815.684267 566.8352h10.461866v16.9984h-10.461866z",fill:"#996E28","p-id":"4332"}}),e("path",{attrs:{d:"M825.361067 580.642133a6.826667 6.826667 0 0 0-6.980267-3.618133l-158.0032 21.418667L680.2432 201.386667a6.826667 6.826667 0 0 0 0-1.058134v-1.109333a6.826667 6.826667 0 0 0-6.826667-7.168H405.1968a6.826667 6.826667 0 0 0-6.826667 7.168v1.109333a6.826667 6.826667 0 0 0 0 1.058134l19.848534 397.038933-158.0032-21.4016a6.826667 6.826667 0 0 0-5.922134 11.4176l280.0128 301.277867a6.826667 6.826667 0 0 0 10.001067 0L824.32 588.424533a6.826667 6.826667 0 0 0 1.041067-7.7824z",fill:"#996E28","p-id":"4333"}}),e("path",{attrs:{d:"M339.780267 523.7248H103.6288a17.066667 17.066667 0 1 1 0-34.133333h236.151467a13.380267 13.380267 0 1 0 0-26.760534h-33.467734a44.782933 44.782933 0 1 1 0.631467-89.565866h238.250667a17.066667 17.066667 0 0 1 0 34.133333h-238.250667a11.093333 11.093333 0 0 0-11.229867 9.5744 10.717867 10.717867 0 0 0 10.5984 11.7248h33.467734a47.5136 47.5136 0 1 1 0 95.0272z",fill:"#D5382E","p-id":"4334"}}),e("path",{attrs:{d:"M545.194667 373.282133a17.066667 17.066667 0 0 1 0 34.133334h-238.250667a11.093333 11.093333 0 0 0-11.229867 9.5744 10.717867 10.717867 0 0 0 10.5984 11.7248h33.467734a47.5136 47.5136 0 1 1 0 95.0272H103.6288a17.066667 17.066667 0 1 1 0-34.133334h236.151467a13.380267 13.380267 0 1 0 0-26.760533h-33.467734a44.782933 44.782933 0 1 1 0.631467-89.565867h238.250667m0-10.24h-238.250667a55.022933 55.022933 0 1 0-0.631467 110.045867h33.467734a3.140267 3.140267 0 1 1 0 6.280533H103.6288a27.306667 27.306667 0 1 0 0 54.613334h236.151467a57.7536 57.7536 0 1 0 0-115.5072h-33.467734a0.512 0.512 0 0 1-0.290133-0.170667 0.3584 0.3584 0 0 1-0.119467-0.221867 1.416533 1.416533 0 0 1 1.041067-0.426666h238.250667a27.306667 27.306667 0 0 0 0-54.613334z",fill:"#E8D4AB","p-id":"4335"}}),e("path",{attrs:{d:"M654.523733 591.854933h-1.5872l20.48-409.6H405.1968l20.48 409.6",fill:"#AF3131","p-id":"4336"}}),e("path",{attrs:{d:"M654.523733 593.5616h-1.5872l20.48-409.6H405.1968l20.48 409.6",fill:"#D5382E","p-id":"4337"}}),e("path",{attrs:{d:"M654.523733 600.388267h-1.5872a6.826667 6.826667 0 0 1-6.826666-7.168l20.1216-402.432H412.3648l20.1216 402.432-13.653333 0.682666-20.48-409.6a6.826667 6.826667 0 0 1 6.826666-7.168h268.253867a6.826667 6.826667 0 0 1 6.826667 7.168l-20.48 409.6-5.239467-0.256z",fill:"#E8D4AB","p-id":"4338"}}),e("path",{attrs:{d:"M425.6768 589.704533l-166.365867-22.528L539.306667 868.471467l279.995733-301.294934-164.778667 22.528",fill:"#D5382E","p-id":"4339"}}),e("path",{attrs:{d:"M425.6768 591.4112l-166.365867-22.528L539.306667 870.178133l279.995733-301.294933-164.778667 22.528",fill:"#D5382E","p-id":"4340"}}),e("path",{attrs:{d:"M539.306667 874.837333a6.826667 6.826667 0 0 1-5.000534-2.184533L254.293333 571.357867a6.826667 6.826667 0 0 1 5.922134-11.4176l158.122666 21.418666-19.968-399.223466a6.826667 6.826667 0 0 1 6.826667-7.168h268.2368a6.826667 6.826667 0 0 1 6.826667 7.168l-19.968 399.240533 158.122666-21.435733a6.826667 6.826667 0 0 1 5.922134 11.4176L544.3072 872.6528a6.826667 6.826667 0 0 1-5.000533 2.184533zM277.2992 576.034133L539.306667 857.975467l262.007466-281.941334-147.3536 19.968a6.826667 6.826667 0 0 1-7.7312-7.099733l20.0192-400.2816H412.3648l20.0192 400.264533a6.826667 6.826667 0 0 1-7.7312 7.099734z",fill:"#E8D4AB","p-id":"4341"}}),e("path",{attrs:{d:"M780.7488 226.338133h105.540267a17.066667 17.066667 0 0 1 0 34.133334h-105.540267a13.380267 13.380267 0 1 0 0 26.760533h8.0384a44.782933 44.782933 0 1 1 0.631467 89.565867H503.7056a17.066667 17.066667 0 0 1 0-34.133334h285.730133a10.717867 10.717867 0 0 0 10.5984-11.7248 11.076267 11.076267 0 0 0-11.229866-9.5744h-8.0384a47.5136 47.5136 0 1 1 0-95.0272z",fill:"#D5382E","p-id":"4342"}}),e("path",{attrs:{d:"M886.289067 226.338133a17.066667 17.066667 0 0 1 0 34.133334h-105.540267a13.380267 13.380267 0 1 0 0 26.760533h8.0384a44.782933 44.782933 0 1 1 0.631467 89.565867H503.7056a17.066667 17.066667 0 0 1 0-34.133334h285.730133a10.717867 10.717867 0 0 0 10.5984-11.7248 11.076267 11.076267 0 0 0-11.229866-9.5744h-8.0384a47.5136 47.5136 0 1 1 0-95.0272h105.540266m0-10.24h-105.557333a57.7536 57.7536 0 1 0 0 115.5072h8.0384a1.416533 1.416533 0 0 1 1.041067 0.426667 0.341333 0.341333 0 0 1-0.119467 0.221867 0.802133 0.802133 0 0 1-0.221867 0.170666H503.7056a27.306667 27.306667 0 0 0 0 54.613334h285.730133a55.022933 55.022933 0 1 0-0.631466-110.045867h-8.0384a3.140267 3.140267 0 1 1 0-6.280533h105.540266a27.306667 27.306667 0 0 0 0-54.613334z",fill:"#E8D4AB","p-id":"4343"}})])]),e("div",{staticClass:"footer"},[e("div",{ref:"charts",staticClass:"charts"})])])},Z=[],tt={name:"lineCharts",mounted:function(){var t=c["a"](this.$refs.charts);t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"line",data:[10,7,33,12,48,9,29,10,44],itemStyle:{opacity:0},lineStyle:{color:"blue"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"blue"},{offset:1,color:"#fff"}],global:!1}}}],grid:{left:0,top:0,right:0,bottom:0}})}},at=tt,et=(e("e4a5"),Object(f["a"])(at,X,Z,!1,null,"e066f99c",null)),st=et.exports,lt={name:"Search",data:function(){return{tableData:[{}]}},components:{lineCharts:st}},rt=lt,it=(e("1941"),Object(f["a"])(rt,K,Q,!1,null,"1fede0be",null)),nt=it.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",[e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"category-header"},[e("span",[t._v("销售额类别占比")]),e("el-radio-group",{model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[e("el-radio-button",{attrs:{label:"全部渠道"}}),e("el-radio-button",{attrs:{label:"线上"}}),e("el-radio-button",{attrs:{label:"门店"}})],1)],1)]),e("div",[e("div",{ref:"charts",staticClass:"charts"})])])},ct=[],dt=(e("b0c0"),{name:"Category",data:function(){return{value:"全部渠道"}},mounted:function(){var t=c["a"](this.$refs.charts);t.setOption({title:{text:"视频",subtext:1048,left:"center",top:"center"},tooltip:{trigger:"item"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"outsize"},labelLine:{show:!0},data:[{value:1048,name:"视频"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}),t.on("mouseover",(function(a){var e=a.data,s=e.name,l=e.value;t.setOption({title:{text:s,subtext:l}})}))}}),ht=dt,pt=(e("5a60"),Object(f["a"])(ht,ot,ct,!1,null,"874bcd6c",null)),ut=pt.exports,ft={name:"Observe",components:{Search:nt,Category:ut}},vt=ft,mt=Object(f["a"])(vt,G,I,!1,null,null,null),bt=mt.exports,_t={name:"Dashboard",components:{Card:q,Sale:m,Observe:bt},computed:Object(r["a"])({},Object(i["b"])(["name"]))},Ct=_t,yt=Object(f["a"])(Ct,s,l,!1,null,"653f8f66",null);a["default"]=yt.exports},"96dc":function(t,a,e){},a097:function(t,a,e){"use strict";e("96dc")},a467:function(t,a,e){"use strict";e("aa79")},aa79:function(t,a,e){},c49b:function(t,a,e){},e4a5:function(t,a,e){"use strict";e("e5a7")},e5a7:function(t,a,e){},e77a:function(t,a,e){},f3f0:function(t,a,e){"use strict";e("c49b")}}]);