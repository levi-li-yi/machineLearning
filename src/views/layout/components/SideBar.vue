<template>
	<div class="side_bar_container">
		<div class="side_bar_item">
			<router-link :to="{path: 'overview'}">总览</router-link>
		</div>
		<div class="side_bar_item">
			<router-link :to="{path: 'developmentEnvList'}">开发环境</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/algorithmManageList">算法管理</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/trainingManageList">训练管理</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/modelManageList">模型管理</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/deploymentOnlineList">部署上线</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SideBar'
}
</script>

<style lang="less">
	.side_bar_container{
		.side_bar_item{
			height: 64px;
			a{
				display: inline-block;
				width: 100%;
				line-height: 64px;
				text-decoration: none;
				padding-left: 20px;
				box-sizing: border-box;
				color: rgba(0, 0, 0, 0.647058823529412);
			}
			.router-link-active{
				color:rgb(21, 101, 192);
				background-color: rgba(240, 242, 245, 1);
			}
			&:hover{
				background-color: rgba(240, 242, 245, 1);
			}
		}
	}
</style>