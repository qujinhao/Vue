<template>
  <div class="all">
    <header>
      <h1>面试登记表</h1>
    </header>
    <Header :name="name" :sex="sex" :hunY="hunY" :birth="birth"/>
    <Item1 :list1="list1"/>
    <Item2 :list2="list2"/>
    <Item3 :list3="list3"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Item1 from './components/Item1'
import Item2 from './components/Item2'
import Item3 from './components/Item3'

import './base.css'
export default {
  name: 'App',
  data () {
    return {
      name: '屈境浩',
      sex: '男',
      hunY: '未婚',
      birth: '2000.03.25',
      list1: [
        {time1: '2018.09', time2: '2022.06', school: '广州商学院', Zy: '计算机科学与技术'}
      ],
      list2: [
        {time1: '无', dw: '无', Zw: '无', tel: '无'}
      ],
      list3:[
        {time1: '2020.09', time2: '2020.12', JJ: '期刊论文网', JS: '样式设计、页面布局'}
      ]
    }

  },
  components: {
    Header,
    Item1,
    Item2,
    Item3
  }
}
</script>

<style>
.all {
  width: 100%;
  height: 100%;
}
h1{
  width: 700px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
</style>
