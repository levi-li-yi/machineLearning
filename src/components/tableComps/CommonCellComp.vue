<script>
import * as dictComp from '../dictComps';

export default {
  name: 'CommonCellComp',
  components: dictComp,
  props: {
    // 表格列
    column: {
      type: Object,
      default() {
        return {}
      }
    },
    // 列配置
    colConfig: {
      type: Object,
      default() {
        return {}
      }
    },
    // 行对象
    row: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  render(createElement) {
    // 返回的html
    let html
    // prop值
    let propValue
    // 组件名
    let tag = Object.prototype.hasOwnProperty.call(this.colConfig, 'comp') ? this.colConfig.comp.charAt(0).toUpperCase() + this.colConfig.comp.slice(1) : '';
    // 子组件集合
    let componentList = dictComp || {};
    propValue = this.row[this.column.prop];
    if (tag && Object.prototype.hasOwnProperty.call(componentList,tag)) {
      // 使用组件，并且传入组件名存在
      let data = this.row
      if (tag === 'BoolType') {
        data = {label: this.row[this.colConfig.boolTypeLabel], value: this.row[this.colConfig.boolTypeValue]}
      }
      html = [
        createElement(tag, {
          props: {
            data: data,
            column: this.column
          }
        })
      ]
    } else if (this.colConfig.formatToDay) {
      // 日期格式化
      html = propValue ? this.moment(propValue).format('YYYY-MM-DD') : ''
    } else if (this.colConfig.formatToNumber) {
      // 默认0
      html = propValue || 0
    } else if (this.colConfig.jump) {
      // 点击按钮
      html = [
        createElement('span', {
          on: {
            click: (e) => {
              e.stopPropagation()
              this.$emit('jump')
            }
          },
          class: 'jump_item'
        }, propValue)
      ]
    } else if (this.colConfig.vHtml) {
      html = [
        createElement('span', {
          domProps: {
            innerHTML: propValue
          },
        })
      ]
    } else {
      html = propValue
    }
    return createElement('span', {
      class: 'create_cell'
    }, html)
  }
}
</script>