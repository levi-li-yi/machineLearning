<template>
	<div class="form_submit_btn">
		<el-button @click="cancel">取消</el-button>
		<el-button type="primary" @click="confirm">{{confirmName || '确定'}}</el-button>
	</div>
</template>

<script>
export default {
	name: 'FormSubmitBtn',
  props: {
    confirmName: String
  },
	methods: {
    cancel() {
      this.$emit('cancel');
		},
    confirm() {
      this.$emit('confirm');
		}
	}
}
</script>

<style scoped lang="less">
	.form_submit_btn{
		width: calc(100% - 200px);
		height: 70px;
		padding-right: 10%;
		box-sizing: border-box;
		position: fixed;
		right: 0;
		bottom: 0;
		z-index: 99999;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: #fff;
		box-shadow: 0px -2px 4px #eee;
	}
</style>