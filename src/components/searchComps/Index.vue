<template>
  <div class="search_comps" v-if="searchFilterList.length > 0">
    <ordinary-search-comp
      v-bind="$attrs"
      v-on="$listeners"
      @codeSubmit="handleCodeScan"
      :searchList="searchFilterList"
      ref="OrdinarySearchComp">
      <div class="other_btn" v-if="searchSeniorShow">
        <span class="senior_btn" v-show="searchSeniorBtnShow" v-if="!isShow" @click="isShow = true">
          高级查询
          <i class="iconfont icon-arrow_down"></i>
        </span>
        <span class="senior_btn" v-show="searchSeniorBtnShow" v-else @click="isShow = false">
          收起
          <i class="iconfont icon-arrow_up"></i>
        </span>
      </div>
    </ordinary-search-comp>
    <senior-search-comp
      v-if="searchSeniorShow"
      ref="SeniorSearchComp"
      v-on="$listeners"
      :isShow="isShow"
      :searchList="searchFilterList">
    </senior-search-comp>
  </div>
</template>

<script>
import SeniorSearchComp from './SeniorSearchComp'
import OrdinarySearchComp from './OrdinarySearchComp'

export default {
  name: 'SearchComps',
  props: {
    searchList: {
      // 搜索配置列表
      type: Array,
      required: true
    },
    searchSeniorShow: {
      // 是否显示高级搜索
      type: Boolean,
      default: true
    },
    searchSeniorBtnShow: {
      // 是否显示高级搜索按钮
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 是否显示高级搜索
      isShow: false,
    }
  },
  computed: {
    // 过滤后的搜索列表
    searchFilterList() {
      return this.searchList.filter(item => item.noSearch !== true)
    }
  },
  components: {
    SeniorSearchComp,
    OrdinarySearchComp,
  },
  mounted() {
  },
  methods: {
    // 清空所有搜索条件
    clean() {
      this.$refs.OrdinarySearchComp.clean()
      if (this.searchSeniorShow) {
        this.$refs.SeniorSearchComp.clean()
        this.isShow = false
      }
    },
    // 搜索回调
    _searchInfo(searchInfo) {
      this.$emit('searchInfo', searchInfo)
    },
    handleCodeScan(value) {
      this.$emit('codeSubmit', value)
    }
  }
}
</script>
<!--页面结构说明：-->
<!--1、<template></template>标签内容为页面Html-->
<!--<one-title></one-title>标签为页面标题-->
<!--fixed_top_56的class类名为页面主体内容-->
<!--import语句为外部依赖引用-->
<!--2、<script></script>标签内容为页面事务逻辑-->
<!--name属性为组件名称-->
<!--components属性为外部组件-->
<!--props属性为组件外部传参-->
<!--data属性为组件内部参数-->
<!--computed属性为组件计算属性-->
<!--mounted属性为组件挂载-->
<!--methods为组件方法-->
<!--watcher为组件观察者-->
<!--3、<style></style>标签内容为页面样式-->
