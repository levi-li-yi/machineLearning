<template>
	<div class="params_panel">
		<div class="params_item">
			<el-input size="mini"></el-input>
			<span class="equal_icon">=</span>
			<el-input size="mini"></el-input>
			<i class="el-icon-delete"></i>
		</div>
		<p class="add_params">+增加运行参数</p>
	</div>
</template>

<script>
export default {
	name: 'ParamsPanel'
}
</script>

<style lang="less">
	.params_panel{
		padding: 5px;
		background-color: #eef3ff;
		.params_item{
			margin-bottom: 5px;
			display: flex;
			align-items: center;
			.equal_icon{
				margin: 0 5px;
			}
			.el-icon-delete{
				cursor: pointer;
				padding: 0 5px;
				&:hover{
					font-weight: bold;
					color: #000;
				}
			}
		}
		.add_params{
			cursor: pointer;
			color: #1565C0;
		}
	}
</style>