<template>
	<el-form label-position="left" inline class="expand_column_form">
		<el-form-item v-for="(item, index) in expandColumns" :label="item.label" :key="index">
			<span>{{itemData.row[item.props]}}</span>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
  name: 'ExpandColumn',
  props: {
    expandColumns: {
      type: Array
    },
    itemData: {
      type: Object
		}
  },
	created() {
    console.log(this.expandColumns);
  },
	mounted() {
    console.log(this.itemData);
  }
}
</script>

<style lang="less">
	.expand_column_form{
		padding: 10px 22px;
		display: flex;
		flex-flow: wrap;
		.el-form-item{
			width: 50%;
			margin: 0;
			display: flex;
		}
		.el-form-item__label{
			width: 100px;
		}
		.el-form-item__content{
			color: #333;
			flex: 1;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>