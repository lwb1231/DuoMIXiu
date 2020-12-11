// pages/page-wddj/page-wddj.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
  const app = getApp()
  var call = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      // { "code": "跑车", "text": "300钻石", "num": "10个" ,"name":"好运"},
     ],
     listTime:[
    //    {
    //   "time1":"2020-10-22 15:17","time2":"2020-10-22 15:20","time3":"00:03:01"
    //  }
    ],
    swiperCurrent: 0,
    navbar: ['收礼物明细', '直播时长明细'],
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
    this.getData(),
    this.GetData()
  },
getData(){
  var data= {
    uid:"37180",
    token:"05dbb2f3416b653b4c4977b540217586",
    page:"1",
  }
  var url = 'Detail/receive_more?uid=37180&token=05dbb2f3416b653b4c4977b540217586&page=1'
  call.getData(url,data,this.shuffleSuc,this.fail)
},
shuffleSuc(data){
  // console.log(data.data[0])
  this.setData({
    listData:data.data,
  })
},
fail(errMsg){

},

GetData(){
  var data= {
    uid:"37180",
    token:"05dbb2f3416b653b4c4977b540217586",
    page:"1",
  }
  var url = 'Detail/liverecord_more?uid=37180&token=05dbb2f3416b653b4c4977b540217586&page=1'
  call.getData(url,data,this.shuffleSuc1,this.fail1)
},
shuffleSuc1(data){
  console.log(data.data)
  this.setData({
    listTime:data.data,
  })
},
fail1(errMsg){

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