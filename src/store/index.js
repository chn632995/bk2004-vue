import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // 状态（数据源，存储需要共享数据的）
    state: {
        // 定义一个数据源（可以是任意类型）
        num: 0,
        num2: 100,
    },
    // 用于存放修改状态的方法的（同步）
    mutations: {
        // 设置num的方法
        setNum(state, arg) {
            // 例如，让每次调用setNum的时候让num+arg
            state.num += arg;
        },
        // 设置num2的方法
        setNum2(state, arg) {
            // 例如，让每次调用setNum的时候让num2+arg
            state.num2 += arg;
        },
    },
    // 用于存放修改状态的方法的（异步）
    // 其实actions最终还是调用的mutations
    actions: {},
    // 用于存储对数据进行加工处理的方法的（类似于vue实例中计算属性）
    getters: {},
    // 用于存放模块（从当前前面四个中抽离出去形成的模块）的
    modules: {},
});
