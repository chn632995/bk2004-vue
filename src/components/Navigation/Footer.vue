<template>
    <div>
        <van-tabbar
            v-model="active"
            active-color="#ee0a24"
            inactive-color="#000"
            @change="changeItem"
        >
            <van-tabbar-item icon="home-o">电影</van-tabbar-item>
            <van-tabbar-item icon="search">影院</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
// 导入vant组件
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data() {
        return {
            // 底部导航的默认索引（默认选择第1个）
            active: 0,
            // 定义底部导航需要的三个地址（按顺序）
            urls: ["/films/nowPlaying", "/cinemas", "/center"],
        };
    },
    created() {
        // 纠正刷新之后索引归零的问题
        // 获取路由信息：this.$route
        // this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0;
        this.active = this.urls.indexOf(this.$route.path);
    },
    methods: {
        // 点击菜单的页面处理程序
        changeItem(index) {
            // index为菜单的索引
            this.$router.push(this.urls[index]);
        },
    },
};
</script>
