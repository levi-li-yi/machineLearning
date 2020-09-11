<template>
	<div>
		<page-compose @refresh="init">
			<div class="compose_btn">
				<el-button type="primary" @click="createHandler">创建训练</el-button>
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
					width="150">
					<template>
						<p class="btn_item">发布数据</p>
						<p class="btn_item">更多</p>
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
	name: "TrainingManageList",
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
      const list = this.listData.list || [];
      list.forEach((item) =>item.itemDiff = this.$timeDiff(item.startTime, item.endTime));
      return list;
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
        url: '/training/list',
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
      this.$router.push('/trainingManageForm')
    }
  }
}
</script>

<style scoped>

</style>