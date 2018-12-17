<template>
  <div id="app">
    <router-view></router-view>
    <!-- meta:给路由添加属性showFooter -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
 import FooterGuide from './components/FooterGuide/FooterGuide.vue'
 import {reqKemuTypes} from './api'

export default {
  data () {
    return {
    };
  },
  async mounted() {
     const result = await reqKemuTypes()
     console.log(result)
  },
  components:{
    FooterGuide
  },
  
}
</script>

<style>


</style>