// zhibo/list/list.js
const app = getApp()
let roomId = 1
let width = 120
let height = 41
let fontSize = 17
let color = '#FFFFFF'
let backgroundColor = '#6467F0'
let customParams = encodeURIComponent(JSON.stringify({
  path: 'pages/index/index',
  pid: 1
}))

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "roomId": 33, //房间ID
    "errcode": 0,
    // 当主播微信号没有在 “小程序直播“ 小程序实名认证 返回该字段
    "qrcode_url": "https://res.wx.qq.com/op_res/9rSix1dhHfK4rR049JL0PHJ7TpOvkuZ3mE0z7Ou_Etvjf-w1J_jVX0rZqeStLfwh",
    id: "测试直播房间1",  // 房间名字
    coverImg: "",   // 通过 uploadfile 上传，填写 mediaID
    startTime: 1588237130,   // 开始时间
    endTime: 1588237130 , // 结束时间
    anchorName: "zefzhang1",  // 主播昵称
    anchorWechat: "WxgQiao_04",  // 主播微信号
    subAnchorWechat: "WxgQiao_03",  // 主播副号微信号
    createrWechat: 'test_creater', // 创建者微信号
    shareImg: "" ,  //通过 uploadfile 上传，填写 mediaID
    feedsImg: "",   //通过 uploadfile 上传，填写 mediaID
    isFeedsPublic: 1, // 是否开启官方收录，1 开启，0 关闭
    type: 1 , // 直播类型，1 推流 0 手机直播
    screenType: 0,  // 1：横屏 0：竖屏
    closeLike: 0 , // 是否 关闭点赞 1 关闭
    closeGoods: 0, // 是否 关闭商品货架，1：关闭
    closeComment: 0, // 是否开启评论，1：关闭
    closeReplay: 1 , // 是否关闭回放 1 关闭
    closeShare: 0,   //  是否关闭分享 1 关闭
    closeKf: 0, // 是否关闭客服，1 关闭
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
  // getUserInfo() {
  //   wx.getUserInfo({
  //     success: function (res) {
  //       console.log(
  //         '获取用户信息成功');
  //     },
  //     fail: function (e) {
  //       console.log(
  //         "获取用户信息失败 + " +
  //         JSON.stringify(e));
  //     }
  //   })
  // }

})