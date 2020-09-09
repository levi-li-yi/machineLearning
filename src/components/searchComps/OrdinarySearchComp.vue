<template>
  <div class="search_ordinary" v-if="searchConfig.length">
    <div class="search_ordinary_container">
      <el-form @submit.native.prevent class="search_select">
        <el-select
          v-model="searchItem"
          value-key="searchName"
          placeholder="请选择搜索列"
          class="select_label"
          @change="ordinaryData = searchItem.searchValue"
          size="small">
          <el-option
            v-for="(item, index) in searchConfig"
            :key="index"
            :label="item.label"
            :value="item">
          </el-option>
        </el-select>
        <div class="ordinary_data">
          <div
            class="ordinary_input">
            <el-input v-model.trim="ordinaryData"
                      class="search_wrapper"
                      v-if="curSearchItem.searchType === 'input'"
                      :placeholder="'请输入' + curSearchItem.label"
                      size="small"
                      clearable>
            </el-input>
            <el-select
              v-model="ordinaryData"
              class="search_wrapper"
              v-else-if="curSearchItem.searchType === 'select'"
              :placeholder="'请选择' + curSearchItem.label"
              :multiple="curSearchItem.searchMultiple"
              :collapse-tags="curSearchItem.searchMultiple"
              size="small">
              <el-option
                v-for="item1 in curSearchItem.selectList"
                :key="item1.id"
                :label="item1.label"
                :value="item1.id">
              </el-option>
            </el-select>
            <el-date-picker
              v-model="ordinaryData"
              v-else-if="curSearchItem.searchType === 'date'"
              class="search_wrapper"
              type="daterange"
              size="small"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '23:59:59']"
              value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
          </div>
          <div class="mes_btn">
            <el-button
              type="primary"
              native-type="submit"
              @click="dataFormat"
              class="search_btn" icon="el-icon-search"></el-button>
          </div>
        </div>
      </el-form>
      <code-scan
        v-if="codeScan"
        v-bind="$attrs"
        @codeSubmit="handleCodeScan">
      </code-scan>
      <div class="search_result" v-if="!isNaN(searchResult)">已查询出{{searchResult}}条结果</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
/**
 * @author tangjia
 * @description 普通查询部分
 */
export default {
  name: 'ordinarySearch',
  props: {
    searchList: {
      // 搜索配置列表
      type: Array,
      required: true
    },
    searchResult: {
      // 搜索结果
      type: Number,
      default: NaN
    },
    codeScan: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 搜索内容
      searchInfo: {},
      // 当前搜索项
      searchItem: {},
      // 普通搜索的值
      ordinaryData: ''
    }
  },
  computed: {
    // 搜索项列表
    searchConfig() {
      const list = this.searchList.map(item => {
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
      });
      return list;
    },
    curSearchItem() {
      return this.searchConfig.find((item) => item.searchName === this.searchItem.searchName) || {searchType: ''}
    },
  },
  // watch: {
  //   searchConfig() {
  //     this.clean()
  //   }
  // },
  mounted() {
    this.clean();
    console.log(this.searchList);
  },
  methods: {
    // 清空所有搜索条件
    clean() {
      if (typeof this.searchConfig[0] === 'object') {
        this.searchItem = this.searchConfig[0]
        this.ordinaryData = this.searchItem.searchValue
      } else {
        this.searchItem = {}
        this.ordinaryData = ''
      }
    },
    // 普通搜索查询 及 数据格式化
    dataFormat() {
      this.searchInfo = {};
      let str = '';
      if (this.ordinaryData && this.ordinaryData.length > 0) {
        switch (this.searchItem.searchType) {
          case 'input':
            this.searchInfo[this.searchItem.searchName] = this.ordinaryData
            break
          case 'select':
            if (this.searchItem.searchMultiple) {
              this.searchInfo[this.searchItem.searchName] = this.ordinaryData.join(',')
            } else {
              this.searchInfo[this.searchItem.searchName] = this.ordinaryData
            }
            break
          case 'date':
            str = this.searchItem.searchName.slice(0, 1).toLocaleUpperCase() + this.searchItem.searchName.slice(1);
            this.searchInfo['begin' + str] = this.ordinaryData[0];
            this.searchInfo['end' + str] = this.ordinaryData[1];
            break
        }
      }
      this.$emit('searchInfo', this.searchInfo)
    },
    handleCodeScan(value) {
      this.$emit('codeSubmit', value)
    }
  }
}
</script>
<style lang="less">
  .search_ordinary {
    .el-input__inner {
      border-color: #dbe1e8;
      border-radius: 0px;
    }
    .select_label {
      .el-input__inner {
        border-right: 0;
        line-height: 31px;
      }
    }
    .search_select {
      .el-select .el-input.is-focus .el-input__inner {
        border-color: #dbe1e8;
      }
      .el-input__inner:focus {
        border-color: #dbe1e8;
      }
      .el-select, .el-date-editor {
        /*width: 360px;*/
      }
      .el-date-editor.is-active:hover {
        border-color: #dbe1e8;
      }
      .search_btn {
        border-left: 0;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
  }
</style>
<style scoped lang="less">
  .search_ordinary {
    /*margin: 20px;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search_ordinary_container {
      display: flex;
      align-items: center;
    }
    .other_btn {
      display: flex;
      align-items: center;
      .senior_btn {
        font-size: 14px;
        color: #00B4FF;
        cursor: pointer;
        .iconfont {
          font-size: 12px;
        }
      }
    }
    .search_select {
      display: flex;
      align-items: center;
      /*flex: 0 0 520px;*/
      .select_label {
        /*flex: 0 0 105px;*/
        width: 100px;
        .el-input__inner {
          border-right: 0;
          border-radius: 0px;
        }
      }
      .ordinary_data {
        flex: 0 0 250px;
        height: 32px;
        display: flex;
        align-items: flex-start;
        .ordinary_input {
          flex: 1;
          .search_wrapper {
            width: 100%;
          }
        }
      }
    }
    .search_result {
      font-size: 14px;
      margin-left: 10px;
      color: #999;
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
