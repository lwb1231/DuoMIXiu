var url="https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
Page({
  data: {
    swiperCurrent: 0,
    swiperCurrent_one: 0,
    navbar: ['星河银', '亮黑色', '罗兰紫','丹霞橙'],
    navbar_one: ['8+128G', '8+256G'],
    currentTab: 0,
    currentTab_one: 0,
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    quantity1: {
      quantity: 10,
      min: 1,
      max: 20
    },
    isLike: true,
    showDialog:false,
    // banner
    imgUrls: [
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //	滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
      "https://wxx.zyinc.net/web/uploads/mall1/20201023/images/test.png",
    ],
    navs:[{
        img:url+"/icon_fenxiang1@2x.png",
        share_text:"分享",
        text:"销量:",
        text1:"1.2w",
        repertory:"库存:",
        repertory_num:"99999"
    }],
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
  navbarTap_one: function (e) {
    this.setData({
      currentTab_one: e.currentTarget.dataset.idx
    })
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent_one: e.detail.current
    })
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },

  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  addCar(){
    console.log(111)
    wx.navigateTo({
      url: '/pages/page-cart/page-cart'
    })
  },

  // 购买数量
  toggleDialog(){
    console.log(111)
      this.setData({
        showDialog:true
      })
    },
    // 关闭商品数量
    closeDialog(){
      this.setData({
        showDialog:false,
      })
    },
  // 立即购买
  immeBuy() {
    // wx.showToast({
    //   title: '购买成功',
    //   icon: 'success',
    //   duration: 2000
    // });
    wx.navigateTo({
      url: '/pages/page-qrdd/page-qrdd',
    })
  },
})
