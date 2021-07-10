<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck">
    </label>
    <span>
      <span>已完成{{completeSize}}</span>/全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize > 0" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props:{
    todos:Array,
    deleteCompleteTodos:Function,
    selectAllTodos:Function
  },
  name: 'TodoFooter',
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
  }
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
