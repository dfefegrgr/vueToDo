<template>
  <div class="randBox" >
    <t-button  class="btn" theme="default" variant="base" v-on:click="randtodo" >随机</t-button>
    <t-button  class="btn" v-if=" s.r.str!=='' "  v-on:click="deltodo" >完成</t-button>

    <div   v-if="s.r.str !==''">
      随机的事情是：{{ s.r.str }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref} from "vue";
export default defineComponent({
  name:'randomBox',
  props:{
    s: {
      type: Object,
      required: false
    }
  },
  emits:['rand1','comp'],
  setup(props,ctx){
    let randtodo=()=>{
      ctx.emit('rand1')
    }
    let deltodo=()=>{
      ctx.emit('comp')
    }
    return{
      randtodo,
      deltodo
    }
  },

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