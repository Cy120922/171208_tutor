<template>
  <!--我的-->
  <div>
    <section class="profile">
      <HeaderTop title="个人中心"></HeaderTop>>
      <section class="profile-number">
        <router-link to="/login" class="profile-link clearfix">
          <div class="profile_image">
            <!-- <i class="icon-wo iconfont  "></i> -->
            <img src="./images/person.jpg" class="img_person">
          </div>
          <div class="user-info">
            <p class="user-info-top">登录/注册</p>
            <p>
              <span class="user-icon">
                <i class="iconfont icon-shouji icon-ziyuan"></i>
              </span>
              <span class="icon-mobile-number">暂无绑定手机号</span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </router-link>
      </section>
      <section class="profile_info_data border-1px">
        <ul class="info_data_list clearfix">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0.00</span>元</span>
            <span class="info_data_bottom">我的余额</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span class="span_youhui">0</span>个</span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>分</span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </ul>
      </section>
      <section class="profile_my_order border-1px">
        <!-- //我的订单 -->
        <a href='javascript:' class="my_order">
          <span>
            <i class="iconfont icon-dd_active"></i>
          </span>
          <div class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
        <!-- //积分商城 -->
        <a href='javascript:' class="my_order">
          <span>
            <i class="iconfont icon-jifenshangcheng"></i>
          </span>
          <div class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
        <!-- //硅谷外卖会员卡 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-huiyuan"></i>
          </span>
          <div class="my_order_div">
            <span>硅谷外卖会员卡</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
      </section>
      <section class="profile_my_server border-1px">
        <!-- //服务中心 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-fuwuzhongxin"></i>
          </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
      </section>
    </section>
  </div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    data() {
      return {
      };
    },

    components: {
      HeaderTop
    },
  }
</script>

<style>
  @import './Profile.css';
</style>