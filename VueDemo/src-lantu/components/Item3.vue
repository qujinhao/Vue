<template>
  <table  class="Item_tab" border="1px" cellspacing="0" >
    <col width="100px">    <!--设置第一列的宽度-->
    <col width="200px"> 	<!--设置第二列的宽度    以此类推-->
    <col width="200px">
    <col width="200px">
    <tr>
      <td rowspan="4">项目经历</td>
      <td>起止时间</td>
      <td>项目简介</td>
      <td>所处角色</td>
    </tr>
    <tr v-for="(list_3,index) in list3" :key="index">
      <td>{{list_3.time1}}-{{list_3.time2}}</td>
      <td>{{list_3.JJ}}</td>
      <td>{{list_3.JS}}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3">自我介绍</td>
      <td colspan="3" rowspan="3">{{WZ}}</td>
    </tr>
    <tr></tr>
    <tr></tr>
    <tr>
      <td rowspan="2">声明</td>
      <td colspan="3" rowspan="2">{{SM}}</td>
    </tr>
    <tr></tr>
  </table>
</template>

<script>
export default {
  props:{
    list3:Array
  },
  name: 'Item1',
  data(){
    return{
      WZ:'你好，我是屈境浩，来贵公司面试',
      SM:'本人郑重声明。。。。'
    }

  }
}
</script>

<style>

</style>
