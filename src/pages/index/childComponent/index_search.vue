<template>
  <div class="search-bar">
    <van-row>
      <van-col span="3" class="text-center">
        <i class="iconfont icon-dingwei"></i>
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input"/>
      </van-col>
      <van-col span="5" class="text-center">
        <van-button size="mini">查找</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
    export default {
        name: "index_search"
    }
</script>

<style scoped>
  .search-bar{
    height:2.2rem;
    background-color: #e5017d;
    line-height:2.2rem;
  }
  .iconfont{
    font-size:1.5rem;
    color:#fff;
  }
  .search-input{
    width:100%;
    height: 1.3rem;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom: 1px solid #fff!important ;
    background-color: #e5017d;
    color:#fff;
  }
</style>
