<template>
	<div>
		<page-header-nav ref="FormHeaderNav" :pageTitle="$route.query.pageTitle" prePageName="数据集列表">
			<el-button type="primary" @click="goToTag">开始标注</el-button>
		</page-header-nav>
	</div>
</template>

<script>
export default {
	name: 'DataManageDetail',
	methods: {
    goToTag() {
      this.$router.push({
        path: 'DataManageTag',
        query: {
          id: this.$route.query.id
        }
      });
		}
	}
}
</script>

<style scoped>

</style>