<template>
  <div id="app">
    <!-- :options="options"  -->
    <!-- custom -->
    <div class="f1">
      <Wang-skeleton type="custom" :childrenOption="childrenOption" />
    </div>
    <div class="f2">
      <Wang-skeleton type="custom" :childrenOption="childrenOption" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 全局配置
      options: {
        // 行数(默认:1)
        row: 1,
        // 列数(默认:1)
        column: 5,
        // 每个元素宽(默认:30)
        // width: "800px",
        // 每个元素的高(默认:30)
        height: "30px",
        // 背景颜色(有默认)
        // backgroundColor: "red",
        // 对齐方式(默认:左)
        // justifyContent: "center",
        // 是否动画(默认:无)
        active: true,
        width: "30px",
        // 每个模块间外间距(默认 0 10)
        itemMargin: "0 10px",
        // 行间距(默认:0)
        itemRowMargin: "0",
        // 列间距(默认: 5)
        itemColumnMargin: "5px",
        // 垂直对齐方式(默认:center)
        // alignItems: "center",
      },

      childrenOption: [
        // 头像
        {
          type: "avatar",
          options: {
            // 行数(默认:1)
            row: 1,
            // 列数(默认:1)
            column: 1,
            // 每个元素宽(默认40)
            // width: "40px",
            // 每个元素的高(默认40)
            // height: "40px",
            // 背景颜色(有默认)
            // backgroundColor: "#ccc",
            // 水平对齐方式(默认:左)
            // justifyContent: "flex-start",
            // 垂直对齐方式(默认:center)
            // alignItems: "center",
            // 是否动画(默认:无)
            active: true,
            // 行间距(默认: 0)
            // itemRowMargin: "0",
            // 列间距(默认: 0)
            // itemColumnMargin: "0",
            // 每个头像间外间距（默认：0 5px）
            // itemMargin: "0 5px",
          },
        },
        // 分割线
        // {
        //   type: "line",
        //   options: {
        //     //  行
        //     row: 2,
        //     // 列
        //     column: 1,
        //     width: "10vw",
        //     height: "30px",
        //     backgroundColor: "#ccc",
        //     justifyContent: "flex-start",
        //     // 垂直对齐方式(默认:center)
        //     alignItems: "center",
        //     // 是否动画
        //     active: true,
        //     // 行间距(默认:10)
        //     itemRowMargin: "10px",
        //     // 列间距(默认: 0)
        //     itemColumnMargin: "0px",
        //   },
        // },
        // 卡片
        {
          type: "card",
          options: {
            // 行数(默认:1)
            // row: 1,
            // 列数(默认:1)
            column: 2,
            // 每个元素宽(默认:30)
            // width: "30px",
            // 每个元素的高(默认:30)
            // height: "30px",
            // 背景颜色(有默认)
            // backgroundColor: "#ccc",
            // 对齐方式(默认:左)
            // justifyContent: "flex-start",
            // 是否动画(默认:无)
            active: true,
            // 行间距(默认:0)
            // itemRowMargin: "5px",
            // 列间距(默认: 0)
            itemColumnMargin: "5px",
            // 垂直对齐方式(默认:center)
            // alignItems: "center",
            // 每个卡片间外间距（默认: 0 5px）
            // itemMargin: "0 5px",
          },
        },
        // 列表
        {
          type: "list",
          options: {
            // 行数(默认:1)
            row: 3,
            // 列数(默认:1)
            column: 1,
            // 每个元素宽(默认600)
            width: "10vw",
            // 每个元素的高(默认20)
            height: "20px",
            // 背景颜色(默认: #F2F2F2)
            backgroundColor: "#ccc",
            // item 对齐方式(默认:左)
            justifyContent: "center",
            // 是否动画(默认:无)
            active: true,
            // 行间距
            itemRowMargin: "10px",
            // 列间距(默认: 0)
            itemColumnMargin: "0px",
            // 首条宽度(默认100)
            // firstWidth: "300px",
            // 末条宽度(默认 '')
            // lastWidth: "300px",
            // 垂直对齐方式(默认:center)
            alignItems: "center",
             // 每个列表对象间外间距（默认: 0 5px）
            // itemMargin: "0 5px",
          },
        },
      ],
    };
  },
};
</script>

<style >
#app {
  /* background-color: #ccc; */
  display: flex;
  justify-content: space-around;
  width: 1800px;
  margin: 0 auto;
  border: 1px solid red;
}
.f1 {
  width: 800px;
  border: 1px solid #000;
}

.f2 {
  width: 800px;
  border: 1px solid #666;
}
</style>
