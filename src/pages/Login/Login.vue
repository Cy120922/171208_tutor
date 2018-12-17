<template>
  <div class="off">
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">家有家教</h2>
          <div class="login_header_title">
            <a href="javascript:;" class="on title_color" @click="showcontent1()" >短信登录</a>
            <a href="javascript:;" @click="showcontent2()">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form>
            <div class="on" v-show="isShow1">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号">
                <button disabled="disabled" class="get_verification">获取验证码</button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码">
              </section>
              <section class="login_hint">
                温馨提示：未注册家有家教帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div  v-show="isShow2">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                </section>
                <section class="login_verification">
                  <input type="tel" maxlength="8" placeholder="密码">
                  <div class="switch_button off">
                    <div class="switch_circle"></div>
                    <span class="switch_text">...</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码">
                  <img class="get_verification" src="./images/captcha.svg" alt="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou1-copy"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow1:true,
      isShow2:false
    };
  },
  methods:{
    showcontent1(){
      if(this.isShow1==false){
        this.isShow1 = true
        this.isShow2 = false
      }
    },
    showcontent2(){
      if(this.isShow2==false){
        this.isShow2 = true
        this.isShow1 = false
      }
    }
  },
  components: {}
};
</script>

<style>
@import './Login.css'
</style>