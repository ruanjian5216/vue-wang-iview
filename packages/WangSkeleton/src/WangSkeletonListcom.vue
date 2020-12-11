 <!-- 列表 -->
<template>
  <div class="WangSkeleton-body">
    <div
      class="wang-straightline-innerWapper"
      :class="{ 'wang-active': active }"
      :style="{ justifyContent, alignItems, margin: itemMargin }"
    >
      <!-- 每个元素 -->
      <div
        v-for="(itemx, indexx) in column"
        :key="indexx"
        :style="{ margin: itemColumnMargin }"
      >
        <div
          v-for="(itemy, indexy) in row"
          :key="indexy"
          class="wang-straightline-item"
          :style="{
            width: itemWidthCheck(indexy),
            height,
            backgroundColor,
            margin: itemRowMargin,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WangSkeletonListcom",
  data() {
    return {
      // 多少列
      row: this.options.row || 4,
      column: this.options.column || 1,
      width: this.options.width || "600px",
      height: this.options.height || "20px",
      backgroundColor: this.options.backgroundColor || "#F2F2F2",
      justifyContent: this.options.justifyContent || "flex-start",
      active: this.options.active || false,
      itemMargin: this.options.itemMargin || "0 5px",
      itemRowMargin: this.options.itemRowMargin || "0",
      itemColumnMargin: this.options.itemColumnMargin || "0",
      firstWidth:
        this.options.firstWidth ||
        `calc(${this.options.width ? this.options.width : "600px"} - 40%)`,
      lastWidth: this.options.lastWidth || "",
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

  computed: {
    // 列表类型的长度判断显示
    itemWidthCheck(index) {
      return (index) => {
        if (index === 0) {
          return this.firstWidth;
        } else if (index === this.row - 1) {
          return this.lastWidth;
        } else {
          return this.width;
        }
      };
    },
  },
};
</script>

<style lang="less" scoped>
.wang-straightline-innerWapper {
  display: flex;
  height: 100%;
  width: 100%;
}
// 每个元素
.wang-straightline-item {
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
