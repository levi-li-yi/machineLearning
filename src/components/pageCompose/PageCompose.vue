<template>
	<div class="table_compose">
		<div class="dynamic_panel">
			<slot></slot>
		</div>
		<div class="stable_panel">
			<el-button class="refresh_btn" @click="refresh">
				<i class="iconfont icon-shuaxin"></i>
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageCompose',
	methods: {
    refresh() {
      this.$emit('refresh')
		}
	}
}
</script>

<style lang="less">
	.table_compose{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		.dynamic_panel{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.stable_panel{
			flex: 0;
		}
		.refresh_btn{
			padding: 5px;
		}
	}
</style>