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
						<!--<el-radio :label="2">GPU</el-radio>-->
					</el-radio-group>
				</el-form-item>
				<el-form-item label="规格:">
					<el-input
						v-model="dec"
						readonly
						disabled
						placeholder="请输入描述">
					</el-input>
					<!--<el-select-->
						<!--filterable-->
						<!--size="small"-->
						<!--placeholder="请选择规格">-->
						<!--<el-option-->
							<!--v-for="item in list"-->
							<!--:key="item.id"-->
							<!--:label="item.text"-->
							<!--:value="item.id">-->
						<!--</el-option>-->
					<!--</el-select>-->
				</el-form-item>
			</el-form>
		</div>
		<!--底部按钮-->
		<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm"></form-bottom-btn>
	</div>
</template>

<script>
import jupyterData from './jupyterData';
import {isContainNumOrLetter} from'@/utils/validate'

export default {
	name: 'DevelopmentEnvForm',
  data() {
    return {
      isLoading: false,
      list: [],
      ruleForm: {
        name: '',
        description: ''
			},
      rules: {
        name: [
					{required: true, message: '名称不能为空', trigger: 'blur'},
					{validator: isContainNumOrLetter, message: '名称只能包含字母和数字', trigger: 'blur' }
				]
			},
      radio: 1,
      jupyterData: jupyterData,
      dec: '4 cores 8G',
    }
  },
	computed: {
    jupyterList() {
      return this.$store.state.jupyterList || [];
		}
	},
  methods: {
    cancel() {
      this.$openConfirm('确定离开？', '提示', 'warning').then(() => {
        this.$router.back();
      })
    },
    async confirm() {
      this.$refs.ruleForm.validate((valid) =>{
        if (valid) {
          this.isLoading = true;
          this.submitForm();
				}
			});
		},
		// 提交Notebook
		submitForm() {
      this.ruleForm.status = 'ID_ML_NOTEBOOK_STATUS_STOP';
      const postData = {
        url: '/notebook/save',
        method: 'post',
        data: this.ruleForm
      };
      return this.$http(postData).then(() =>{
        this.submitJupyter();
			}).catch(() =>{
        this.isLoading = false;
			});
		},
		// 提交到kube jupyter
		submitJupyter() {
      if (!this.ruleForm.name) return;
      const isExist = this.jupyterList.some(item =>item.name === this.ruleForm.name);
      const postData = this.jupyterData;
      postData.name = this.ruleForm.name;
      postData.workspace.name = `workspace-${this.ruleForm.name}`;
      postData.workspace.type = isExist ? 'Existing' : 'New';
      return this.$http({
        url: '/jupyter/api/namespaces/anonymous/notebooks',
				method: 'post',
				data: postData,
        baseURL: false
			}).then(() => {
        this.$router.push('/developmentEnvList');
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