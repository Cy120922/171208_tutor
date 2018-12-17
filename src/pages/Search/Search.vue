<template>
    <!--搜索-->
    <div>
      <section class="search">
        <HeaderTop title="搜索"></HeaderTop>
        <form class="search_form clearfix" action="#">
          <input type="search" name="search" placeholder="请输入教师名称或科目" class="search_input">
          <input type="submit" name="submit" class="search_submit">
        </form>
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
    .search {
      width: 100%;
      overflow: hidden;
    }
    .search_form {
      /* clearFix() */
      margin-top: 45px;
      background-color: #fff;
      padding: 12px 8px;
    }
  
    /* 清浮动 */
    .clearfix:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;
    }
  
    .search_input {
      float: left;
      width: 79%;
      border: 4px solid #f2f2f2;
      font-size: 14px;
      color: #333;
      background-color: #f2f2f2;
    }
  
    .search_submit {
      float: right;
      width: 18%;
      border: 4px solid #02a774;
      font-size: 16px;
      color: #fff;
      background-color: #02a774;
    }
  </style>