<template>
  <div class="index_recommend">
    <div class="title">商品推荐</div>
    <div class="recommend-body">
      <swiper ref="mySwiper" :options="switchOptions" >
        <swiper-slide v-for="(item,index) in recommendGoodsList" :key="index">
          <div class="recommend_item">
            <img :src="item.image" alt="" v-lazy="item.image" width="100%">
            <p class="recommend_item_title">{{item.goodsName}}</p>
            <p ><span class="recommend_item_price">￥{{item.price | moneyFormat}}</span>  <span style="color:gray;">(￥{{item.mallPrice | moneyFormat}})</span> </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
  import {moneyFormat} from '@/filter/moneyFilter.js'
    export default {
        name: "index_recommend",
        props:{
          recommendGoodsList:{
            type:Array,
            default(){return []}
          }
        },
        filters:{moneyFormat},
      data(){
          return{
            switchOptions:{
              slidesPerView:3,
              loop:true, // 循环轮播
              autoplay:true, // 自动播放  也可设置自动轮播时间，比如：3000
            }
          }
      },
      created(){
          console.log('28',this.recommendGoodsList)
      }
    }
</script>

<style scoped>
  .index_recommend{
    background-color: #fff;
    margin-top: 0.3rem;
  }
  .title{
    border-bottom: 1px solid #eee;
    font-size:16px;
    padding:0.2rem 0.4rem;
    color:#e5017d;
  }
  .recommend-body{
    border-bottom:1px solid #eee;
  }
  .recommend_item{
    padding:o.2rem;
    font-size: 12px;
    text-align: center;
  }
  .recommend_item_title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp:2;
  }
  .recommend_item_price{
    color:red;
  }
</style>
