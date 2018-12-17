<template>
  <div class="btn-wrap navbar navbar-default navbar-fixed-bottom bottom-color" role="navigation">
    <!-- :class="{on:'/msite'===$route.path}" 
            当前路径=路由路径时，强制添加on属性
              --- 对象语法：类名确定 -->
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <span class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
        <p class="iconfont icon-jiaoxuelou-copy"></p>
        <p>首页</p>
      </span>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <span class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
        <p class="iconfont icon-icon"></p>
        <p>搜索</p>
      </span>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <span class="guide_item" :class="{on:'/release'===$route.path}" @click="goTo('/release')">
        <p class="iconfont icon-fabu"></p>
        <p>发布</p>
      </span>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <span class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
        <p class="iconfont icon-gerenzhongxin_xuanzhong"></p>
        <p>我的</p>
      </span></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      goTo(path) {
        // 点击时将当前路径切换为当前点击下的路由路径
        this.$router.replace(path)
      }
    }

  }
</script>

<style>
  .bottom-color{
    background-color: #fff;
  }
  .bottom-color p{
    margin:0 0 -2px;
  }
  .guide_item {
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
  }
  .on {
    color: #02a774;
  }
  .iconfont {
    font-size: 26px;
  }
</style>