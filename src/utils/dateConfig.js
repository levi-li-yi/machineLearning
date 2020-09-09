import momentCofig from 'moment'

/**
 * dateConfig: element 日期控件快捷键配置
 * @type {{pickerOptions: {shortcuts: *[]}}}
 */
export function dateConfig () {
  return {
    pickerOptions: { // 日期格式的快捷键配置项
      shortcuts: [{
        text: '最近一周',
        onClick: (picker) => {
          const end = new Date(window.serverTime)
          const start = momentCofig(window.serverTime).subtract(1, 'weeks').toDate()
          picker.$emit('pick', [start, end])
        }
      }, {
        text: '最近一个月',
        onClick: (picker) => {
          const end = new Date(window.serverTime)
          const start = momentCofig(window.serverTime).subtract(1, 'months').toDate()
          picker.$emit('pick', [start, end])
        }
      }, {
        text: '最近三个月',
        onClick: (picker) => {
          const end = new Date(window.serverTime)
          const start = momentCofig(window.serverTime).subtract(3, 'months').toDate()
          picker.$emit('pick', [start, end])
        }
      }]
    }
  }
}
/**
 * 转换开始时间戳，时分秒00:00:00
 */
export function startTimeStamp (date) {
  return momentCofig(date).startOf('day').unix() * 1000
}
/**
 * 转换结束时间戳，时分秒23:59:59
 */
export function endTimeStamp (date) {
  return momentCofig(date).endOf('day').unix() * 1000
}
