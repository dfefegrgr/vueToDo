<template>
  <div class="a">
    <p class="header"> <t-icon name="format-vertical-align-left"  size="large" /> TODO LIST</p>
    <div class="textBox">
      <p  v-for="item in todo_list" >
        <t-icon name="round"  size="large" />
        {{item}}
      </p>
    </div>

    <div class="addBox">
      <t-input   class="addBox1" clearable  placeholder="请输入任务名称" v-model="new_todo"/>
      <t-button   class="addBox2" v-on:click="fetchAddTodo()">添加</t-button>
    </div>
  </div>
</template>

<script>


import {defineComponent,ref} from "vue";
export default defineComponent({
  name:'textBox',
  data(){
    return {
      url_base:"http://101.34.30.52:5098/todo/",
      todo_list: [],
      new_todo: ''
    }
  },
  mounted() {
    this.fetchTodoList()
  },
  methods: {
    fetchTodoList() {
      fetch(`${this.url_base}get`)
          .then (res=>{return res.json();})
          .then(res => {
            this.todo_list = res.todos
          })
    },
    fetchAddTodo(){
      fetch(`${this.url_base}add?add_todo=${this.new_todo}`)
          .then(res=>{
            console.log(res.json)
          })
      this.fetchTodoList()
    }

  }


})

</script>
<style>
.addBox{
  display: flex;
  margin-bottom: 20px;
}
.addBox1{
  margin-right: 2px;
  width: 200px;
}
.addBox2{
  margin-right: 40px;
}
.textBox{

}
.header{

}
</style>