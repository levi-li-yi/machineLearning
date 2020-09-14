<template>
	<span>{{dictLabel || ''}}</span>
</template>

<script>
const field = 'MLModelDeployCategory';

export default {
	name: 'MLModelDeployCategory',
	props: {
		data: Object
	},
	computed: {
		dictLabel() {
			const dict = this.$store.state.dictAll[field];
			const dictArr = dict ? dict.labels : [];
			if (this.data.deployCategory) return dictArr.find(item => item.id === this.data.deployCategory).label || '';
			return '';
		}
	}
}
</script>

<style scoped>

</style>