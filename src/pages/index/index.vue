<template>
    <div class="index_page">
        <!--<index-search></index-search>-->
        <!--<index-swiper></index-swiper>-->
        <!--<index-category :categoryList="categoryList" :advImg="advImg"></index-category>-->
        <div class="index_recommend">
          <div class="title">商品推荐</div>
          <div class="recommend-body">
            <swiper ref="mySwiper" :options="switchOptions" >
              <swiper-slide v-for="(item,index) in recommendGoodsList" :key="index">
                <div class="recommend_item">
                  <img :src="item.image" alt="" v-lazy="item.image">
                  <p>{{item.goodsName}}</p>
                  <p>￥{{item.price}}(￥{{item.mallPrice}})</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>

        </div>
    </div>
</template>

<script>


    import indexSearch from './childComponent/index_search'
    import indexSwiper from './childComponent/index_swiper'
    import indexCategory from './childComponent/index_category'
    import result from '../../mock/index'
    import axios from 'axios'
    export default {
        name: "index",
        components:{indexSearch,indexSwiper,indexCategory},
        data(){
            return {
                categoryList:[],
                advImg:{},
                recommendGoodsList:[],
                switchOptions:{
                  loop:true, // 循环轮播
                  autoplay:true, // 自动播放  也可设置自动轮播时间，比如：3000
                }
            }
        },
      methods:{
          getGoodList(){
              axios({
                  url:'https://www.easy-mock.com/mock/5f214720fa76424e9506a365/goodsList',
                  method:'get'
              })
                .then(res=>{
                  console.log(res);
                })
                .catch(err=>{
                  console.log(err);
                })
          }
      },
      created() {
          // this.getGoodList();
          let {data} =result;
          this.categoryList = data.category;
          this.advImg = data.advertesPicture;
          this.recommendGoodsList = data.recommend;
          console.log(data)
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
    font-size:14px;
    padding:0.2rem;
    color:#e5017d;
  }
  .recommend-body{
    border-bottom:1px solid #eee;
  }
  .recommend_item{
    width:99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }
</style>
