<template>
	<div>
		<keep-alive>
			<router-view v-if="needKeepAliveRouters()"></router-view>
		</keep-alive>
		<router-view v-if="!needKeepAliveRouters()"></router-view>
	</div>
</template>

<script>
export default {
	name: 'AppMain',
  methods: {
    needKeepAliveRouters() {
      const routes = this.$router.options.routes || [];
      const currentRouteName = this.$router.currentRoute.name;
      const curRouteConf = routes.find((item) => item.path.split('/')[1] === currentRouteName);
      return curRouteConf && curRouteConf.meta && curRouteConf.meta.keepAlive;
    },
  }
}
</script>

<style scoped lang="less">
	.app_main{
		height: 100%;
	}
</style>