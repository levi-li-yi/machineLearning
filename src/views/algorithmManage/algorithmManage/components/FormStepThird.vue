<template>
	<div class="form_step_third">
		<div class="page_container">
			<i class="el-icon-circle-check"></i>
			<h3>操作成功</h3>
			<p>您的算法已经开始创建，请耐心等待。</p>
			<el-button size="mini" @click="$router.back()">返回算法列表</el-button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'FormStepThird'
}
</script>

<style scoped lang="less">
	.form_step_third{
		text-align: center;
		display: flex;
		justify-content: center;
		margin-left: -100px;
		.page_container{
			height: 400px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
		.el-icon-circle-check{
			color: #33cc66;
			font-size: 80px;
		}
		p{
			color: #999;
			font-size: 12px;
			margin: 10px 0;
		}
	}
</style>