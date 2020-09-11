<template>
	<div class="expand_column_table">
		<page-compose>
			<div class="compose_btn">
			</div>
			<!--查询组件-->
			<search-comps
				ref="searchComps"
				:searchList="expandColumns"
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
				<common-column v-for="(item, index) in expandColumns" :column="item" :key="index">
				</common-column>
			</el-table>
			<!--分页组件-->
			<common-pagination
				@updateData="updateData"
				:currentPage="listData.pageNo"
				:total="totalCount || 0"
				:pageSize="listData.pageSize">
			</common-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ExpandColumnTable',
	props: {
    expandColumns: Array
	},
  data() {
    return {
      searchList: [],
      searchResult: NaN,
      searchForm: {},
      totalCount: 20,
      listData: {}
    }
  },
	computed: {
    tableData() {
      return this.listData.list || [];
		}
	},
	methods: {
    init() {},
    searchInfo() {
      this.$emit('searchInfo');
		},
    updateData() {
      this.$emit('updateData');
		}
	}
}
</script>

<style scoped lang="less">
	.expand_column_table{
		margin: 10px;
	}
</style>