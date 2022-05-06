<template>
  <div class="a">
    <p style="color: pink"> <t-icon name="format-vertical-align-left"  size="large" style="color: pink"/> TODO LIST</p>
    <div class="textBox">
      <p  v-for="item in list" style="color: pink">
        <t-icon name="round"  size="large" style="color: pink"/>
        {{item.title}}
      </p>
    </div>

    <div class="addBox">
      <t-input  style="color: pink" class="addBox1" clearable  placeholder="请输入任务名称" v-model="newtodo"/>
      <t-button  style="color: pink" class="addBox2" v-on:click="add">添加</t-button>
    </div>
  </div>
</template>

<script>


import {defineComponent,ref} from "vue";
export default defineComponent({
  name:'textBox',
  props:{
    list:{
      type:Array,
      required:false
    }
  },
  emits:['add'],
  setup(props,context){


    let newtodo=ref('')
    let add=()=>{
      context.emit('add',newtodo.value)
      newtodo.value=''
    }
    return{
      add,
      newtodo
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
}
.addBox2{
  margin-right: 40px;
}
.textBox{


}
</style>