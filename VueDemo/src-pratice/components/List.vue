<template>
  <ul>
    <li>
      <div class="but">
        <input type="button" name="add" value="增加" id="add" @click="addList">
        <input type="button" name="remove" value="删除" id="remove" @click="removeItem(selectArr)">
      </div>
    </li>
    <li v-for="(info,index) in infos" :key="index">
      <label for="check">
        <input type="checkbox" id="check" :value="index" v-model="selectArr">{{selectArr}}
      </label>
      {{info.label}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    infos:Array,
    add:Function,
    removeItem:Function
  },
  data(){
    return{
      selectArr:[]
    }
  },
  name: 'List',
  methods:{
    addList(){

      const List_item1 = {'label': '新增插件', 'key': 22}
      //  添加到info
      this.add(List_item1)
    },
    // removeList(){
    //   const {index,removeItem} = this
    //   if(this.selectArr.length > 0){
    //     for (let i = 0; i <= this.selectArr.length; i++){
    //         removeItem(i)
    //     }
    //     this.selectArr =[]
    //   }
    // },

  }
}
</script>

<style>
ul li{
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  line-height: 40px;
}
.but input{
  width: 80px;
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #3172f5;
  border-color: #3172f5;
  border-radius: 5px;
}
.but input:nth-child(2){
  margin-left: 25px;
}
</style>
