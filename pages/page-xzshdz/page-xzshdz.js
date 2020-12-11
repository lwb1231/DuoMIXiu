// pages/page-xzshdz/page-xzshdz.js
const app = getApp()
var call = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navs:[
        {
        label:"收货人",
        input:"请输入收货人姓名"
      },{
        label:"手机号",
        input:"请输入收货人联系电话"
      },{
        label:"所在地区",
        input:"选择省、市、区"
      },{
        label:"所在地区",
        input:"请输入街道小区楼层"
      }
    ]
  },
  save(){
    wx.showToast({
      title: '保存成功！',
      icon: 'none',
      duration: 2000//持续的时间
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
getData(){
  var data = {
    service:"Address.addAddress",
    uid:"37181",
    token:"2e09dc453aa3df63cf9d00e0f5a408da",
    consignee:"董胜利",
    mobile:"13503999162",
    district:"541",
    address:"25",
    address:"河南省郑州市国内",
    is_default:"0"

  }
  var url = '?service=Address.addAddress&uid=37181&token=2e09dc453aa3df63cf9d00e0f5a408da&consignee=董胜利&mobile=13503999162&district=541&address=河南省郑州市国内&is_default=1'
  call.getData(url,data,this.confirm,this.fail)
},
confirm(data){
  console.log(data.data.info)
    this.setData({

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

})