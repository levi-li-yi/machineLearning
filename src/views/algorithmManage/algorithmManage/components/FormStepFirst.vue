<template>
	<div class="create_form_contoiner">
		<div class="form_container_panel">
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules">
				<!---->
				<el-form-item label="名称:">
					<el-input
						placeholder="请输入名称"
						size="small"
						clearable>
					</el-input>
				</el-form-item>
				<el-form-item label="版本:">
					<el-input
						placeholder="请输入版本"
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
				<!---->
				<!--<form-line :remarks="lineRemarks"></form-line>-->
				<el-form-item label="AI引擎:">
					<el-select
						filterable
						size="small"
						placeholder="请选择AI引擎">
						<el-option
							v-for="item in list"
							:key="item.id"
							:label="item.text"
							:value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="代码目录:">
					<el-input
						placeholder="请输入代码目录"
						size="small"
						clearable>
					</el-input>
				</el-form-item>
				<el-form-item label="启动文件:">
					<el-input
						placeholder="请输入启动文件"
						size="small"
						clearable>
					</el-input>
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
				<form-line></form-line>
				<!--<el-form-item label="输入路径映射位置:" class="remakrs_textarea_item">-->
					<!--<el-input-->
						<!--v-model="urlRemarks"-->
						<!--readonly-->
						<!--placeholder="请输入输入路径映射位置"-->
						<!--type="textarea"-->
						<!--:autosize="{ minRows: 4, maxRows: 8}"-->
						<!--maxLength="255">-->
					<!--</el-input>-->
				<!--</el-form-item>-->
			</el-form>
			<command-frame ref="CommandFrame"></command-frame>
			<!--<url-map-config ref="UrlMapConfig"></url-map-config>-->
		</div>
		<!--底部按钮-->
		<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm" confirmName="下一步"></form-bottom-btn>
	</div>
</template>

<script>
// import UrlMapConfig from './UrlMapConfig';
import CommandFrame from './CommandFrame';

export default {
	name: 'FormStepFirst',
	components: {
    // UrlMapConfig
    CommandFrame
	},
  data() {
    return {
      list: [],
      ruleForm: {},
      rules: {},
			lineRemarks: '选择常用引擎创建训练作业。每个算法的代码目录最多支持1000个文件，文件深度不超过32，总大小不超过5GB。',
			urlRemarks: '（可选）为您的算法创建输入路径映射。映射路径是计算容器本地的路径，当使用该算法创建训练时，每条输入路径映射配置，都会引导用户申明一个对应的云存储位置。在训练启动时，系统将为您把申明的云存储位置上的数据，传输到对应的映射路径（容器本地路径）。该容器本地路径，则会在启动命令中，以key=value命令行参数的形式，传入你的算法脚本或镜像。您仅需解析该入参，并访问容器本地路径上的数据即可。'
    }
  },
  methods: {
    cancel() {
      this.$openConfirm('确定离开？', '提示', 'warning').then(() => {
        this.$router.back();
      })
    },
    confirm() {
      this.$emit('confirm')
		}
  }
}
</script>

<style scoped>

</style>