<template>
	<div class="algorithm_manage_list">
		<el-tabs v-model="activeName" class="list_page_tabs">
			<el-tab-pane label="我的算法" name="first"></el-tab-pane>
			<el-tab-pane label="公开算法" name="second"></el-tab-pane>
		</el-tabs>
		<div v-if="activeName === 'first'">
			<page-compose @refresh="init">
				<div class="compose_btn">
					<el-button type="primary" @click="createHandler">创建算法</el-button>
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
					<el-table-column
						:resizable="false"
						label="操作"
						class-name="operation_btn"
						width="220">
						<template>
							<p class="btn_item">发布算法</p>
							<p class="btn_item">创建训练作业</p>
							<p class="btn_item">删除</p>
						</template>
					</el-table-column>
				</el-table>
				<!--分页组件-->
				<common-pagination
					@updateData="init"
					:currentPage="listData.pageNumber"
					:total="totalCount || 0"
					:pageSize="listData.pageSize">
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
	name: 'AlgorithmManageList',
  data() {
    return {
      activeName: 'first',
      tableColumns: tableColumns,
      searchList: tableColumns,
      searchResult: NaN,
      searchData: {},
      totalCount: 0,
      listData: {},
    }
  },
  computed: {
    tableData() {
      return this.listData.list || [];
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    searchInfo() {
    },
    init(page) {
      const postData = {
        method: 'post',
        url: '/algorithm/list',
        data: {
          pageNo: page ? page.pageNo : 1,
          pageSize: page ? page.pageSize : this.listData.pageSize || 10,
          query: {
            ...this.searchData
          }
        },
      };
      this.$http(postData).then(res => {
        const result = res.data;
        this.listData = result || {};
        this.totalCount = this.listData.count || 0;
      });
    },
    createHandler() {
      this.$router.push('/algorithmManageForm')
    }
  }
}
</script>

<style lang="less">
</style>