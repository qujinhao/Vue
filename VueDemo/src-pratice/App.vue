<template>
  <div class="container_list">
    <div class="list_warp">
      <Header :h2_title="h2_title"/>
      <List :infos="infos" :add="add" :removeItem="removeItem"/>
    </div>
  </div>
</template>

<script>
import List from './components/List'
import Header from './components/Header'

export default {
  data () {
    return{
      h2_title:'插件列表',
      infos:[
        {label: '海康固定枪机插件', key: 1},
        {label: '海康云台枪机插件', key: 2},
        {label: '大华固定枪机插件', key: 3},
        {label: '大华可控球机插件', key: 4},
        {label: '宇视固定球机插件', key: 5},
        {label: '索尼摄像机插件', key: 6},
        {label: '华三人脸抓拍插件', key: 7},
        {label: '金鹏摄像机插件', key: 8},
        {label: '大立人脸抓拍插件', key: 9},
        {label: '亚安人脸抓拍插件', key: 10},
        {label: '大华固定枪机插件', key: 11},
        {label: '大立人脸抓拍插件', key: 12},
        {label: '海康固定枪机插件', key: 13},
        {label: '华三人脸抓拍插件', key: 14},
        {label: '海康云台枪机插件', key: 15},
        {label: '亚安人脸抓拍插件', key: 16},
        {label: '索尼摄像机插件', key: 17},
        {label: '金鹏摄像机插件', key: 18},
        {label: '宇视固定球机插件', key: 19},
        {label: '大华可控球机插件', key: 20}
        ],
    }
  },
  name: 'App',
  components:{
    List,
    Header
  },
  methods:{
    add(newList){
      this.infos.push(newList)
    },
    removeItem(arr){

    }
  }
}
</script>

<style>
.container_list{
  width: 100%;
  height: 100%;
}
.list_warp{
  width: 100%;
  height: 100%;
}

</style>
