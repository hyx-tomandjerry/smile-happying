<template>
  <div class="index_floor">
    <div class="title">猜你喜欢</div>
    <div class="index_floor_title">{{floorObj.floorName.floor1}}</div>
    <div class="index_floor_unnormal">
      <div class="index_floor_unnormal_left">
        <img :src="floorObj.floor1List[0].image" alt="" width="100%">
      </div>
      <div class="index_floor_unnormal_right">
        <img :src="floorObj.floor1List[1].image" alt="" width="100%">
        <img :src="floorObj.floor1List[2].image" alt="" width="100%">
      </div>
    </div>
    <div class="index_floor_title">{{floorObj.floorName.floor2}}</div>
    <div class="index_floor_normal">
      <div v-for="(item,index) in floorObj.floor2List" :key="index" class="index_floor_normal_item">
        <img :src="item.image" alt="" width="100%" >
      </div>
    </div>
    <div class="index_floor_title">{{floorObj.floorName.floor3}}</div>
    <div class="index_floor_normal">
      <div v-for="(item,index) in floorObj.floor3List" :key="index" class="index_floor_normal_item">
        <img :src="item.image" alt="" width="100%" >
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index_floor",
        data(){
          return{
            floorObj:{
              floor1List:[],
              floor2List:[],
              floor3List:[],
              floorName:{}
            },

          }
        },
        props:{
          fetchData:{
            type:Object,
            default(){return {}}
          }
        },
        watch:{
          fetchData:{
            immediate: true,
            handler(val){
              this.floorObj={
                floor1List:val.floor1List,
                floor2List:val.floor2List,
                floor3List:val.floor3List,
                floorName:val.floorName
              }
            }
          }
        },
        created() {

        }
    }
</script>

<style scoped>
  .index_floor{
    border-top:1.2rem solid #eeeeed;
  }
  .title{
    border-bottom: 1px solid #eee;
    font-size:16px;
    padding:0.2rem 0.4rem;
    color:#e5017d;
  }
  .index_floor_unnormal{
    display:flex;
    border-bottom:1px solid #eeeeed;
  }
  .index_floor_unnormal_left{
    flex:1;
    border-right:1px solid #eeeeed;

  }
  .index_floor_unnormal_right{
    flex:1
  }
  .index_floor_unnormal_right>img:nth-child(1){
    border-bottom:1px solid #eeeeed;
  }
  .index_floor_normal{
    display: flex;
    flex-wrap: wrap;
  }
  .index_floor_normal_item{
    width:50%;
    box-sizing: border-box;
    border-bottom:1px solid #eeeeed;
    border-right:1px solid #eeeeed;
  }
  .index_floor_title{
    padding:0.3rem .5rem;
    font-size:15px;
    color:orangered;
  }
</style>
