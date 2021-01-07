<template>
    <div>
        <h1>这是vuex专用组件</h1>
        <button @click="clickHandler">触发修改</button>
    </div>
</template>

<script>
// 导入map系列的方法
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
    created() {
        // 正常获取state中的数据
        console.log(this.$store.state.num);
        console.log(this.$store.state.num2);
        // 赋值情况（不要使用）
        // this.$store.state.num = 123456;
        // console.log(this.$store.state.num);
    },
    computed: {
        // 映射数据源，数组中写需要的数据
        ...mapState(["num", "num2"]),
    },
    mounted() {
        // 获取映射的数据
        // console.log(this.num);
        // console.log(this.num2);

        // 调用正常mapMutaions进来的方法
        this.setNum(10);
        this.setNum2(-10);
    },
    methods: {
        // 在methods中使用mapMutations方法
        ...mapMutations(["setNum", "setNum2"]),
        clickHandler() {
            // 正常this调用修改数据（同步）的形式
            this.$store.commit("setNum", 5);
            this.$store.commit("setNum2", -5);
        },
    },
};
</script>
