<template>
<table  class="Item_tab" border="1px" cellspacing="0" >
  <col width="100px">    <!--设置第一列的宽度-->
  <col width="200px"> 	<!--设置第二列的宽度    以此类推-->
  <col width="200px">
  <col width="200px">
  <tr>
    <td rowspan="4">教育经历</td>
    <td>起止时间</td>
    <td>毕业院校</td>
    <td>专业</td>
  </tr>
  <tr v-for="(list,index) in list1" :key="index">
    <td>{{list.time1}}-{{list.time1}}</td>
    <td>{{list.school}}</td>
    <td>{{list.Zy}}</td>
  </tr>
  <tr>
    <td>-</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>-</td>
    <td></td>
    <td></td>
  </tr>
</table>
</template>

<script>
export default {
  props:{
    list1:Array
  },
  name: 'Item1'
}
</script>

<style>

</style>
