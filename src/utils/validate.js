import {regEmail, regName, regNumber, regPhone} from './regExp.js'

/**
 * 邮箱验证
 * @param rule
 * @param email
 * @param callback
 */
export function validateEmail(rule, email, callback) {
  if (!email || regEmail.test(email)) {
    callback()
  } else {
    callback(new Error(rule.message))
  }
}

/**
 * 编号验证
 * @param rule
 * @param number
 * @param callback
 */
export function validateNumber(rule, number, callback) {
  if (!number || regNumber.test(number)) {
    callback()
  } else {
    callback(new Error(rule.message))
  }
}

/**
 * 名称验证
 * @param rule
 * @param name
 * @param callback
 */
export function validateName(rule, name, callback) {
  if (!name || regName.test(name)) {
    callback()
  } else {
    callback(new Error(rule.message))
  }
}

/**
 * 固定电话、传真验证
 * @param rule
 * @param {number} phone
 * @param callback
 */
export function validatePhone(rule, phone, callback) {
  if (!phone || regPhone.test(phone)) {
    callback()
  } else {
    callback(new Error(rule.message))
  }
}

/**
 * 非负验证
 * @param rule
 * @param {number} number
 * @param callback
 */
export function notMinus(rule, number, callback) {
  if (number < 0) {
    callback(new Error(rule.message))
  } else {
    callback()
  }
}

/**
 * 正整数
 * @param rule
 * @param number
 * @param callback
 */
export function isPositiveInteger(rule, number, callback) {
  if (!Number.isInteger(number) || number <= 0) {
    callback(new Error(rule.message))
  } else {
    callback()
  }
}

/**
 * 整数
 * @param rule
 * @param number
 * @param callback
 */
export function isInteger(rule, number, callback) {
  if (number && !Number.isInteger(number)) {
    callback(new Error(rule.message))
  } else {
    callback()
  }
}

/**
 * 只能包含数字和字母
 * @param rule
 * @param number
 * @param callback
 */
export function isContainNumOrLetter(rule, str, callback) {
  if (!/^[0-9a-zA-Z]*$/g.test(str) || !isNaN(Number(str))) {
    callback(new Error(rule.message))
  } else {
    callback()
  }
}
/**
 * 类型转化后是否是正整数
 * @param rule
 * @param number
 * @param callback
 */
export function isPosInteger(rule, num, callback) {
  let number = Number(num)
  if (!num) {
    return callback()
  }
  if (!isNaN(number)) {
    if (!/^[1-9]*[1-9][0-9]*$/.test(num)) {
      callback(new Error(rule.message))
    } else {
      callback()
    }
  } else {
    callback(new Error(rule.message))
  }
}
/**
 * 是否是数字
 * @param rule
 * @param number
 * @param callback
 */
export function isNumber(rule, num, callback) {
  let number = Number(num)
  if (isNaN(number)) {
    callback(new Error(rule.message))
  } else {
    callback()
  }
}
