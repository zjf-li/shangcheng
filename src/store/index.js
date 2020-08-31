import Vue from 'vue'
import Vuex from 'vuex'
import { getIndexBanner, getIndexList, getDetailInfo, getClassifyList, getCart } from "../utils/api.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        IndexBannerList: [],
        IndexGoodsList: [],
        detailInfo: [],
        classifyList: [],
        registerInfo: []
    },
    mutations: {
        // 接收banner图数据
        acceptIndexBannerList(state, payload) {
            state.IndexBannerList = payload.bannerList
        },
        // 接收主页列表数据
        acceptGoodsList(state, payload) {
            state.IndexGoodsList = payload.goodsList
        },
        // 接收详情页数据
        acceptDetailInfo(state, payload) {
            state.detailInfo = payload.detailInfo
        },
        // 接收分类列表数据
        acceptClassifyList(state, payload) {
            state.classifyList = payload.classifyList
        },
        // 接收购物车数据
        acceptShopCart(state, payload) {
            state.shopCart = payload.shopCart
        },

    },
    actions: {
        // 获取banner图数据
        async getBanner({ commit }) {
            const { result } = await getIndexBanner();
            commit('acceptIndexBannerList', {
                bannerList: result.list
            })
        },
        // 获取主页列表数据
        async getGoodsList({ commit }, params) {
            const { result } = await getIndexList(params);
            commit('acceptGoodsList', {
                goodsList: result.list
            })
        },
        // 获取详情页数据
        async getDetailInfo({ commit }, params) {
            const { result } = await getDetailInfo(params);
            commit('acceptDetailInfo', {
                detailInfo: result
            })
        },
        // 获取分类列表数据
        async getClassifyList({ commit }, params) {
            const { result } = await getClassifyList(params);
            commit('acceptClassifyList', {
                classifyList: result
            })
        },
        async getShopCart({ commit }, params) {
            const { result } = await getCart(params);
            commit('acceptShopCart', {
                shopCart: result
            })
        },
    },
    modules: {}
})