<template>
  <div
    class="WangSkeleton-body"
    :class="{ 'wang-active': active }"
    :style="{ justifyContent, alignItems, margin: itemMargin }"
  >
    <!-- 每个元素 -->
    <div
      v-for="(itemx, indexx) in column"
      :key="indexx"
      class="wang-card-item-column"
      :style="{ margin: itemColumnMargin }"
    >
      <div
        v-for="(itemy, indexy) in row"
        :key="indexy"
        class="wang-card-item"
        :style="{ width, height, backgroundColor, margin: itemRowMargin }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WangSkeletonCard",
  data() {
    return {
      //  多少列
      row: this.options.row || 1,
      // 多少列
      column: this.options.column || 1,
      width: this.options.width || "30px",
      height: this.options.height || "30px",
      backgroundColor: this.options.backgroundColor || "#F2F2F2",
      justifyContent: this.options.justifyContent || "flex-start",
      active: this.options.active || false,
      itemMargin: this.options.itemMargin || "0 5px",
      itemRowMargin: this.options.itemRowMargin || "0",
      itemColumnMargin: this.options.itemColumnMargin || "0",
      alignItems: this.options.alignItems || "center",
    };
  },
  props: {
    // 设置项
    options: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="less" scoped>
// .WangSkeleton-body {
//   display: flex;
// //  width: 100%; 
// //  background-color: red;
// }

.wang-card-item {
  border-radius: 3px;
}
// 是否开启动画
.wang-active {
  animation: skeleton-blink 1.2s ease-in-out infinite;
}

// 动画
@keyframes skeleton-blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
