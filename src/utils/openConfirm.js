import {MessageBox} from 'element-ui'

/**
 * 确认弹出框
 * @param message
 * @param title
 * @param type
 * @returns {Promise<MessageBoxData>}
 */
export default function openConfirm(message, title, type) {
  return MessageBox.confirm(message, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    confirmButtonClass: 'el-button--primary',
    customClass: 'open_confirm',
    type: type
  })
}