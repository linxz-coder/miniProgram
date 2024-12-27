// index.js
Page({
      getData(){
  
      // 如果需要发起网络请求，需要使用 wx.request API
      wx.request({
        // 接口地址
        url: 'https://api.github.com/repos/linxz-coder/zola-basic/contents/content/blog/ES6.md',
        // 请求方式
        method: 'GET',
        // 请求参数
        data: {},
        // 请求头
        header: {
          "Accept": "application/vnd.github+json",
          "Authorization": "Bearer <yourtoken>"
        },
        // API 调用成功以后，执行的回调
        success: (res) => {
          console.log(res)
          if (res.statusCode === 200) {
            const base64Data = res.data.content
            const arrayBuffer = wx.base64ToArrayBuffer(base64Data);
            const textDecoder = new TextDecoder('utf-8');
const decodedString = textDecoder.decode(arrayBuffer);
            // console.log(res.data.content)
            console.log(decodedString);
          }
        },
        // API 调用失败以后，执行的回调
        fail: (err) => {
          console.log(err)
        },
        // API 不管调用成功还是失败以后，执行的回调
        complete: (res) => {
          // console.log(res)
        }
      })
    }
})
