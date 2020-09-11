<template>
	<div>
		<page-compose @refresh="init">
			<div class="compose_btn">
				<el-button type="primary" @click="createHandler">创建Notebook</el-button>
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
					label="操作"
					align="center"
					width="100">
					<template slot-scope="scope">
						<el-button class="btn_item word_btn" @click="openJupyter(scope.row.name)">打开</el-button>
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
  name: 'DevelopmentEnvList',
  data() {
    return {
      tableColumns: tableColumns,
      searchList: tableColumns,
      searchResult: NaN,
      searchForm: {},
      totalCount: NaN,
      searchData: {},
      listData: {},
      jupyterList: [],
			jupyterTimer: null,
    }
  },
  computed: {
    tableData() {
      return this.listData.list || [];
    }
  },
  mounted() {
    this.init();
    this.pollJupyter();
    this.jupyterList = this.$store.state.jupyterList ? [...this.$store.state.jupyterList] : [];
  },
  methods: {
    searchInfo() {
    },
    init(page) {
      const postData = {
        method: 'post',
        url: '/notebook/list',
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
		// 获取jupyter列表
		getJupyterList() {
      this.$http({
				url: '/jupyter/api/namespaces/anonymous/notebooks',
				method: 'get',
        baseURL: false
			}).then(res => {
        const result = res.notebooks || [];
        this.jupyterList = [...result];
        this.$store.commit('SetJupyterList', this.jupyterList);
      });
		},
		// 检查jupyter的状态
		// checkJupyterStatus(row) {
     //    setInterval(() =>{
     //      const kubeData = this.jupyterList.find((kube) => kube.name === row.name);
     //      return !(kubeData && kubeData.status && kubeData.status === 'runing');
		// 		}, 2000);
		// },
		// 轮询jupyterList
		pollJupyter() {
      this.jupyterTimer = setInterval(() => {
        if (!this.listData.list.every((item) => item.kubeStatus && item.kubeStatus === 'runing')) {
          this.getJupyterList();
				}
			}, 1500);
		},
		// 新增Notebook
    createHandler() {
      this.$router.push('/developmentEnvForm');
    },
		// 打开jupyter
    openJupyter(name) {
      window.open(`http://192.168.3.46:31380/notebook/anonymous/${name}/tree`);
		}
  },
	beforeDestroy() {
    clearInterval(this.jupyterTimer);
    this.jupyterTimer = null;
	}
}
</script>

<style scoped>

</style>