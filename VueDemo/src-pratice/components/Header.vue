<template>
  <header>
    <h2>{{h2_title}}</h2>
  </header>
</template>

<script>
export default {
  props:{
    h2_title:String
  },
  name: 'Header'
}
</script>

<style>
header{
  width: 100%;
  height: 60px;
  background-color: #363b4d;
  /*!*    粘性定位*/
  /*页面滚动时，头部位置相对不变*/

  position: sticky;
  top: 0px;
}
h2 {
  color: #fff;
  font-size: 24px;
  line-height: 60px;
  margin-left: 25px;
}
</style>
