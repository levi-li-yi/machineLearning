<template>
	<div class="create_form_contoiner">
		<form-header-nav ref="FormHeaderNav" pageName="Notebook"></form-header-nav>
		<div class="form_container_panel">
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules">
				<el-form-item label="名称:">
					<el-input
						placeholder="请输入名称"
						size="small"
						clearable>
					</el-input>
				</el-form-item>
				<el-form-item label="描述:">
					<el-input
						placeholder="请输入描述"
						type="textarea"
						:autosize="{ minRows: 4, maxRows: 8}"
						maxLength="255">
					</el-input>
					<p class="textarea_length">0/255</p>
				</el-form-item>
				<el-form-item label="类型:">
					<el-select
						filterable
						size="small"
						placeholder="请选择类型">
						<el-option
							v-for="item in list"
							:key="item.id"
							:label="item.text"
							:value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="规格:">
					<el-select
						filterable
						size="small"
						placeholder="请选择规格">
						<el-option
							v-for="item in list"
							:key="item.id"
							:label="item.text"
							:value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</div>
		<div class="table_container_panel">
		
		</div>
		<!--底部按钮-->
		<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm"></form-bottom-btn>
	</div>
</template>

<script>
export default {
	name: 'DevelopmentEnvForm',
  data() {
    return {
      list: [],
      ruleForm: {},
      rules: {}
    }
  },
  methods: {
    cancel() {
      this.$openConfirm('确定离开？', '提示', 'warning').then(() => {
        this.$router.back();
      })
    },
    confirm() {}
  }
}
</script>

<style scoped>

</style>