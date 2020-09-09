<template>
	<div class="create_form_contoiner" v-loading="isLoading">
		<form-header-nav ref="FormHeaderNav" pageName="训练"></form-header-nav>
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
				<el-form-item label="版本:" prop="name">
					<el-input
						v-model="ruleForm.version"
						placeholder="请输入版本"
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
						<el-radio :label="2">预置算法</el-radio>
					</el-radio-group>
				</el-form-item>
				<!--我的算法-->
				<div v-if="radio === 1">
					<el-form-item label="算法名称:" prop="storagePath">
						<el-input
							v-model="ruleForm.storagePath"
							placeholder="请输入算法名称"
							size="small"
							clearable>
						</el-input>
					</el-form-item>
					<el-form-item label="数据存储位置:" prop="sourcePath">
						<el-input
							v-model="ruleForm.sourcePath"
							placeholder="请输入数据存储位置"
							size="small"
							clearable>
						</el-input>
					</el-form-item>
					<el-form-item label="输出路径:" prop="sourcePath">
						<el-input
							v-model="ruleForm.sourcePath"
							placeholder="请输入输出路径"
							size="small"
							clearable>
						</el-input>
					</el-form-item>
				</div>
				<!--预置算法-->
				<div v-if="radio === 2">
					<el-form-item label="预置算法名称:" prop="category">
						<el-select
							v-model="ruleForm.category"
							filterable
							size="small"
							placeholder="请选择标注类型">
							<el-option
								v-for="item in prealgorithmList"
								:key="item.id"
								:label="item.label"
								:value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="数据来源:" prop="category">
						<el-select
							v-model="ruleForm.category"
							filterable
							size="small"
							placeholder="请选择标注类型">
							<el-option
								v-for="item in dataSourceList"
								:key="item.id"
								:label="item.name"
								:value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="数据版本:" prop="category">
						<el-select
							v-model="ruleForm.category"
							filterable
							size="small"
							placeholder="请选择标注类型">
							<el-option
								v-for="item in dataVersionList"
								:key="item.id"
								:label="item.label"
								:value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="数据存储位置:" prop="name">
						<el-input
							v-model="ruleForm.name"
							placeholder="请输入名称"
							size="small"
							clearable>
						</el-input>
					</el-form-item>
					<el-form-item label="模型输出:" prop="name">
						<el-input
							v-model="ruleForm.name"
							placeholder="请输入名称"
							size="small"
							clearable>
						</el-input>
					</el-form-item>
					<el-form-item label="运行参数:">
						<params-panel ref="ParamsPanel"></params-panel>
					</el-form-item>
					<el-form-item label="作业日志路径:" prop="name">
						<el-input
							v-model="ruleForm.name"
							placeholder="请输入名称"
							size="small"
							clearable>
						</el-input>
					</el-form-item>
					<el-form-item label="类型:">
						<el-radio-group v-model="radio1">
							<el-radio :label="1">预置算法</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="规格:" prop="category">
						<el-select
							v-model="ruleForm.category"
							filterable
							size="small"
							placeholder="请选择规格">
							<el-option
								v-for="item in categoryList"
								:key="item.id"
								:label="item.label"
								:value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
				</div>
				<!--常用框架-->
			</el-form>
		</div>
		<!--底部按钮-->
		<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm"></form-bottom-btn>
	</div>
</template>

<script>
import ParamsPanel from './components/ParamsPanel';

export default {
	name: 'TrainingManageForm',
	components: {
    ParamsPanel
	},
  data() {
    return {
      radio: 2,
      radio1: 1,
      isLoading: false,
      ruleForm: {
        name: '',
        description: '',
        category: '',
        storagePath: '',
        sourcePath: ''
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
      },
      prealgorithmList: [], // 预置算法列表
			dataSourceList: [], // 数据源列表
      dataVersionList: [], // 数据版本列表
      categoryList: []
    }
  },
	mounted() {
    this.getPrealgorithm();
    this.getDataSourceList();
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
		// 获取预置算法列表
		getPrealgorithm() {
      const postData = {
        url: '/presetalgorithm/list',
        method: 'post',
        data: { pageNo: 1, pageSize: 999999}
      };
      this.$http(postData).then((res) => {
        this.prealgorithmList = res.data.list || [];
      })
		},
		// 获取数据源列表
		getDataSourceList() {
      const postData = {
        url: '/udataset/list',
        method: 'post',
        data: { pageNo: 1, pageSize: 999999}
      };
      this.$http(postData).then((res) => {
        this.dataSourceList = res.data.list || [];
      })
		},
		// 获取数据版本
		getUDatasetVersion(dataId) {
      const postData = {
        url: '/udatasetversion/list',
        method: 'post',
        data: { pageNo: 1, pageSize: 999999 , query: {datasetId: dataId}}
      };
      this.$http(postData).then((res) => {
        this.dataVersionList = res.data.list || [];
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