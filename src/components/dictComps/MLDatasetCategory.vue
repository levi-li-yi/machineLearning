<template>
	<span>{{dictLabel || ''}}</span>
</template>

<script>
const field = 'MLDatasetCategory';

export default {
	name: 'MLDatasetCategory',
  props: {
    data: Object
  },
	computed: {
    dictLabel() {
      const dict = this.$store.state.dictAll[field];
      const dictArr = dict ? dict.labels : [];
      return dictArr.find(item => item.id === this.data.category).label || '';
    }
	}
}
</script>

<style scoped>

</style>