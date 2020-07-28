<template>
    <div class="index_page">
        <div class="search-bar">
          <van-row>
            <van-col span="3">icon</van-col>
            <van-col span="16">serach input</van-col>
            <van-col span="5">button</van-col>
          </van-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            message:'hello world'
          }
      }
    }
</script>

<style scoped>
.search-bar{
    height:2.2rem;
    background-color: #e5017d;
    line-height:2.2rem;
}
</style>
