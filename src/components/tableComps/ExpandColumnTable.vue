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
				<el-table-column
					v-if="tableBtns.length"
					:resizable="false"
					label="操作"
					class-name="operation_btn"
					width="150">
					<template>
						<p class="btn_item"  v-for="(item, index) in tableBtns" :key="index">{{item}}</p>
					</template>
				</el-table-column>
			</el-table>
			<!--分页组件-->
			<common-pagination
				@updateData="updateData"
				:currentPage="listData.pageNo"
				:total="$attrs.totalCount || 0"
				:pageSize="listData.pageSize">
			</common-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ExpandColumnTable',
	props: {
    expandColumns: Array,
    listData: {
      type: Object,
			defaultProps: {}
		}
	},
  data() {
    return {
      searchList: [],
      searchResult: NaN,
      searchForm: {},
    }
  },
	mounted() {
    this.$emit('updateData', 123);
	},
	computed: {
    tableData() {
      return Object.keys(this.listData).length ? this.listData.list : [];
		},
    tableBtns() {
      if (this.$attrs.tableBtns && Array.isArray(this.$attrs.tableBtns)) {
        return this.$attrs.tableBtns;
      } else {
        return [];
      }
    }
	},
	methods: {
    init() {},
    searchInfo() {
      this.$emit('searchInfo');
		},
    updateData(pageData) {
      this.$emit('updateData', pageData);
		}
	}
}
</script>

<style scoped lang="less">
	.expand_column_table{
		margin: 10px;
	}
</style>