// pages/page-bianji/page-bianji.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
const app = getApp()
var call = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs:[
      {
        img: url + "/test.png",
        name: "头像",
        icon: url + "/icon_gengduo.png"
      },
      {
        name: "昵称",
        text: "好运",
        icon: url + "/icon_gengduo.png"
      },
      {
        name: "性别",
        text: "女",
        icon: url + "/icon_gengduo.png"

      },
      {
        name: "生日",
        text: "96.07.23",
        icon: url + "/icon_gengduo.png"

      },
      {
        name: "所在地",
        text: "",
        icon: url + "/icon_gengduo.png"

      },
      {
        name: "签名",
        text: "这家伙很懒，什么都没留下",
        icon: url + "/icon_gengduo.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
getData(){
  // var data={

  // },
  // var url = ''
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

  }
})