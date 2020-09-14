<template>
	<div>
		<expand-column-form ref="ExpandColumnForm" v-if="expandType === 'form'" :expandColumns="expandColumns" :itemData="itemData">
		</expand-column-form>
		<expand-column-table
			ref="ExpandColumnTable" v-if="expandType === 'table'" :expandColumns="expandColumns" :listData="listData" v-bind="$attrs" v-on="$listeners">
		</expand-column-table>
	</div>
</template>

<script>
import ExpandColumnForm from './ExpandColumnForm';
import ExpandColumnTable from './ExpandColumnTable';

export default {
	name: 'ExpandColumn',
	components: {
    ExpandColumnForm,
    ExpandColumnTable
	},
	props: {
    expandColumns: Array,
    itemData: Object,
		expandType: {
      type: String,
			default: 'form'
		},
		listData:Object
	}
}
</script>

<style scoped>

</style>