import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import qs from 'qs'
Vue.prototype.$qs = qs
import 'amfe-flexible'
// 按需引入
import { NavBar, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem, Card, Popup, Search, Sidebar, SidebarItem, Cell, Form, Field, Button, CellGroup, Checkbox, CheckboxGroup, Stepper, Sku, GoodsAction, GoodsActionButton, GoodsActionIcon } from 'vant';
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Card);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Sidebar);
Vue.use(Form);
Vue.use(Cell);
Vue.use(Field);
Vue.use(Button);
Vue.use(CellGroup);
Vue.use(SidebarItem);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(Sku);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.config.productionTip = false
import './assets/style/reset.css'
import './assets/style/style.css'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')