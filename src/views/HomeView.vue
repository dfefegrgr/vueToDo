<template>
  <div class="home">
    <div class="box">
      <text-box :list="list" @add="add"></text-box>
      <random-box :s="sum" @rand1="rand" @comp="comp"></random-box>
    </div>

  </div>
</template>

<script>
import randomBox from '@/components/randomBox'
import textBox from '@/components/textBox'
import {defineComponent,ref,computed} from "vue";
import {useStore} from 'vuex'

export default defineComponent({
  components:{
    randomBox,
    textBox
  },
  setup(){
    let store=useStore()
    let list=computed(()=>{
      return store.state.list
    })
    let randomTodo = computed(()=>{
      return store.state.randomTodo
    })
    let sum = computed(()=>{
      return {
        l:store.state.list,
        r:store.state.randomTodo
      }
    })
    let newtodo=ref('')
    let add=(val)=>{
      //必须使用 store.commit来触发
      //提交载荷，对象
      newtodo.value=val
      store.commit('addTodo',{
      title:newtodo.value,
      complete:false
    })
    }
    let rand=()=> {
      store.commit('randTodo')
    }
    let comp=()=>{
      store.commit('complTodo')
    }
    return{
      list,
      add,
      newtodo,
      rand,
      randomTodo,
      sum,
      comp
    }

  }
})

</script>
<style>
.home{
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  /*height: 100%;*/

}
.box{
  display: block;
  position: relative;
}
</style>
