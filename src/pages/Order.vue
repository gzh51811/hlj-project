<template>
    <div class="orderBox">
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
    </div>
</template>

<script>
import Xfooter from '../components/Xfooter';

export default {
    components: {
        Xfooter
    }
}
</script>

<style scoped>
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
</style>