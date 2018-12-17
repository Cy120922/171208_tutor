<template>
    <!--发布-->
    <div>
      <section class="order">
       <HeaderTop title="发布信息"></HeaderTop>>
        <section class="order_no_login">
          <img src="./images/release.png">
          <h3>登录后可发布</h3>
          <button>立即登陆</button>
        </section>
      </section>
    </div>
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
    .order {
      width: 100%;
      overflow: hidden;
    }
  
    .order_no_login {
      padding-top: 140px;
      width: 60%;
      margin: 0 auto;
      text-align: center;
    }
  
    .order_no_login>img {
      display: block;
      width: 100%;
      height: 30%;
    }
  
    .order_no_login>h3 {
      padding: 10px 0;
      font-size: 17px;
      color: #6a6a6a;
    }
  
    .order_no_login>button {
      display: inline-block;
      background: #02a774;
      font-size: 14px;
      color: #fff;
      border: 0;
      outline: none;
      border-radius: 5px;
      padding: 10px 20px;
    }
  </style>