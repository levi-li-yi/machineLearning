import axios from 'axios';
import {Message} from 'element-ui';

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: '/ml',
  timeout: 10000,
  withCredentials: true,
});

service.interceptors.request.use(config => {
  config.headers['X-Request-Width'] = 'XMLHttpRequest';
  return config;
}, error => {
  console.log(error);
});

service.interceptors.response.use(response => {
  const result = response.data;
  // if (response.config.responseType === 'blob') {}
  if (!result || result.code !== 200) {
    Message({
      message: result.message || '参数错误',
      type: 'error',
      duration: 2000,
      center: true
    });
    const err = new Error(result);
    return Promise.reject(err);
  }
  return result;

}, error => {
  if (!axios.isCancel(error)) {
    let msg = '';
    if (error.request.status === 302) {
      msg = '请先登录'
    } else if (error.request && error.request.data) {
      msg = error.request.data.message
    } else if (error.request.status === 403) {
      msg = '可能是没有模块访问权限或接口地址错误'
    } else if (error.request.status === 404) {
      msg = '接口地址错误'
    } else {
      msg = 'Something Happened'
    }
    Message({
      message: msg,
      type: 'error',
      duration: 3 * 1000,
      center: true,
      onClose: () => {
        if (error.request.status === 302 && !process.env.OFFLINE) {
          window.location = process.env.SERVER_URL
        }
      }
    })
  }
  return Promise.reject(error);
});

export default (postData) => {
  const params = {
    url: postData.url,
    method: postData.method,
    headers: postData.headers || {}
  };
  if (postData.onUploadProgress) {
    params.onUploadProgress = postData.onUploadProgress;
  }
  if (postData.responseType) {
    params.responseType = postData.responseType;
  }
  if (postData.cancelToken) {
    params.cancelToken = postData.cancelToken;
  }
  if (postData.method.toLocaleLowerCase() === 'get') {
    params.params = postData.params;
  }
  if (postData.method.toLocaleLowerCase() === 'post') {
    params.data = postData.data;
  }
  return service(params);
}