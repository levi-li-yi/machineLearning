<template>
	<div>
		<page-compose @refresh="init">
			<div class="compose_btn">
				<el-button type="primary" @click="createHandler">部署</el-button>
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
					width="180">
					<template>
						<p class="btn_item">修改</p>
						<p class="btn_item">预测</p>
						<p class="btn_item">启动</p>
						<p class="btn_item">删除</p>
					</template>
				</el-table-column>
			</el-table>
			<!--分页组件-->
			<common-pagination
				@updateData="init"
				:currentPage="listData.pageNo"
				:total="totalCount || 0"
				:pageSize="listData.pageSize">
			</common-pagination>
		</div>
	</div>
</template>

<script>
import tableColumns from './tableColumns';

export default {
	name: 'DeploymentOnlineList',
  data() {
    return {
      tableColumns: tableColumns,
      searchList: tableColumns,
      searchResult: NaN,
      searchForm: {},
      totalCount: NaN,
      searchData: {},
      listData: [],
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
        url: '/udeployment/list',
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
      this.$router.push('/deploymentOnlineForm')
    }
  }
}
</script>

<style scoped>

</style>