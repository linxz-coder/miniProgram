// pages/cate/cate.js
Page({

  btnHandler(event){
    // currentTarget: 事件绑定者；Target：事件触发者
    console.log(event.target.dataset.id)
    console.log(event.target.dataset.name)
  },

  parentHandler(event){
    // currentTarget: 事件绑定者；Target：事件触发者
    console.log(event)
    console.log(event.target.dataset.id)
    console.log(event.target.dataset.name)
  },
})