// pages/page-yqjl/page-yqjl.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    navbar: ['我的直播间', '我的房间'],
    currentTab: 0,
    navs: [{
        name: "我的上级",
        title:"去设置",
        path:"/pages/page-yqjlsj/page-yqjlsj",
        ico: url + "/icon_gengduo.png"
      },
      {
        name: "下级总提成",
        title:"0",
        path:"/pages/page-yqjlsj/page-yqjlsj",

        ico: url + "/icon_gengduo.png"
      }],
    isShow:false,
    code_num:[{
      num:"G"
    },{
      num:"A"
    },{
      num:"K"
    },{
      num:"3"
    },{
      num:"Q"
    },{
      num:"Q"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onParentEvent(){
    this.setData({
      isShow:true
    })
  },
  clickI(){
    console.log(222)
    this.setData({
      isShow:false
    })
  },
  gointerlinkage(val){
      wx.navigateTo({
        url: val.currentTarget.dataset.path,
    })
  }
})