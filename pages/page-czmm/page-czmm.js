// pages/page-czmm/page-czmm.js
const app = getApp()
var call = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: [{
      title: "旧密码",
      tips: "请输入旧密码"
    }, {
      title: "新密码",
      tips: "请输入新密码"
    },{
      title: "确认密码",
      tips: "确认新密码"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // thiw.getData()
  },
// getData(){
//     var data={

//     }
//     var url=''
//     call.getData(url,data,this.succeed,this.err)
// },
// succeed(data){

// },
// err(errMsg){

// },
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