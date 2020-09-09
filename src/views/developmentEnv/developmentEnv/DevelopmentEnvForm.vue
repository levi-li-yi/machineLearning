<template>
	<div class="create_form_contoiner">
		<form-header-nav ref="FormHeaderNav" pageName="Notebook"></form-header-nav>
		<div class="form_container_panel">
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules">
				<el-form-item label="名称:" prop="name">
					<el-input
						v-model="ruleForm.name"
						placeholder="请输入名称"
						size="small"
						clearable>
					</el-input>
				</el-form-item>
				<el-form-item label="描述:" prop="description">
					<el-input
						v-model="ruleForm.description"
						placeholder="请输入描述"
						type="textarea"
						:autosize="{ minRows: 4, maxRows: 8}"
						maxLength="255">
					</el-input>
					<p class="textarea_length">{{ruleForm.description.length}}/255</p>
				</el-form-item>
				<el-form-item label="算法类型:">
					<el-radio-group v-model="radio">
						<el-radio :label="1">CPU</el-radio>
						<el-radio :label="2">GPU</el-radio>
					</el-radio-group>
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
      ruleForm: {
        name: '',
        description: ''
			},
      rules: {},
      radio: 1
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