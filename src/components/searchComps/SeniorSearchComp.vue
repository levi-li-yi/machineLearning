<template>
  <el-form @submit.native.prevent class="search_senior" :class="{is_show: isShow}">
    <div class="search_list">
      <div class="search_item" v-for="item in searchConfig" :key="item.searchName">
        <template v-if="item.searchType === 'input'">
          <span class="search_label">{{item.label}}：</span>
          <el-input v-model.trim="searchData[item.searchName]"
                    :placeholder="'请输入' + item.label"
                    size="small"
                    class="search_wrapper"
                    clearable></el-input>
        </template>
        <template v-else-if="item.searchType === 'select'">
          <span class="search_label">{{item.label}}：</span>
          <el-select v-model="searchData[item.searchName]"
                     :class="{'select_multiple': item.searchMultiple}"
                     class="search_wrapper"
                     :multiple="item.searchMultiple"
                     :collapse-tags="item.searchMultiple"
                     :placeholder="'请选择' + item.label"
                     size="small">
            <el-option
              v-for="(item1, index) in item.selectList"
              :key="index"
              :label="item1.text || item1.label"
              :value="item1.id">
            </el-option>
          </el-select>
        </template>
        <template v-else-if="item.searchType === 'date'">
          <span class="search_label">{{item.label}}：</span>
          <el-date-picker
            v-model="searchData[item.searchName]"
            class="search_wrapper"
            type="daterange"
            size="small"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
            :default-time="['00:00:00', '23:59:59']"
            :picker-options="pickerOptions">
          </el-date-picker>
        </template>
      </div>
    </div>
    <div class="mes_btn">
      <el-button native-type="submit" type="primary" @click="info">查询</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
  </el-form>
</template>

<script>
/**
 * @author tangjia
 * @description 高级查询下拉显示部分
 */
export default {
  name: 'seniorSearch',
  props: {
    searchList: {
      // 搜索配置列表
      type: Array,
      required: true
    },
    isShow: {
      // 是否收起高级搜索
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 搜索项列表
    searchConfig() {
      return this.searchList.map(item => {
        if (typeof item.searchConfig === 'object' && Object.keys(item.searchConfig).length) {
          // 如果 searchConfig 存在
          item.searchName = item.searchConfig.name || item.prop
          item.searchMultiple = item.searchConfig.multiple || false
          item.searchDict = item.searchConfig.dict
          item.searchType = item.searchConfig.type || 'input'
          item.searchValue = item.searchConfig.value || ''
        } else {
          // 搜索配置不存在，默认为input类型，值为空
          item.searchName = item.prop
          item.searchType = 'input'
          item.searchValue = ''
        }
        // let searchDict = this.$store.state.dict[item.searchDict] || {labels: []};
        let searchDict = {labels: []};
        if (item.searchMultiple === true && item.searchType === 'select') {
          item.selectList = item.searchConfig.selectList || searchDict.labels
          item.searchValue = item.searchConfig.value || []
        } else if (item.searchType === 'select') {
          item.selectList = item.searchConfig.selectList || [{id: '', label: '全部'}, ...searchDict.labels]
        }
        return item
      })
    }
  },
  watch: {
    searchConfig() {
      this.initSearchData()
    }
  },
  data() {
    return {
      // 搜索内容
      searchInfo: {},
      // 高级搜索的数据
      searchData: {},
      // 日期格式的快捷键配置项
      pickerOptions: this.$dateConfig.pickerOptions
    }
  },
  mounted() {
    this.initSearchData()
  },
  methods: {
    // 初始化searchData
    initSearchData() {
      this.searchConfig.forEach(item => {
        this.$set(this.searchData, item.searchName, item.searchValue)
      })
    },
    // 高级搜索查询
    info() {
      this.searchInfo = {}
      this.searchConfig.forEach(item => {
        if (this.searchData[item.searchName] && this.searchData[item.searchName].length > 0) {
          let searchItem = {
            searchName: item.searchName,
            searchValue: this.searchData[item.searchName],
            searchType: item.searchType,
            searchMultiple: item.searchMultiple
          }
          this.dataFormat(searchItem)
        }
      })
      this.$emit('searchInfo', this.searchInfo)
    },
    // 数据格式化
    dataFormat(searchItem) {
      let str2 = '';
      switch (searchItem.searchType) {
        case 'input':
          this.searchInfo[searchItem.searchName] = searchItem.searchValue
          break
        case 'select':
          if (searchItem.searchMultiple) {
            this.searchInfo[searchItem.searchName] = searchItem.searchValue.join(',')
          } else {
            this.searchInfo[searchItem.searchName] = searchItem.searchValue
          }
          break
        case 'date':
          str2 = searchItem.searchName.slice(0, 1).toLocaleUpperCase() + searchItem.searchName.slice(1)
          this.searchInfo['begin' + str2] = searchItem.searchValue[0]
          this.searchInfo['end' + str2] = searchItem.searchValue[1]
          break
      }
    },
    // 重置搜索条件及数据
    reset() {
      this.initSearchData()
      this.$emit('searchInfo', {})
    },
    // 清空所有搜索条件
    clean() {
      this.initSearchData()
    },
  }
}
</script>
<style lang="less">
  .search_senior{
    .el-input__inner {
      border-color: #dbe1e8;
    }
    .el-range-editor.el-input__inner{
      padding: 3px 0px 3px 5px;
    }
  }
</style>
<style scoped lang="less">
  .search_senior {
    margin: 20px;
    font-size: 14px;
    padding: 5px 15px 15px;
    background-color: #f0f8ff;
    border: 1px solid rgba(0, 180, 255, 0.3);
    display: none;
    &.is_show {
      display: block;
    }
    .search_list {
      display: flex;
      flex-wrap: wrap;
    }
    .search_item {
      flex: 0 0 25%;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding-top: 10px;
      padding-right: 15px;
      box-sizing: border-box;
    }
    .search_label {
      flex: 0 0 100px;
    }
    .search_wrapper {
      flex: 1;
      width: 100%;
    }
    .search_more {
      margin-top: 10px;
      flex: 0 0 100px;
      justify-content: flex-end;
    }
    .mes_btn {
      margin-top: 20px;
      justify-content: center;
    }
  }
</style>
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
