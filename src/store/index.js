import { createStore } from 'vuex'

export default createStore({
  state: {
    list:[
      {
        title:"xxx",
        compelete:false
      },
      {
        title:"吃饭",
        compelete:false
      },
      {
        title:"睡觉",
        compelete:false
      }
      ]
    ,randomTodo: {
      idx: -1,
      str: ""
    }
  },
  getters: {
  },
  mutations: {
    //add方法
    addTodo(state,newtodo){
      state.list.push(newtodo)
    },
    //随机方法
    randTodo(state){
      state.randomTodo.idx=Math.floor(Math.random()* state.list.length)
      state.randomTodo.str=state.list[state.randomTodo.idx].title
    },
    //完成方法
    complTodo(state){
      state.list.splice(state.randomTodo.idx,1)
      state.randomTodo.idx=-1
      state.randomTodo.str=''
    }
  },
  actions: {
  },
  modules: {
  }
})
