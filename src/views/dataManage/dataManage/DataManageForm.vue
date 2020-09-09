<template>
	<div class="create_form_contoiner">
		<form-header-nav ref="FormHeaderNav" pageName="数据"></form-header-nav>
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
				<el-form-item label="应用类型:" prop="category">
					<el-select
						v-model="ruleForm.category"
						filterable
						size="small"
						placeholder="请选择标注类型">
						<el-option
							v-for="item in categoryList"
							:key="item.id"
							:label="item.label"
							:value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="数据集输入位置:" prop="storagePath">
					<el-input
						v-model="ruleForm.storagePath"
						placeholder="请输入数据集输入位置"
						size="small"
						clearable>
					</el-input>
				</el-form-item>
				<el-form-item label="数据集输出位置:" prop="sourcePath">
					<el-input
						v-model="ruleForm.sourcePath"
						placeholder="请输入数据集输出位置"
						size="small"
						clearable>
					</el-input>
				</el-form-item>
			</el-form>
		</div>
		<!--底部按钮-->
		<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm"></form-bottom-btn>
	</div>
</template>

<script>
export default {
	name: 'DataManageForm',
  data() {
    return {
			isLoading: false,
      ruleForm: {
        name: '',
        description: '',
        category: '',
        storagePath: '',
        sourcePath: '',
			},
      rules: {
        name: [
					{required: true, message: '名称不能为空', trigger: 'blur'}
				],
        category: [
          {required: true, message: '应用类型不能为空', trigger: 'change'}
        ],
        storagePath: [
          {required: true, message: '数据集输入位置不能为空', trigger: 'blur'}
        ],
        sourcePath: [
          {required: true, message: '数据集输出位置不能为空', trigger: 'blur'}
        ]
			}
    }
  },
	computed: {
    categoryList() {
      const dict = this.$store.state.dictAll['MLDatasetCategory'];
      return dict ? dict.labels : [];
		}
	},
	methods: {
    cancel() {
      this.$openConfirm('确定离开？', '提示', 'warning').then(() => {
        this.$router.back();
			})
		},
    confirm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) this.submitForm();
			})
		},
		submitForm() {
      this.isLoading = true;
      const postData = {
        url: '/udataset/save',
				method: 'post',
				data: this.ruleForm
			};
      this.$http(postData).then(() => {
        this.$router.push('/DataManageList');
        this.$tipMessage('success', '保存成功');
      }).finally(() => {
        this.isLoading = false;
			});
		}
	}
}
</script>

<style scoped>

</style>