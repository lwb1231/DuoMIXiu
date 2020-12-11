// pages/page-grzl/page-grzl.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
const app = getApp()
var call = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head_portrait: [{
      img: url + '/test.png',
      title: "手机用户8817",
      ico: url + "/icon_bianji1.png",
      path: '/pages/page-bianji/page-bianji',
      ico1: url + "/icon_性别.png",
      ico2: url + "/icon_性别.png",
      ico3: url + "/icon_性别.png",
      num1: "1",
      num2: "1",
      num3: "0",
      num4: "0",
      user_ID: "ID:",
      user_num: "14521023"
    }],
    swiperCurrent: 0,
    navbar: ['资料', '视频0','直播0'],
    currentTab: 0,
    img:url+"/test.png",
    grade:"1",
    grade1:"2",
    empirical:"0",
    upgrade:"50",
    time:"2020-11-21"
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //保存路由信息做分享页跳转
      this.getData()
  },
  getData() {
    var data = {
    }
    var url = ''
    call.getData(url, data, this.shuffleSuc, this.fail)
  },

  shuffleSuc(data) {
    console.log(data)
    this.setData({

    })
  },
  fail(errMsg) {},
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
  _goBack: function () {
    wx.navigateBack({
      delta: 1
    });}
})