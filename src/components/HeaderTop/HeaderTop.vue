<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <!-- 添加占位插槽 -->
        <slot name="left"></slot>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <!-- 从父组件数据传递title -->
        <p class="adress-posit ellipsis">{{title}}</p>
      </div>
        <slot name="right"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String
  },

  components: {}
};
</script>

<style>
.container {
  height: 45px;
  padding-left: 5px;
  padding-right: 5px;
}

.navbar-fixed-top {
  position: fixed;
  height: 45px;
  background-color: #02a774;
}

.adress-posit {
  text-align: center;
  line-height: 45px;
  color: #fff;
  font-size: 20px;
  text-overflow: ellipsis;
}

.posit-right {
  float: right;
  line-height: 45px;
  margin-left: 0px;
}

.posit-left {
  float: left;
  line-height: 45px;
}
</style>