<template>
	<div class="form_line">
		<p class="form_remarks" v-if="remarks">{{remarks}}</p>
	</div>
</template>

<script>
export default {
	name: 'FormLine',
	props: {
    remarks: String
	}
}
</script>

<style scoped lang="less">
	.form_line{
		color: #C0C4CC;
		padding: 20px 0 10px 0;
		border-top: 1px solid #e2e2e2;
		.form_remarks{
			font-size: 12px;
			padding-left: 22%;
		}
	}
</style>