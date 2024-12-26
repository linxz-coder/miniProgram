// index.js
Page({

  parentHandler(){
    console.log("父组件打印")
  },

  btnHandler(){
    console.log("子组件打印")
  },


  // 事件处理函数需要写到Page({})方法中才可以。
  handler(event){
    console.log('your are tapped!')
    console.log(event)
  },

  getInputValue(event){
    console.log(event.detail.value)
    return event.detail.value
  },

  handlerWarn(){
    console.log('Warn!')
  }

})
