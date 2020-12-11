// pages/page-sqrz/page-sqrz.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs:[{
      name:"真实姓名",
      title:"请输入名称"
    },
    {
      name:"手机号码",
      title:"请输入姓名"
    },{
      name:"身份证号",
      title:"请输入本人身份证号码"
    }],
    Upload:[
      {
        img:url+"/icon_jiahao.png",
        text:'证件正面'
      },    {
        img:url+"/icon_jiahao.png",
        text:'证件背面'
      },    {
        img:url+"/icon_jiahao.png",
        text:'手持证件正面照'
      },
    ]
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

  }
})