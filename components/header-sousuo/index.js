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
    
 // 状态栏高度
 statusBarHeight: wx.getStorageSync('statusBarHeight') + 'rpx',
 // 导航栏高度
 navigationBarHeight: wx.getStorageSync('navigationBarHeight') + 'rpx',
 // 胶囊按钮高度
 menuButtonHeight: wx.getStorageSync('menuButtonHeight') + 'rpx',
 // 导航栏和状态栏高度
 navigationBarAndStatusBarHeight:
   wx.getStorageSync('statusBarHeight') +
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
  }
  
})
