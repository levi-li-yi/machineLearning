<template>
	<div class="page_header_nav">
		<div class="nav_left">
			<p>{{pageTitle}}</p>
			<el-button size="mini" @click="goBack">
				<i class="el-icon-arrow-left"></i>
				{{`返回${prePageName}`}}
			</el-button>
		</div>
		<div class="nav_right">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageHeaderNav',
  props: {
    pageTitle: {
      type: String,
      default: ''
    },
    prePageName: {
      type: String,
      default: ''
    }
  },
	methods: {
		goBack() {
			this.$openConfirm('确定离开？', '提示', 'warning').then(() => {
				this.$router.back();
			})
		}
	}
}
</script>

<style lang="less">
	.page_header_nav{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 0;
		background-color: #eef3ff;
		.nav_left{
			display: flex;
			align-items: center;
		}
		p{
			margin-right: 10px;
		}
	}
</style>