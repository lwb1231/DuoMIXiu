// components/header-com/index.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperCurrent: 0,
    navbar: ['我的直播间', '我的房间'],
    currentTab: 0,
    navs: [{
        name: "管理员",
        ico: url + "/icon_gengduo.png"
      },
      {
        name: "禁言用户",
        ico: url + "/icon_gengduo.png"
      },
      {
        name: "拉黑用户",
        ico: url + "/icon_gengduo.png"
      }
    ],
    navs_One:[{
      name: "不如归去的直播间",
      ico: url + "/icon_gengduo.png"
    }],
    // 状态栏高度
    statusBarHeight: wx.getStorageSync('statusBarHeight') + 'rpx',
    // 导航栏高度
    navigationBarHeight: wx.getStorageSync('navigationBarHeight') + 'rpx',
    // 胶囊按钮高度
    menuButtonHeight: wx.getStorageSync('menuButtonHeight') + 'rpx',
    // 导航栏和状态栏高度
    navigationBarAndStatusBarHeight: wx.getStorageSync('statusBarHeight') +
      wx.getStorageSync('navigationBarHeight') +
      'rpx'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _goBack: function () {
      wx.navigateBack({
        delta: 1
      });
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
    goDetail(){
      wx.navigateTo({
        url: '/pages/page-fjgl/page-fjgl',
      })
    },
    gobroadcasting(){
      wx.navigateTo({
        url: '/pages/page-glylb/page-glylb',
      })
    }
  }

})