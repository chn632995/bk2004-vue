// 该配置文件是用于配置网络请求需要的uri地址
// 集中管理地址，效率高

// uri的特定前缀
// let prefix = "/api";
let prefix = "https://api.iynn.cn/film/api/v1/";

export default {
    // 获取城市的信息
    getCities: prefix + "/getCitiesInfo?cors=T&",
    // 获取正在热映列表
    getNowPlaying: prefix + "/getNowPlayingFilmList?cors=T&",
    // 获取即将上映列表
    getComingSoon: prefix + "/getComingSoonFilmList?cors=T&",
    // 获取电影详情信息
    getDetail: prefix + "/getFilmInfo?cors=T&",
    // ....
};
