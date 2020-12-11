// pages/page-ph/page-ph.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
const app = getApp()
var call = require("../../utils/request.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 收益榜
    swiperCurrent: 0,
    navbar: ['收益榜', '贡献榜', ],
    navbar_one: ['日榜', '周榜', '月榜', '总榜'],
    currentTab: 0,
    currentTab_one: 0,
    swiperCurrent_one: 0,
    navs: [{
      img:url+"/test.png",
        name: "手机用户1...",
        ico:url+"/icon_xingbie.png",
        num:"8",
        text:"3200映票",
        attention:"关注",
        image:url+"/icon_yinguan.png",

        estate:"2"
      },
      {
        img:url+"/test.png",
        name: "手机用户1...",
        ico:url+"/icon_xingbie.png",
        num:"9",
        text:"4300映票",
        image:url+"/icon_huangguan.png",
        attention:"关注",
        estate:"1",
      },
      {
        img:url+"/test.png",
        name: "手机用户1...",
        ico:url+"/icon_xingbie.png",
        num:"6",
        text:"11000映票",
        attention:"关注",
        image:url+"/icon_tongguan.png",
        estate:"3"
      }
    ],
    ranking:[
      {
        name:"NO.4",
        img:url+"/test.png",
        screen: "随波人生",
        ico:url+"/icon_xingbie.png",
        num:"6",
        text:"11000映票",
        text1:"关注",

      },{
        name:"NO.5",
        img:url+"/test.png",
        screen: "小文",
        ico:url+"/icon_xingbie.png",
        num:"6",
        text:"11000映票",
        text1:"关注",
      },{
        name:"NO.5",
        img:url+"/test.png",
        screen: "随波人生",
        ico:url+"/icon_xingbie.png",
        num:"6",
        text:"11000映票",
        text1:"关注",
      },{
        name:"NO.5",
        img:url+"/test.png",
        screen: "思念如雨",
        ico:url+"/icon_xingbie.png",
        num:"6",
        text:"11000映票",
        text1:"关注",
      },{
        name:"NO.5",
        img:url+"/test.png",
        screen: "思念如雨",
        ico:url+"/icon_xingbie.png",
        num:"6",
        text:"11000映票",
        text1:"关注",
      }
    ]
  },
  recommend_tr_tap: function () {
    wx.navigateTo({
      url: '/pages/pages_qw/pages_qw'
    })
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
  navbarTap_One: function (e) {
    console.log(1111)
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
  getData() {
    var data = {

    }
    var url = ''
    call.getData(url, data, this.shuffleSuc, this.fail)
  },

  shuffleSuc(data) {
    console.log()
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

    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3 //这个数字是当前页面在tabBar中list数组的索引
      })
    }
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

  }
})