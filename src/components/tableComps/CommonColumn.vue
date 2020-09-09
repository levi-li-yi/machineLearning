<template>
  <el-table-column
    v-if="!column.noForCol"
    :show-overflow-tooltip="!colConfig.noTooltip&&true"
    :prop="column.prop"
    :label="column.label"
    :type="column.type"
    :label-class-name="column.labelClassName || column.prop"
    :width="colConfig.width"
    :min-width="colConfig.minWidth"
    :fixed="colConfig.fixed"
    :align="colConfig.align || 'center'"
    :className="colConfig.className"
    :resizable="isResizable"
    :sortable="isSortable"
    :formatter="formatter">
    <template  slot-scope="scope">
      <span v-if="column.type !== 'expand'">
        <common-cell-comp
          v-if="column.type !== 'expand'"
          :column="column"
          :colConfig="colConfig"
          :row="scope.row"
          @jump="$emit('jump', scope)"></common-cell-comp>
      </span>
      <expand-column-form :itemData="scope" :expandColumns="column.expandColumns" v-if="column.type === 'expand'"></expand-column-form>
    </template>
  </el-table-column>
</template>

<script>
import ExpandColumnForm from './ExpandColumnForm';
import CommonCellComp from './CommonCellComp';

export default {
  name: 'CommonColumn',
  components: {
    ExpandColumnForm,
    CommonCellComp
  },
  props: {
    column: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  computed: {
    colConfig() {
      return this.column.colConfig || {};
    },
    // 是否可拖拽列宽
    isResizable() {
      if (typeof this.colConfig.resizable === 'boolean') {
        return this.colConfig.resizable;
      }
      return this.colConfig.fixed !== 'right';
    },
    // 是否可排序
    isSortable() {
      if (typeof this.colConfig.sortable === 'boolean') {
        return this.colConfig.sortable;
      }
      return true;
    },
    // 格式化内容
    formatter() {
      const formatter = this.colConfig.formatter || null;
      if (formatter && typeof this[formatter] === 'function') {
        return this[formatter];
      }
      return null;
    }
  },
};
</script>

<style scoped>

</style>
