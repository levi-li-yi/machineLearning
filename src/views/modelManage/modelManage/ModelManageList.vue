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
					:row-key="(row) => row.id"
					:expand-row-keys="expandKeys"
					@expand-change="expandChange"
					border
					style="width: 100%">
					<common-column v-for="(item, index) in tableColumns" :column="item" :key="index" :tableBtns="tableBtns" :listData="expandListData" :totalCount="totalCount" @updateData="updateData">
					</common-column>
					<el-table-column
						:resizable="false"
						label="操作"
						class-name="operation_btn"
						width="150">
						<template>
							<p class="btn_item">创建新版本</p>
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
		<!--<div v-if="activeName === 'second'">-->
			<!--<page-compose @refresh="init">-->
				<!--<div class="compose_btn"></div>-->
				<!--&lt;!&ndash;查询组件&ndash;&gt;-->
				<!--<search-comps-->
					<!--ref="searchComps"-->
					<!--:searchList="searchList"-->
					<!--:searchResult="searchResult"-->
					<!--:searchSeniorShow="false"-->
					<!--v-bind="$attrs"-->
					<!--@searchInfo="searchInfo">-->
				<!--</search-comps>-->
			<!--</page-compose>-->
			<!--<div class="table_container">-->
				<!--<el-table-->
					<!--:data="tableData"-->
					<!--border-->
					<!--style="width: 100%">-->
					<!--<common-column v-for="(item, index) in tableColumns" :column="item" :key="index">-->
					<!--</common-column>-->
				<!--</el-table>-->
				<!--&lt;!&ndash;分页组件&ndash;&gt;-->
				<!--<common-pagination-->
					<!--@updateData="init"-->
					<!--:currentPage="searchForm.pageNumber"-->
					<!--:total="totalCount || 0"-->
					<!--:pageSize="searchForm.pageSize">-->
				<!--</common-pagination>-->
			<!--</div>-->
		<!--</div>-->
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
      listData: {},
      expandKeys: [],
			expandListData: {},
			currentModelId: '',
      tableBtns: ['部署', '发布模型', '删除']
    }
  },
  computed: {
    tableData() {
      return this.listData.list || [];
    },
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
        url: '/umodel/list',
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
      this.$router.push('/dataManageForm')
    },
		//
    expandChange(row, expandedRows) {
      console.log(row);
      this.expandKeys = [];
      if (expandedRows.length) {
        if (row) {
          this.expandKeys.push(row.id)
        }
        this.currentModelId = row.id;
        this.getModelList();
      }
    },
		// 获取模型版本列表
		getModelList(page = {pageNo:1, pageSize: 10}) {
      const postData = {
        method: 'post',
        url: '/umodelversion/list',
        data: {
          pageNo: page ? page.pageNo : 1,
          pageSize: page ? page.pageSize : this.listData.pageSize || 10,
          query: {
            modelId: this.currentModelId
          }
        },
      };
      this.$http(postData).then(res => {
        const result = res.data;
        this.expandListData = result || {};
      }).catch(() => {
        this.expandListData = {}
			});
    },
    updateData(pageData) {
      this.getModelList(pageData);
    }
  }
}
</script>

<style scoped>

</style>