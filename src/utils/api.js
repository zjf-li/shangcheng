import http from './http'
// banner接口
export function getIndexBanner(params) {
    return http.get('/home/banner', params)
}
// 主页列表接口
export function getIndexList(params) {
    return http.post('/home/recommend', params)
}
// 商品详情信息接口
export function getDetailInfo(params) {
    return http.post('/detail', params)
}
// 分类列表接口
export function getClassifyList(params) {
    return http.post('/classify', params)
}
// 获取注册验证码接口
export function getCode(params) {
    return http.post('/register/getCode', params)
}

// 提交注册账号接口
export function register(params) {
    return http.post('/register', params)
}
// 获取购物车接口
export function getCart(params) {
    return http.post('/cart/get', params)
}