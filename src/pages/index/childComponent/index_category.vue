<template>
    <div>
      <div class="index_category">
        <div class="index_category_item"
             v-for="(item,index) in categoryList" :key="index">
          <img :src="item.image" alt="" width="70%">
          <p>{{item.mallCategoryName}}</p>
        </div>
      </div>
      <div class="index_adv">
        <img :src="advImg.PICTURE_ADDRESS" alt="" v-lazy="advImg.PICTURE_ADDRESS" width="100%">
      </div>
    </div>
</template>

<script>
    export default {
        name: "index_category",
        props:{
          categoryList:{
            type:Array,
            default(){return []}
          },
          advImg:{
            type:Object,
            default(){return {}}
          }
        }
    }
</script>

<style scoped>
  .index_category{
    display: flex;
    flex-wrap: nowrap;
    padding:0.3rem 0.5rem;
  }
  .index_category_item{
    flex:1;
    padding:0.2rem;
    font-size:0.8rem;
    text-align: center;
  }
  .index_adv{
    padding:0.5rem  1rem;
    background-color: #eeeeed;
  }
</style>
