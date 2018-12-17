<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
      传递插槽的标签结构
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" slot="left">
        <i class="iconfont icon-icon-copy-copy posit-left"></i>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" slot="right">
        <span class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
          aria-expanded="false" aria-controls="collapseTwo">
          <i class="iconfont icon-liebiao posit-right"></i>
        </span>
        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
          <div class="panel-body">
            <ul class="list-group">
              <li class="li-style "><span>教员信息</span></li>
              <li class="li-style "><span>学员信息</span></li>
              <li class="li-style "><span>联系我们</span></li>
              <li class="li-style "><span>服务条款</span></li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderTop>

    <div class="box1"></div>
    <!-- 首页轮播 -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="./images/lunbo/banner1.jpg" class="lunbo_image" alt="...">
          <div class="carousel-caption">
            ...
          </div>
        </div>
        <div class="item">
          <img src="./images/lunbo/banner2.jpg" class="lunbo_image" alt="...">
          <div class="carousel-caption">
            ...
          </div>
        </div>
        <div class="item">
          <img src="./images/lunbo/banner3.jpg" class="lunbo_image" alt="...">
          <div class="carousel-caption">
            ...
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      </a>
    </div>

    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-yuwen"></i>
              </div>
              <span>语文</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-shuxue"></i>
              </div>
              <span>数学</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-yingyu"></i>
              </div>
              <span>英语</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-wuli"></i>
              </div>
              <span>物理</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-huaxue"></i>
              </div>
              <span>化学</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-shengwu"></i>
              </div>
              <span>生物</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-dili"></i>
              </div>
              <span>地理</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-lishi"></i>
              </div>
              <span>历史</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-zhengzhi"></i>
              </div>
              <span>政治</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-kemubiaoqian-kexuedefuben"></i>
              </div>
              <span>科学</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-shuxue1"></i>
              </div>
              <span>奥数</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-wudao"></i>
              </div>
              <span>舞蹈</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-meishu"></i>
              </div>
              <span>美术</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-yiliao"></i>
              </div>
              <span>音乐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-tiyu-paobu"></i>
              </div>
              <span>体育</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <i class="iconfont icon-qita"></i>
              </div>
              <span>其他</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>

    <!--优秀教员-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <span class="shop_header_title">
          <i class="iconfont icon-wanshangcopy"></i>
          优秀教员</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  // 引入HeaderTop组件
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  //引入swiper
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  //引入ShopList组件
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    mounted () {
      //创建一个swiper实例对象，来实现轮播
      new Swiper('.swiper-container',{
        loop: true, // 循环模式轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    data() {
      return {
      };
    },
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style scoped>
  @import './Msite.css';
</style>