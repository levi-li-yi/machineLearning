<template>
	<div class="side_bar_container">
		<div class="side_bar_item">
			<router-link :to="{path: 'overview'}">总览</router-link>
		</div>
		<div class="side_bar_item">
			<router-link :to="{path: 'dataManageList'}" :class="{'router-link-active': getClass('dataManage')}">数据管理</router-link>
		</div>
		<div class="side_bar_item">
			<router-link :to="{path: 'developmentEnvList'}" :class="{'router-link-active': getClass('developmentEnv')}">开发环境</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/algorithmManageList" :class="{'router-link-active': getClass('algorithmManage')}">算法管理</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/trainingManageList" :class="{'router-link-active': getClass('trainingManage')}">训练管理</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/modelManageList" :class="{'router-link-active': getClass('modelManage')}">模型管理</router-link>
		</div>
		<div class="side_bar_item">
			<router-link to="/deploymentOnlineList" :class="{'router-link-active': getClass('deploymentOnline')}">部署上线</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SideBar',
  computed: {
    currentRouteItem() {
      return this.$route.meta.subMenu || '';
    }
  },
	methods: {
    getClass(subItem) {
      return subItem === this.currentRouteItem;
    }
	}
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