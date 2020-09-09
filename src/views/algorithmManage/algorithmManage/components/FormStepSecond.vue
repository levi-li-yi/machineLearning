<template>
	<div class="create_form_contoiner">
		<div class="table_container_panel table_container">
			<el-table
				:data="tableData"
				class="form_cell_table"
				border
				style="width: 100%">
				<el-table-column
					type="selection"
					width="45"
					align="center">
				</el-table-column>
				<el-table-column label="名称">
					<template slot-scope="scope">
						<el-input v-model="scope.row.name"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="描述">
					<template slot-scope="scope">
						<el-input v-model="scope.row.name"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="类型">
					<template slot-scope="scope">
						<el-input v-model="scope.row.name"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="有效范围">
					<template slot-scope="scope">
						<el-input v-model="scope.row.name"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="可调整">
					<template slot-scope="scope">
						<el-input v-model="scope.row.name"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="默认值">
					<template slot-scope="scope">
						<el-input v-model="scope.row.name"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="必需">
					<template slot-scope="scope">
						<el-input v-model="scope.row.name"></el-input>
					</template>
				</el-table-column>
				<el-table-column
					:resizable="false"
					align="center"
					label="操作"
					width="80">
					<template>
						<p class="btn_item">删除</p>
					</template>
				</el-table-column>
			</el-table>
			<p class="add_table_brn">+增加超级参数</p>
		</div>
		<!--底部按钮-->
		<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm" confirmName="下一步"></form-bottom-btn>
	</div>
</template>

<script>
export default {
	name: 'FormStepSecond',
  data() {
    return {
      tableData: [
        {name: 'Jack'}
      ]
    }
  },
  methods: {
    cancel() {
      this.$openConfirm('确定离开？', '提示', 'warning').then(() => {
        this.$router.back();
      })
    },
    confirm() {
      console.log(this.tableData);
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped lang="less">
	.add_table_brn{
		color: #1565C0;
		cursor: pointer;
		margin-top: 10px;
	}
</style>