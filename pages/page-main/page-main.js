// pages/page-main/page-main.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
const app = getApp()
var call = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: 0,
    currentTab: 0,
    navs: [
      //   {
      //     img: url + "/icon_1.png",
      //     path: '/pages/page-wdsp/page-wdsp',
      //     name: "我的视频",
      //     ico: url + "/icon_gengduo.png"
      //   },
      //   {
      //     img: url + "/icon_我的收益.png",
      //     path: '/pages/page-wdsy/page-wdsy',
      //     name: "我的收益",
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_wodedengji.png",
      //     name: "我的等级",
      //     path: '/pages/page-wddj/page-wddj',
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_woderenzheng.png",
      //     name: "我的认证",
      //     path: '/pages/page-wdrz/page-wdrz',
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_shenqingdianpu.png",
      //     path: '/pages/page-sqxd/page-sqxd',
      //     name: "申请店铺",
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_shenqingdianpu.png",
      //     name: "申请供货商",
      //     path: '/pages/page-sqghs/page-sqghs',
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_fangjianguanli.png",
      //     name: "房间管理",
      //     path: '/pages/page-wdzbj/page-wdzbj',
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_zhuangbeizhongxin.png",
      //     path: '/pages/page-zbzx/page-zbzx',
      //     name: "装备中心",
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_jiazuxinxi.png",
      //     name: "家族中心",
      //     path: '/pages/page-jzsq/page-jzsq',
      //     ico: url + "/icon_gengduo.png"
      //   },
      //   {
      //     img: url + "/icon_jiazuzhudi.png",
      //     path: '/pages/page-jzzd/page-jzzd',
      //     name: "家族驻地",
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_yaoqing.png",
      //     path: '/pages/page-yqjl/page-yqjl',
      //     name: "邀请奖励",
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon_zaixiankefu.png",
      //     path: '/pages/page-zxkf/page-zxkf',
      //     name: "在线客服(Beta)",
      //     ico: url + "/icon_gengduo.png"

      //   },
      //   {
      //     img: url + "/icon-gexingshezhi.png",
      //     name: "个性设置",
      //     path: '/pages/page-gxsz/page-gxsz',
      //     ico: url + "/icon_gengduo.png"
      //   }
      // ],

    ],
    sible: [{
        img: url + "/icon_xiaoxi1.png",
        path: '/pages/page-xx/page-xx',
        name: "消息"
      },
      {
        img: url + "/icon_qianbao.png",
        path: '/pages/page-qb/page-qb',
        name: "钱包"
      },
      {
        img: url + "/icon_mingxi.png",
        path: '/pages/page-mx/page-mx',
        name: "明细"
      },
      {
        img: url + "/icon_shangcheng.png",
        path: '/pages/page-sc/page-sc',
        name: "商城"
      }
    ],
    list1:[],
    // num: [{
    //   ico: url + "/icon_bianji1.png",
    //   num1: "1",
    //   num2: "1",
    //   num3: "0",
    //   num4: "0",
    // }],
    head_portrait: [
      // {
      //   img: url + '/test.png',
      //   name: "会员",
      //   title: "手机用户8817",
      // ico: url + "/icon_bianji1.png",
      //   path: '/pages/page-bianji/page-bianji',
      // ico1: url + "/icon_性别.png"
      //   ico2: url + "/icon_性别.png",
      //   ico3: url + "/icon_性别.png",
      //   num1: "1",
      //   num2: "1",
      //   num3: "0",
      //   num4: "0",
      //   user_ID: "ID:",
      //   user_num: "14521023"
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //保存路由信息做分享页跳转
    this.getData()
  },
  getData() {
    var data = {
      service: "User.getBaseInfo",
      uid: '37181',
      token: '32fd0ed4dd69d2d806454e222dc46eed',
      data: '',
      touid: '37180'
    }
    var url = 'Applet/getBaseInfo?uid=37181&token=32fd0ed4dd69d2d806454e222dc46eed'
    call.getData(url, data, this.shuffleSuc, this.fail)
  },

  shuffleSuc(data) {
    // console.log(data.info)
    this.setData({
      navs: data.info.list[0],
      head_portrait: data.info,
      list1:data.info.list1
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
        selected: 4 //这个数字是当前页面在tabBar中list数组的索引
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

  },
  // 商城
  goParticulars(val) {
    console.log(val)
    wx.navigateTo({
      url: val.currentTarget.dataset.path,
    })
  },
  // 我的选项
  goDetail(val) {
    // console.log(val.target.dataset.path)
    console.log(val)
    wx.navigateTo({
      url: val.currentTarget.dataset.path,
    })
  },
  goCompile(val) {
    console.log(val.target.dataset.path)
    wx.navigateTo({
      url: val.target.dataset.path,
    })
  },

  vermicelli() {
    wx.navigateTo({
      url: '/pages/page-wdfs/page-wdfs',
    })
  },
  attention() {
    wx.navigateTo({
      url: '/pages/page-wdgz/page-wdgz',
    })
  },
  goPersonal() {
    wx.navigateTo({
      url: '/pages/page-grzl/page-grzl',
    })
  }
})