<template>
	<div class="model_manage_list">
		<el-tabs v-model="activeName" class="list_page_tabs">
			<el-tab-pane label="我的模型" name="first"></el-tab-pane>
			<el-tab-pane label="公开模型" name="second"></el-tab-pane>
		</el-tabs>
		<div v-if="activeName === 'first'">
			<page-compose @refresh="init">
				<div class="compose_btn">
					<el-button type="primary" @click="createHandler">创建模型</el-button>
				</div>
				<!--查询组件-->
				<search-comps
					ref="searchComps"
					:searchList="searchList"
					:searchResult="searchResult"
					:searchSeniorShow="false"
					v-bind="$attrs"
					@searchInfo="searchInfo">
				</search-comps>
			</page-compose>
			<div class="table_container">
				<el-table
					:data="tableData"
					border
					style="width: 100%">
					<common-column v-for="(item, index) in tableColumns" :column="item" :key="index">
					</common-column>
				</el-table>
				<!--分页组件-->
				<common-pagination
					@updateData="init"
					:currentPage="searchForm.pageNumber"
					:total="totalCount || 0"
					:pageSize="searchForm.pageSize">
				</common-pagination>
			</div>
		</div>
		<div v-if="activeName === 'second'">
			<page-compose @refresh="init">
				<div class="compose_btn"></div>
				<!--查询组件-->
				<search-comps
					ref="searchComps"
					:searchList="searchList"
					:searchResult="searchResult"
					:searchSeniorShow="false"
					v-bind="$attrs"
					@searchInfo="searchInfo">
				</search-comps>
			</page-compose>
			<div class="table_container">
				<el-table
					:data="tableData"
					border
					style="width: 100%">
					<common-column v-for="(item, index) in tableColumns" :column="item" :key="index">
					</common-column>
				</el-table>
				<!--分页组件-->
				<common-pagination
					@updateData="init"
					:currentPage="searchForm.pageNumber"
					:total="totalCount || 0"
					:pageSize="searchForm.pageSize">
				</common-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import tableColumns from './tableColumns';

export default {
	name: 'ModelManageList',
  data() {
    return {
      activeName: 'first',
      tableColumns: tableColumns,
      searchList: tableColumns,
      searchResult: NaN,
      searchForm: {},
      totalCount: 20,
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    searchInfo() {
    },
    init() {
      this.$http({url: 'http:localhost:8080/mock/data/list', method: 'get'}).then(res => {
        console.log(res);
      });
    },
    createHandler() {
      this.$router.push('/modelManageForm')
    }
  }
}
</script>

<style scoped>

</style>