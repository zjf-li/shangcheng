import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: () =>
        import ('../views/Index.vue')
}, {
    path: '/classify',
    component: () =>
        import ('../views/Classify.vue')
}, {
    path: '/shopcart',
    component: () =>
        import ('../views/ShopCart.vue'),
    meta: { requirsAuth: true }
}, {
    path: '/reg',
    component: () =>
        import ('../views/Reg.vue')
}, {
    path: '/mine',
    component: () =>
        import ('../views/Mine.vue')
}, {
    path: '/detail/:id',
    component: () =>
        import ('../views/Details.vue')
}]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requirsAuth) {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('./reg')
        }
    } else {
        next()

    }
})

export default router