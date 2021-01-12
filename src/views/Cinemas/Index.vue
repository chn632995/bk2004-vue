<template>
    <div>
        <el-calendar v-model="value"> </el-calendar>
    </div>
</template>

<script>
import Vue from "vue";
import { Calendar } from "element-ui";
Vue.use(Calendar);
export default {
    data() {
        return {
            value: new Date(),
        };
    },
};
</script>

<style lang="scss">
.el-calendar__title {
    color: blue;
}
</style>
