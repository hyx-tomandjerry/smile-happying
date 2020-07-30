<template>
    <div class="index_page">
        <!--<index-search></index-search>-->
        <!--<index-swiper></index-swiper>-->
        <!--<index-category :categoryList="categoryList" :advImg="advImg"></index-category>-->
        <!--<index-recommend :recommendGoodsList="recommendGoodsList"></index-recommend>-->
        <!--<index-floor :fetchData="fetchData"></index-floor>-->
    </div>
</template>

<script>


    import indexSearch from './childComponent/index_search'
    import indexSwiper from './childComponent/index_swiper'
    import indexCategory from './childComponent/index_category'
    import indexRecommend from './childComponent/index_recommend'
    import indexFloor from  './childComponent/index_floor'
    import result from '../../mock/index'
    import axios from 'axios'
    import {url} from '@/serviceApi.config.js'
    export default {
        name: "index",
        components:{indexSearch,indexSwiper,indexCategory,indexRecommend ,indexFloor},
        data(){
            return {
                categoryList:[],
                advImg:{},
                recommendGoodsList:[],
                fetchData:{}

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
          this.fetchData={
              floor1List:data.floor1,
              floor2List:data.floor2,
              floor3List:data.floor3,
              floorName:data.floorName
          }
          console.log('59',this.fetchData)

      }
    }
</script>

<style scoped>

</style>
