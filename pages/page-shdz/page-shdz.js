// pages/page-shdz/page-shdz.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
const app = getApp()
var call=require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    is_default:true,
    navs:[

    ]
  },
  goQH(){
    // console.log(this.data.num)
      const is_default = this.data.is_default
    if(is_default==true){

      this.setData({
        
        is_default:false
      })
    }else{
      wx.showToast({
        title: '已经设置为默认地址！',
        icon: 'none',
        duration: 2000//持续的时间
   
      })
      this.setData({
        is_default:true
      })
    }
  },
  delect(){
    const currentTab = this.data.currentTab
    wx.showModal({
      title: '提示',
      content: '确认删除地址吗？',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          this.setData({
            currentTab:1
          })
        } else {//这里是点击了取消以后
       
        }
      }
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
    service:"Address.addressList",
    uid:"37181",
    token:"e0535d4751d565188259152fc0b316f1",
    address_id:"0"
  }
  var url = '?service=Address.addressList&uid=37181&token=e0535d4751d565188259152fc0b316f1'
  call.getData(url,data,this.shuffleSuc,this.fail)
},
shuffleSuc(data){
  this.setData({
    navs:data.data.info[0]
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
  Newadd(){
    wx.navigateTo({
      url: '../page-xzshdz/page-xzshdz',
    })
  },


})