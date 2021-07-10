<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <!--     给TodoHeader标签对象绑定addTodo事件监听 -->
    <!--      <TodoHeader  @addTodo="addTodo"/>-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos"/>
      <Todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll">
        <span slot="count">已完成{{completeSize}}</span>/全部{{todos.length}}
        <button class="btn btn-danger" v-show="completeSize > 0" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </Todo-footer>
    </div>
  </div>
</template>
<!--
绑定事件监听----订阅消息
触发事件-----发布消息
-->
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import PubSub from 'pubsub-js'
import storageUtil from './util/storageUtil'
export default {
  data(){
    return{

      // todos:[
      //   {title:'吃饭', complete:false},
      //   {title: '睡觉',complete: true},
      //   {title: 'coding',complete: false}
      // ]
      //从localStorage读取todos
      //深度监视
      todos: storageUtil.readTodos()
    }
  },
  computed:{
    completeSize(){
      // educe() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
      // 将前一个统计值加上后面统计的值（判断是否为true,是true则加1否则加0），初始数量为0
      return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
    },
    isAllCheck:{
      get(){
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set(value){ // value是当前checkbox当前最新的值
        this.selectAllTodos(value)
      }
    }
  },
  mounted () { //执行异步代码
  //  给<TodoHeader/>绑定addTodo事件监听
  //   this.$on('addTodo',this.addTodo) //  给app绑定监听

    this.$refs.header.$on('addTodo',this.addTodo)


  //  订阅消息
  //  这里使用箭头函数，可以让this指向组件而不是指向函数
    PubSub.subscribe('deleteTodo',(msg,index)=>{
      this.deleteTodo(index)
    })
  },

  //深度监视
  watch:{
    todos:{
      deep:true, //深度监视
      // handler:function (value){
      // //  将todos最新的值的json数据，保存到localStorage
      // //   window.localStorage.setItem('todos_key',JSON.stringify(value))
      //   storageUtil.saveTodos(value)
      // }
      handler:storageUtil.saveTodos,
      // handler:function (todos){
      //   window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos)
      // }
    }
  },
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    // 删除所有选中的todo
    deleteCompleteTodos(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    //全选/全部选
    selectAllTodos(check){
      this.todos.forEach(todo => todo.complete = check)
    }
  },
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
