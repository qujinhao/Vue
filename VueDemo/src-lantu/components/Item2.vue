<template>
  <table  class="Item_tab" border="1px" cellspacing="0" >
    <col width="100px">    <!--设置第一列的宽度-->
    <col width="200px"> 	<!--设置第二列的宽度    以此类推-->
    <col width="200px">
    <col width="100px">
    <col width="100px">
    <tr>
      <td rowspan="4">工作经历</td>
      <td>起止时间</td>
      <td>单位名称</td>
      <td>职务</td>
      <td>联系电话</td>
    </tr>
    <tr v-for="(list_2 , index) in list2">
      <td>{{list_2.time1}}</td>
      <td>{{list_2.dw}}</td>
      <td>{{list_2.Zw}}</td>
      <td>{{list_2.tel}}</td>
    </tr>
    <tr>
      <td>-</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>-</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<script>
export default {
  props:{
    list2:Array
  },
  name: 'Item1'
}
</script>

<style>

</style>
