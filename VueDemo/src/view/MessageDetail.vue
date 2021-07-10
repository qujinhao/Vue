<template>
  <div>
    <p>{{$route.params.id}}</p>
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
const allMessageDetails = []
export default {
  name: 'MessageDetail',
  data(){
    return{
      messageDetail:''
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageDetails = [
        {
          id:1,
          title:'message001',
          content:'message001 content'
        },
        {
          id:2,
          title:'message002',
          content:'message002 content'
        },
        {
          id:4,
          title:'message004',
          content:'message004 content'
        }
      ]
      this.allMessageDetails = allMessageDetails
      const id = this.$route.params.id *1  //有可能是文本，乘1将其改成数字
      this.messageDetail = allMessageDetails.find(detail => detail.id === id)
    },1000)
  },
  watch:{
    $route:function (value){ // 路由路径param发生改变
      const id = value.params.id *1  //有可能是文本，乘1将其改成数字
      this.messageDetail = this.allMessageDetails.find(detail =>detail.id === id)
    }
  }
}
</script>

<style>

</style>
