// pages/page-bianji/page-bianji.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
const app = getApp()
var call= require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs:[
      {
        name: "社区公约",
        icon: url + "/icon_gengduo.png"
      },
      {
        name: "隐私政策",
        icon: url + "/icon_gengduo.png"
      },
      {
        name: "服务和隐私政策",
        icon: url + "/icon_gengduo.png"

      },
      {
        name: "联系我们",
        icon: url + "/icon_gengduo.png"

      },
      {
        name: "主播协议",
        icon: url + "/icon_gengduo.png"

      },
      {
        name: "意见反馈",
        icon: url + "/icon_gengduo.png"
      },
      {
        name: "修改密码",
        icon: url + "/icon_gengduo.png"
      },
      {
        name: "清除缓存",
        text: "3.07MB",
        icon: url + "/icon_gengduo.png"
      },
      {
        name: "检查更新",
        text: "1.0",
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
  // var url = ""
  call.getData(url,data,this.confirem,this.file)
},
confirem(data){

},
file(errMsg){

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