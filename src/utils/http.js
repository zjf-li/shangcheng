import axios from 'axios';
// 添加错误的轻提示
import { Toast } from 'vant';

// 可以使用自定义配置新建一个 axios 实例
var instance = axios.create({
    // 基础路径，相当于提出了公共部分
    baseURL: 'http://www.pudge.wang:3001',
    // 超时事件，在规定的时间内，如果没有请求到数据，就不请求了，返回错误信息
    timeout: 10000,
    // 同意添加请求头信息
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
});

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // config就是请求的内容
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.params.token = token
    // }
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                    params: params
                })
                .then(res => {
                    if (res.status === '0') {
                        resolve(res)
                    } else {
                        Toast(res.msg)
                    }
                }).catch(err => {
                    Toast(err.message)
                })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(url, params)
                .then(res => {
                    if (res.status === '0') {
                        resolve(res)
                    } else {
                        Toast(res.msg)
                    }
                })
                .catch(err => {
                    Toast.allowMultiple(err.message)
                })
        })
    }
}
export default http