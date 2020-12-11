// pages/page-qb/page-qb.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
  const app = getApp()
  var call=require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quantity: "20000",
    currentTab: 1,
    swiperCurrent: 0,
    currentTab_one: 0,
    swiperCurrent_one: 0,
    navbar: [{
      img: url + "/icon_zhifubao.png",
      name: '支付宝支付',
    }, {
      img: url + "/icon_weixin.png",

      name: '微信支付'
    }, {
      img: url + "/icon_zhifubao.png",
      name: '当面支付'
    }],
    sum: [
    //   {
    //   img: url + "/icon_zhuanshi1.png",
    //   num: "600",
    //   num1: "￥0.01"
    // }, {
    //   img: url + "/icon_zhuanshi1.png",
    //   num: "3000",
    //   num1: "￥30.00"
    // }, {
    //   img: url + "/icon_zhuanshi1.png",
    //   num: "9800",
    //   num1: "¥98.00"
    // }, {
    //   img: url + "/icon_zhuanshi1.png",
    //   num: "9800",
    //   num1: "¥388.00"
    // }, {
    //   img: url + "/icon_zhuanshi1.png",
    //   num: "58800",
    //   num1: "¥588.00"
    // }
  ],
    items: [{
      value: 'CHN',
      checked: 'true'
    }, ]

  },
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
    }
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  navbarTap_one: function (e) {
    this.setData({
      currentTab_one: e.currentTarget.dataset.idx
    })
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent_one: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
getData(){
  var data={
    service:"Charge.getZhuanRules"
  }
  var url = '?service=Charge.getZhuanRules'
  call.getData(url,data,this.shuffleSuc,this.fail)
},
shuffleSuc(data){
  console.log(data.data.info.lists)
  this.setData({
    sum:data.data.info.lists
  })
},
fail(errMsg){

},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  }
})