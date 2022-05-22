<template>
  <div class="randBox" >
    <t-button  class="btn" theme="default" variant="base" v-on:click="fetchRandom" >随机</t-button>
    <t-button  class="btn" v-if=" random_todo!=='' "  v-on:click="del_random" >完成</t-button>

    <div   v-if="random_todo !==''">
      随机的事情是：{{ random_todo }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref} from "vue";
export default defineComponent({
  name:'randomBox',
  data(){
    return {
      url_base:"http://101.34.30.52:5098/todo/",
      random_todo: '',
      todo_list: []
    }
  },
  methods: {

    async fetchRandom() {
      //await 等待方法跑完
      await fetch(`${this.url_base}get`)
          .then (res=>{return res.json();})
          .then(res => {
            this.todo_list = res.todos
          })
      let idx=Math.floor(Math.random()* this.todo_list.length)
      this.random_todo=this.todo_list[idx]
    },

    del_random() {
      fetch(`${this.url_base}del?del_todo=${this.random_todo}`)
      this.random_todo=''
      // 刷新整个页面
      location.reload()
    }
  }
})
</script>
<style>
.randBox{
  margin-bottom: 40px;
}
.btn{
  margin-right: 9%;
}


</style>