import jmhcSwiper from "./src/components/swiper.vue"
const swiper = {
    install(Vue, options) {
        Vue.component("jmhc-swiper", jmhcSwiper)
    }
};

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(swiper) 
}
export default  swiper