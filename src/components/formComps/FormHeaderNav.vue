<template>
	<div class="form_header_nav">
		<p>{{`${noCreateField ? '' : '创建'}${pageName}`}}</p>
		<el-button size="mini" @click="goBack">
			<i class="el-icon-arrow-left"></i>
			{{`返回${pageName}列表`}}
		</el-button>
	</div>
</template>

<script>
export default {
	name: 'FormHeaderNav',
  props: {
    pageName: {
      type: String,
			default: ''
		},
		noCreateField: {
      type: Boolean,
			default: false
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
	.form_header_nav{
		display: flex;
		align-items: center;
		padding: 10px 0;
		background-color: #eef3ff;
		p{
			margin-right: 10px;
		}
	}
</style>