const app = getApp();
Page({
  data: {
    orderList: [
      {
        restaurantName: "传世排骨汤饭",
        state: "订单完成",
        price: "12",
        date: "2018-08-02",
        time: "12:29:12",
        howToDistribute: "酸甜土豆丝 x1酸甜土豆丝 x1酸甜土豆丝 x1酸甜土豆丝 x1酸甜土豆丝 x1",
        address:"慕课网大厦"
      },
    ]
  },
  onLoad:function(){
    let userId = app.globalData.userId;
    var that = this;
    wx.request({
      url: 'https://cxd.mynatapp.cc/buyer/order/detail/' + userId,
      method:'GET',
      header: {
        'content-type': 'text/html'
      },
      success:function(resInfo){
        console.log(resInfo)
        var data = resInfo.data.data;
      }
    })
  },
  goToComment:function(){
    wx.navigateTo({
      url: '../Comment/Comment',
    })
  }
})