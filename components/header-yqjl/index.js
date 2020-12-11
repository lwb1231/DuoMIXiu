// components/header-com/index.js
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
    onclick(){
      console.log(111)
       // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
       this.triggerEvent('parentEvent')
    }
  }
  
})
