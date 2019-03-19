<template>
    <div>
        <Xheader :name='name'></Xheader>	
		<ul>
			<li  v-for="(goods,idx) in imgurl" class="list-main">
				<img class="list-img" :src="goods.url" alt="" />
				<div class="list-conten">
					<p class="conten-name">{{goods.name}}</p>
					<span class="conten-price">￥{{goods.price}}</span>
					<del class="conten-del">￥{{goods.del}}</del>
					<span class="conten-but">{{goods.but}}</span>
				</div>
			</li>		
		</ul>
		
    </div>
</template>

<script>
import	Xheader from '../components/Xheader.vue';
// 数据地址链接
// https://search-api.helijia.com/search-api/choice/recommendForUser?scope=1&latitude=23120049&longitude=113307650&cityCode=110100&t=1552724999008
export default {
	components:{
	   		Xheader
	   	},
    data(){
        return {
            shopData:[],
            name:"为你甄选",
        tabPosition: 'left',
        imgurl:[
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		},
        		{
        			url:require('../assets/listimg.png'),
        			name:'【安神助眠】头部调理缓解头痛失眠',
        			price:'138',
        			del:'398',
        			but:'抢购'
        		}
        		
        ]
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
.reg-top{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #000;
	}
	.reg-top-l{
		display: inline-block;
		color: #ccc;
		margin-left: 15px;
	}
		.reg-top-r{
		display: inline-block;
		color: #fff;
		margin-left: 120px;
	}
	.list-main{
		height: 80px;
		margin-left: 10px;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	.list-img{
		float: left;
		width: 90px;
		height: 90px;
	}
	.list-conten{
		float: left;
		height: 80px;
		
	}
	.conten-name{
		font-size: 16px;
		margin-left: 5px;
		margin-top: 5px;
	}
	.conten-price{
		font-size: 16px;
		margin-left: 5px;
		font-weight: bold;
		color: red;
		display: inline-block;
		margin-top: 45px;
	}
	.conten-del{
		font-size: 16px;
		margin-left: 5px;
		
	}
	.conten-but{
		display: inline-block;
		width: 50px;
		height: 22px;
		font-size: 14px;
		margin-left: 110px;
		background: red;
		color: #fff;
		border-radius: 22px;
		text-align: center;
		font-weight: bold;
		line-height: 22px;
		
	}
</style>