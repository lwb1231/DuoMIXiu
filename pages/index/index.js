// pages/pages_tj/pages_tj.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
let animationShowHeight = 30;
// pages/activityDetail/activityDetail.js
//获取应用实例
const app = getApp()
var call = require("../../utils/request.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShowNewTabbar: false,
    choose: false,
    animationData: {},
    stopBtn: true, //动画未执行完之前禁用按钮
    navs: [
      {
          img: url + "/icon_女神.png",
          name: "女神",
        },
        {
          img: url + "/icon_男神.png",
          name: "男神"
        },
        {
          img: url + "/icon_美食.png",
          name: "美食"
        },
        {
          img: url + "/icon_才艺.png",
          name: "才艺"
        },
        {
          img: url + "/icon_直播购.png",
          name: "直播购"
        },
        {
          img: url + "/icon_更多.png",
          name: "全部"
        }
    ],
    navs1: [
      {
        img: url + "/icon_女神.png",
        name: "女神",
        id: "0"
      },
      {
        img: url + "/icon_男神.png",
        name: "男神"
      },
      {
        img: url + "/icon_美食.png",
        name: "美食"
      },
      {
        img: url + "/icon_才艺.png",
        name: "才艺"
      },
      {
        img: url + "/icon_直播购.png",
        name: "直播购"
      }
    ],
    slider: [
    //   {
    //   img: url + "/icon_女神.png",
    //   name: "女神",
    // }, {
    //   picUrl: "../image/2.jpg",
    //   id: "2"
    // }, {
    //   picUrl: "../image/3.jpg",
    //   id: "3"
    // }
  ],


    image: [
      {
        img: "../image/排行榜.png",
        title: "排行",
        id: "排行"
      },
      {
        img: "../image/消息.png",
        title: "消息",
        id: "消息"
      }, {
        img: "../image/活动.png",
        title: "活动",
        id: "活动"
      }, {
        img: "../image/直播.png",
        title: "直播",
        id: "直播"
      }
    ],
    image_sp: [
      {
      img: url + "/test.png",
      path: 'pages/page-particulars/page-particulars',
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }, {

      img: url + "/test.png",
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }, {
      img: url + "/test.png",
      title: "我是视频"
    }
  ],
    swiperCurrent: 0,
    navbar: ['关注', '直播', '悬赏中心'],
    currentTab: 1,
    icon_right_top: [
      {
      url: url + '/icon_xin.png'
    }, {
      url: url + '/icon_直播购.png'
    }, {
      url: url + '/icon_火苗.png'
    }
  ]
  },
  // recommend_tr_tap: function () {
  //   wx.navigateTo({
  //     url: '/pages/pages_qw/pages_qw'
  //   })
  // },
  showContent: function (e) {
    // 用that取代this，防止setTimeout内使用this出错
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    //用step()完成一个动画， 高度为0，透明度为不可见
    animation.height("0").opacity(1).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变显示条件
      choose: true
    })
    // 设置setTimeout来改变高度以及透明度，实现有感觉的展开
    setTimeout(function () {
      animation.height("500rpx").opacity(1).step({
        duration: 500
      })
      that.setData({
        animationData: animation.export(),
      })
    }, 50)
    //在动画时间禁用按钮
    setTimeout(function () {
      that.setData({
        stopBtn: false
      })
    }, 500)
  },

  // 隐藏
  hideContent: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.height(0).opacity(0).step({
      duration: 500
    })
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.height("60rpx").step();
      that.setData({
        animationData: animation.export(),
        choose: false,
      })
    }, 500)
    //收回动画开始禁用按钮
    that.setData({
      stopBtn: true,
    })
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
  goParticulars(val) {
    console.log(val.target.dataset.path)
    wx.navigateTo({
      url: "/pages/page-particulars/page-particulars",
    })
  },
  cut_all() {
    this.setData({
      isShowNewTabbar: true
    })
  },
  cut_all1() {
    this.setData({
      isShowNewTabbar: false
    })
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
      data:'',
      info:[],
      liveclass:[]
    }
    var url = '?service=Home.getConfig'
    call.getData(url, data, this.shuffleSuc, this.fail)
  },

  shuffleSuc(data) {
    // console.log(data.data.info[0].liveclass)
    // console.log(data)
    this.setData({
      navs1:data.data.info[0].liveclass
    })
  },
  fail(errMsg) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0 //这个数字是当前页面在tabBar中list数组的索引
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

})