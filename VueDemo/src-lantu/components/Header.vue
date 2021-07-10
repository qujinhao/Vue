<template>
  <div class="list_all">
    <table class="list_table" border="1px" cellspacing="0">
      <col width="100px">    <!--设置第一列的宽度-->
      <col width="100px"> 	<!--设置第二列的宽度    以此类推-->
      <col width="100px">
      <col width="100px">
      <col width="100px">
      <col width="100px">
      <col width="100px">
      <tr align="center"	height="40px">
        <td>姓名</td>
        <td>{{name}}</td>
        <td>性别</td>
        <td>{{sex}}</td>
        <td>婚姻状况</td>
        <td>{{hunY}}</td>
        <td rowspan="5"></td>
      </tr>
      <tr align="center"	height="40px">
        <td>出生年月</td>
        <td>{{birth}}</td>
        <td>身高</td>
        <td>{{height}}</td>
        <td>民族</td>
        <td>{{MZ}}</td>

      </tr>
      <tr align="center"	height="40px">
        <td>身份证号</td>
        <td colspan="3">{{SL}}</td>
        <td>邮箱</td>
        <td>{{SL}}</td>
      </tr>
      <tr align="center"	height="40px">
        <td>家庭住址</td>
        <td colspan="3">{{SL}}</td>
        <td>联系方式</td>
        <td>{{SL}}</td>
      </tr>
      <tr align="center"	height="40px">
        <td>学历</td>
        <td>{{SL}}</td>
        <td>专业</td>
        <td>{{SL}}</td>
        <td>政治面貌</td>
        <td>{{SL}}</td>
      </tr>
      <tr align="center"	height="40px">
        <td>毕业院校</td>
        <td colspan="6">{{SL}}</td>
      </tr>
      <tr align="center"	height="40px">
        <td>技术职称</td>
        <td>{{SL}}</td>
        <td colspan="2">外语语种</td>
        <td colspan="3">{{SL}}</td>
      </tr>
      <tr align="center"	height="40px">
        <td>语言能力</td>
        <td>{{SL}}</td>
        <td colspan="2">要求待遇</td>
        <td colspan="3">{{SL}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      height:174,
      MZ:'汉族',
      SL:'省略。。。'
    }
  },
  props:{
    name:String,
    sex:String,
    hunY:String,
    birth:String
  }
}
</script>

<style>

.list_table{
  border-color: black;
}

</style>
