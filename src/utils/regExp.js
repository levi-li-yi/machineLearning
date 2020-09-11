export const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export const regNumber = /^[A-Za-z0-9|_|-]+$/

export const regName = /^[A-Za-z0-9|_-|-|\u4e00-\u9fa5]+$/

export const regPhone = /^((\d{3,4}-)|\d{3.4}-)?\d{7,8}$/

// 正数
export const regPositive = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
