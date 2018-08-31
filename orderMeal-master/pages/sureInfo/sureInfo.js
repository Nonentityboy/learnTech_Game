var app = getApp();
const util = require('../../utils/util.js')
Page({
  data: {
    userName:"",
    userIcon:"",
    userId:""
  },
  tap: util.throttle(function (e) {
    console.log(this)
    console.log(e)
    console.log((new Date()).getSeconds())
  }, 1000),
  onGotUserInfo: function (e) {
    var that = this;
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    wx.getSetting({
      success: function() {
        wx.login({
          success: function(res) {
            console.log(res);
            wx.getUserInfo({
              success: function(res_user) {
                console.log(res_user);
                wx.request({
                  url: 'https://cxd.mynatapp.cc/wechat/login',
                  data: {
                    code: res.code,
                    encryptedData: res_user.encryptedData,
                    iv: res_user.iv
                  },
                  method: 'POST',
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function (resInfo) {
                    console.log(resInfo);
                    app.globalData['userId'] = resInfo.data.data.userId;
                    app.globalData['userOpenid'] = resInfo.data.data.userOpenid;
                    console.log(resInfo.data.data.userOpenid)
                    wx.navigateTo({
                      url: '../dishes/dishes',
                    })
                  }
                })
              }
            })
          }
        })
      } 
    })
  },

})