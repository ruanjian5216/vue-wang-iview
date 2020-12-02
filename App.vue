<template>
  <div id="app">
    <WangSkeleton  :options="options"  />
    <!-- :childrenOption="childrenOption" -->
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
        // row: 3,
        // 列数(默认:1)
        // column: 1,
        // 每个元素宽(默认:30)
        // width: "800px",
        // 每个元素的高(默认:30)
        // height: "30px",
        // 背景颜色(有默认)
        // backgroundColor: "#ccc",
        // 对齐方式(默认:左)
        // justifyContent: "flex-start",
        // 是否动画(默认:无)
        active: true,
        // 行间距(默认:10)
        // itemRowMargin: "10px",
        // 列间距(默认: 0)
        // itemColumnMargin: "0px",
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
            width: "40px",
            // 每个元素的高(默认40)
            height: "40px",
            // 背景颜色(有默认)
            backgroundColor: "#ccc",
            // 水平对齐方式(默认:左)
            justifyContent: "flex-start",
            // 垂直对齐方式(默认:center)
            alignItems: "center",
            // 是否动画(默认:无)
            active: true,
            // 行间距(默认: 10)
            itemRowMargin: "10px",
            // 列间距(默认: 0)
            itemColumnMargin: "0px",
          },
        },
        // 分割线
        {
          type: "line",
          options: {
            //  行
            row: 2,
            // 列
            column: 2,
            width: "120px",
            height: "20px",
            backgroundColor: "#ccc",
            justifyContent: "flex-start",
            // 垂直对齐方式(默认:center)
            alignItems: "center",
            // 是否动画
            active: true,
            // 行间距(默认:10)
            itemRowMargin: "10px",
            // 列间距(默认: 0)
            itemColumnMargin: "0px",
          },
        },
        // 卡片
        {
          type: "card",
          options: {
            // 行数(默认:1)
            row: 2,
            // 列数(默认:1)
            column: 2,
            // 每个元素宽(默认:30)
            width: "30px",
            // 每个元素的高(默认:30)
            height: "30px",
            // 背景颜色(有默认)
            backgroundColor: "#ccc",
            // 对齐方式(默认:左)
            justifyContent: "flex-start",
            // 是否动画(默认:无)
            active: true,
            // 行间距(默认:10)
            itemRowMargin: "10px",
            // 列间距(默认: 0)
            itemColumnMargin: "0px",
            // 垂直对齐方式(默认:center)
            alignItems: "center",
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
            width: "600px",
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
            firstWidth: "300px",
            // 末条宽度(默认 '')
            // lastWidth: "300px",
            // 垂直对齐方式(默认:center)
            alignItems: "center",
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>
