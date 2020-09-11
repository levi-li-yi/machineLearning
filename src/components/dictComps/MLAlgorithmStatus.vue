<template>
	<span>{{dictLabel || ''}}</span>
</template>

<script>
const field = 'MLAlgorithmStatus';

export default {
	name: 'MLAlgorithmStatus'	,
  props: {
    data: Object
  },
  computed: {
    dictLabel() {
      const dict = this.$store.state.dictAll[field];
      const dictArr = dict ? dict.labels : [];
      if (this.data.status) return dictArr.find(item => item.id === this.data.status).label || '';
      return '';
    }
  }
}
</script>

<style scoped>

</style>