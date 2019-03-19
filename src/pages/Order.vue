<template>
<<<<<<< HEAD
  <div>
    <mt-header fixed title="订单" style="background-color:black"></mt-header>
    <div class="nav">
      <mt-navbar v-model="tabs">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待付款</mt-tab-item>
        <mt-tab-item id="3">待服务</mt-tab-item>
        <mt-tab-item id="4">进行中</mt-tab-item>
        <mt-tab-item id="5">待评价</mt-tab-item>
        <mt-tab-item id="6">退款</mt-tab-item>
        <mt-tab-item id="7">售后</mt-tab-item>
      </mt-navbar>
=======
    <div class="orderBox">
	<Xheader :name="name" :link="link"></Xheader>	
        <div class="orderList">
            <div class="orderItem">
                <div class="itemHeader">
                    <span>手艺人：</span>
                    <span>三七</span>
                </div>
                <div class="itemMain">
                    <img src="../assets/face1.webp">
                    <div class="infoBox">
                        <div class="title">588选5项特惠款</div>
                        <span>无忧保障</span>
                    </div>
                    <div class="priceBox">
                        <div class="price">￥588</div>
                        <span>x1</span>
                    </div>
                </div>
            </div>            
        </div>
        <Xfooter/>
>>>>>>> 93c669b53ce2debfe6922dbb449da7b2b4926b15
    </div>
    <div class="list-widgit">
        <div>
            <div class="no-result">
                <div class="box-no-result">
                    <div class="no-results">
                        <img src="https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_17878b26fe182e00b7aad4464e942ac9.png">
                    </div>
                    <div class="no-result-text">
                        <p>还没有相关订单哦</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="maylike">
        <div class="title">
            <span>为你推荐</span>
        </div>
        <div class="products-component">
            <ul class="list">
                <li v-for="item in listData"
                class="listOne"
                :key="item.imgUrl">
                    <img class="imgu" :src="item.imgUrl">
                    <p class="titles">{{item.title}}</p>
                    <span class="price">{{item.price}}</span>
                </li>
            </ul>
        </div>
    </section>
    <Xfooter/>
  </div>
</template>

<script>
<<<<<<< HEAD
import Xfooter from "../components/Xfooter";

export default {
  components: {
    Xfooter
  },
  data() {
    return {
      tabs: ["全部", "待付款", "待服务", "进行中", "待评价", "退款", "售后"],
      listData:[
        {
          imgUrl:require('../assets/order1.jpg'),
          price:"￥388",
          title:"vetro奶白线条款"
        },
         {
          imgUrl:require('../assets/order2.jpg'),
          price:"￥288",
          title:"深冬养指"
        },
         {
          imgUrl:require('../assets/order3.jpg'),
          price:"￥197",
          title:"桃心彩绘"
        },
         {
          imgUrl:require('../assets/order4.jpg'),
          price:"￥321",
          title:"圣诞新款"
        },
         {
          imgUrl:require('../assets/order5.jpg'),
          price:"￥235",
          title:"法式甲爱心"
        },
         {
          imgUrl:require('../assets/order6.jpg'),
          price:"￥113",
          title:"vetro奶白线条款"
        },
        
      ],
=======
import Xfooter from '../components/Xfooter';
import Xheader from '../components/Xheader';

export default {
    components: {
        Xfooter,
        Xheader
    },
    data(){
    	return{
            name:'我的订单',
            link: '/index'
    	}
>>>>>>> 93c669b53ce2debfe6922dbb449da7b2b4926b15
    }
  },

  
};
</script>

<style scoped>
<<<<<<< HEAD
.nav {
  margin-top: 40px;
  height: 40px;
}
.mint-tab-container-item {
  height: 40px;
  width: 14.5%;
}
.list-widgit{
    border-bottom: 2.5rem;
    overflow: hidden;
    box-sizing: border-box;
}
.no-result{
    margin-top: 20%;
    color: #666;
    text-align: center;
    height: 251px;
}
.box-no-result{
    position: static;
    transform: translate(0%,0%);
    padding: 0.4rem;
    width: 100%;
    top: 50%;
    left:50%;
    text-align: center;
    height: 251px;

}
.no-results{
    padding: 1.5rem;
    position: relative;
    display: block;
    text-align: center;
}
.no-results img{
    width: 140px;
    height: 128px;
    margin-left:25%;
}
.title{
    text-align: center;
}
.listOne{
  width:50%;
  display: block;
  float:left;
  box-sizing: border-box;
  margin-top:20px;
  margin-bottom:50px;
}
.imgu{
  margin-left:20px;
}
.price{
  color:red;
  font-weight: 800;
  margin:20px
}
.titles{
  display: block;
  margin: 20px;
}
=======
    .orderList{
        padding-left: 15px;
        margin: 10px 0 45px 0;
        color: #1a1a1a;
        background: #fff;
        font-size: 14px;
    }
    .orderList .orderItem{
        margin-bottom: 15px;
    }
    .orderList .itemHeader{
        margin-bottom: 12px;
    }
    .orderList .itemMain{
        display: flex;
        padding-right: 20px;
    }
    .orderList .itemMain img{
        width: 60px;
        height: 60px;
    }
    .orderList .infoBox{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        margin: 0 10px;
    }
    .orderList .infoBox span{
        width: 56px;
        color: #B769CC;
        background: rgba(183, 105, 204, 0.1);
    }
    .orderList .priceBox{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .orderList .priceBox .price{
        font-size: 16px;
        color: #F23030;
    }
    .orderList .priceBox span{  
        text-align: right;
    }
>>>>>>> 93c669b53ce2debfe6922dbb449da7b2b4926b15
</style>