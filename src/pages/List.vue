<template>
    <div>
        列表页
    </div>
</template>

<script>
// 数据地址链接
// https://search-api.helijia.com/search-api/choice/recommendForUser?scope=1&latitude=23120049&longitude=113307650&cityCode=110100&t=1552724999008
export default {
    data(){
        return {
            shopData:[]
        }
    },
    methods:{
        async getData(){
            let data = await this.$axios.get('https://search-api.helijia.com/search-api/choice/recommendForUser?scope=1&latitude=23120049&longitude=113307650&cityCode=110100&t=1552724999008');
            //跨域，服务器代理
            this.shopData = this.shopData.concat(data);
        }
    },
    created(){
        this.getData();
    }
}
</script>

<style scoped>

</style>