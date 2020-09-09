<template>
	<div class="command_frame">
		<div class="command_frame_left">启动命令:</div>
		<div class="command_frame_right">
			<div class="command_container_header">启动命令</div>
			<div class="command_container">$ abc</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommandFrame'
}
</script>

<style lang="less">
	.command_frame{
		display: flex;
		.command_frame_left{
			width: 22%;
			text-align: right;
			padding-right: 12px;
			box-sizing: border-box;
			font-size: 14px;
			color: #333;
		}
		.command_frame_right{
			width: 44%;
			.command_container_header{
				height: 32px;
				line-height: 32px;
				padding-left: 5px;
				background-color: #666;
				font-size: 14px;
				color: #fff;
			}
			.command_container{
				height: 200px;
				padding-top: 5px;
				padding-left: 5px;
				overflow: hidden;
				text-overflow: ellipsis;
				vertical-align: middle;
				font-size: 12px;
				color: #fff;
				background-color: #000;
			}
		}
	}
</style>