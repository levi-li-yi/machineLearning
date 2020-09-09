/**
 * 提示
 * @param type 提示类型
 * @param str 提示内容
 */
export default function tipMessage(type, str) {
  this.$message({
    type: type,
    message: str,
    duration: 1500,
    center: true
  })
}
