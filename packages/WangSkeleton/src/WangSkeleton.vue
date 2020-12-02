<template>
  <div class="WangSkeleton-body">
    <div v-if="!isUseSlot">
      <!-- 卡片部分 -->
      <wang-skeleton-card :options="options" v-if="type === 'card'" :style="{ width, height,backgroundColor }"/>
      <!-- 头像 -->
      <wang-skeleton-circlecom :options="options" v-if="type === 'avatar'" :style="{ width, height,backgroundColor }"/>
      <!-- 分割线 -->
      <wang-skeleton-straight-line :options="options" v-if="type === 'line'" :style="{ width, height,backgroundColor }"/>
      <!-- 列表 -->
      <wang-skeleton-listcom
        :options="options"
        v-if="type === 'list'"
        :style="{ width, height,backgroundColor }"
      />

      <!-- 自定义部分 -->
      <div v-if="type === 'custom'" class="custom-box" :style="{ width, height,backgroundColor }">
        <div v-for="(item, index) in childrenOptionCheckd" :key="index">
          <wang-card v-if="item.type === 'card'" :options="item.options" />
          <wang-skeleton-circlecom
            v-if="item.type === 'avatar'"
            :options="item.options"
          />
          <wang-skeleton-straight-line
            v-if="item.type === 'line'"
            :options="item.options"
          />
          <wang-skeleton-listcom v-if="item.type === 'list'" :options="item.options" />
        </div>
      </div>
    </div>
    <!-- 使用插槽 -->
    <slot v-else />
  </div>
</template>

<script>
import WangSkeletonCard from "./WangSkeletonCard";
import WangSkeletonCirclecom from "./WangSkeletonCirclecom";
import WangSkeletonStraightLine from "./WangSkeletonStraightLine";
import WangSkeletonListcom from "./WangSkeletonListcom";

export default {
  name: "WangSkeleton",
  components: {
    WangSkeletonCard,
    WangSkeletonCirclecom,
    WangSkeletonStraightLine,
    WangSkeletonListcom,
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
      type: Array,
      default: () => [],
    },
    // 显示类型
    type: {
      type: String,
      default: "list",
    },
    // 是否显示动效
    active: {
      type: [Boolean,String],
      default: false,
    },
    // 盒子的长度
    width: {
      type: String,
      default: "",
    },
    //盒子的宽度
    height: {
      type: String,
      default: "",
    },
    // 模块的背景颜色
    backgroundColor:{
      type:String,
      default:''
    }
  },
  computed: {
    // 配置项格式化设置(全局)
    childrenOptionCheckd() {
      let childrenOption = JSON.parse(JSON.stringify(this.childrenOption));
      // 如果有子配置项数组,再进行循环
      if (childrenOption) {
        childrenOption.forEach((item) => {
          // 如果有传全局的配置就使用全局的配置,如果没有就是用单独的每个item的配置(每个item的配置优先级高)
          item.options.backgroundColor
            ? (item.options.backgroundColor = item.options.backgroundColor)
            : (item.options.backgroundColor = this.options.backgroundColor);
          item.options.active
            ? (item.options.active = item.options.active)
            : (item.options.active = this.options.active);
          item.options.itemRowMargin
            ? (item.options.itemRowMargin = item.options.itemRowMargin)
            : (item.options.itemRowMargin = this.options.itemRowMargin);
          item.options.itemColumnMargin
            ? (item.options.itemColumnMargin = item.options.itemColumnMargin)
            : (item.options.itemColumnMargin = this.options.itemColumnMargin);
          item.options.alignItems
            ? (item.options.alignItems = item.options.alignItems)
            : (item.options.alignItems = this.options.alignItems);
          item.options.justifyContent
            ? (item.options.justifyContent = item.options.justifyContent)
            : (item.options.justifyContent = this.options.justifyContent);
          item.options.height
            ? (item.options.height = item.options.height)
            : (item.options.height = this.options.height);
          item.options.width
            ? (item.options.width = item.options.width)
            : (item.options.width = this.options.width);
          item.options.row
            ? (item.options.row = item.options.row)
            : (item.options.row = this.options.row);
        });
      }
      return childrenOption;
    },
  },
};
</script>

<style lang="less" scoped>
.WangSkeleton-body {
  width: 100%;
  height: 100%;
}

.custom-box {
  display: flex;
}
</style>
