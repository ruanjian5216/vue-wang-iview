 <!-- 头像 -->
<template>
  <div class="WangSkeleton-body">
    <div
      class="wang-circlecom-innerWapper"
      :class="{'wang-active': active }"
      v-if="!isUseSlot"
      :style="{ justifyContent, alignItems }"
      style="height: 100%"
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
          class="wang-circlecom-item"
          :style="{ width, height, backgroundColor, margin: itemRowMargin }"
        ></div>
      </div>
    </div>
    <!-- 使用插槽 -->
    <slot v-else />
  </div>
</template>

<script>
export default {
  name:"WangSkeletonCirclecom",
  data() {
    return {
      // 多少列
      row: this.options.row || 1,
      column: this.options.column || 1,
      width: this.options.width || "40px",
      height: this.options.height || "40px",
      backgroundColor: this.options.backgroundColor || "#F2F2F2",
      justifyContent: this.options.justifyContent || "flex-start",
      active: this.options.active || false,
      itemRowMargin: this.options.itemRowMargin || "10px",
      itemColumnMargin: this.options.itemColumnMargin || "0px",
      alignItems: this.options.alignItems || "center",
    };
  },
  props: {
    // 是否使用插槽
    isUseSlot: {
      type: Boolean,
      default: false,
    },
    // 设置项
    options: {
      type: Object,
      default: () => ({}),
    },
    childrenOption: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="less" scoped>
.wang-circlecom-innerWapper {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}
// 每个元素

.wang-circlecom-item {
  border-radius: 50%;
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
