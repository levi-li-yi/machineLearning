<template>
	<div class="create_form_contoiner">
		<form-header-nav ref="FormHeaderNav" pageName="部署" :noCreateField="true"></form-header-nav>
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
					<p class="textarea_length">0/255</p>
				</el-form-item>
				<form-line></form-line>
				<el-form-item label="选择模型及配置:" prop="radio">
					<el-radio-group v-model="ruleForm.radio">
						<el-radio :label="1">我的模型</el-radio>
						<el-radio :label="2">公共模型</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="元模型来源:" prop="category">
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
				<el-form-item label="元模型版本:" prop="category">
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
				<el-form-item label="规格:" prop="category">
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
			</el-form>
		</div>
		<!--底部按钮-->
		<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm"></form-bottom-btn>
	</div>
</template>

<script>
export default {
	name: 'DeploymentOnlineForm',
  data() {
    return {
      isLoading: false,
      ruleForm: {
        name: '',
        description: '',
        category: '',
        storagePath: '',
        sourcePath: '',
        radio: '1'
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
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
}
</script>

<style scoped>

</style>