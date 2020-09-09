<template>
	<div class="url_map_config">
		<div class="table_layout_header">
			<span>映射名称</span>
			<span>代码路径参数</span>
			<span>映射路径</span>
		</div>
		<el-form>
			<div class="input_row">
				<span class="handler_icon"><i class="el-icon-arrow-down"></i></span>
				<el-form-item>
					<el-input></el-input>
				</el-form-item>
				<el-form-item>
					<el-input></el-input>
				</el-form-item>
				<p class="init_url">= /home/work/modelarts/outputs/</p>
				<el-form-item>
					<el-input></el-input>
				</el-form-item>
				<span class="handler_icon"><i class="el-icon-delete"></i></span>
			</div>
			<div class="textarea_row">
				<p class="remarks_title">描述:</p>
				<el-form-item>
					<el-input
						placeholder="请输入描述"
						type="textarea"
						:autosize="{ minRows: 4, maxRows: 8}"
						maxLength="255">
					</el-input>
					<p class="textarea_length">0/255</p>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'UrlMapConfig'
}
</script>

<style lang="less">
	.url_map_config{
		width: 80%;
		padding-left: 22%;
		box-sizing: border-box;
		.table_layout_header{
			padding-left: 10px;
			span:nth-child(1) {
				width: 15%;
			}
		}
		.el-form{
			padding: 0;
		}
		.handler_icon{
			width: 20px;
			cursor: pointer;
		}
		.input_row{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 10px;
			.init_url{
				line-height: 24px;
			}
			.el-form-item{
				display: block;
				width: 15%;
				margin: 0!important;
			}
			.el-form-item__content{
				flex: none!important;
			}
			.el-input__inner{
				height: 24px;
				line-height: 24px;
			}
		}
		.textarea_row{
			padding: 10px 20px;
			background-color: #f2f5fc;
			.remarks_title{
				font-size: 12px;
				padding-bottom: 10px;
			}
			.el-form-item{
				display: unset;
				margin-bottom: 0;
			}
			.el-form-item__content{
				flex: none!important;
				width: 100%;
			}
		}
	}
</style>