// custom-tab-bar/index.js
var url="https://wxx.zyinc.net/web/uploads/mall1/20201023/images"
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
    isShowNewTabbar:false,
    tel:0,
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#FF1C6C",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath":  url+"/icon_shouye_weixuanzhong@3x.png",
        "selectedIconPath": url+"/icon_shouye_xuanzhong@3x.png"
      },
      {
        "pagePath": "/pages/page-fj/page-fj",
        "text": "附近",
        "iconPath": url+"/icon_fujin_weixuanzhong@3x.png",
        "selectedIconPath":url+"/icon_fujin_xuanzhong@3x.png"
      },
      {
        "pagePath": "/pages/buy/buy",
        "iconPath": url+"/icon_luzhishipin@3x.png",
        "selectedIconPath": url+"/icon_luzhishipin@3x.png"
      },
      {
        "pagePath": "/pages/page-ph/page-ph",
        "text": "排行",
        "iconPath": url+"/icon_paihangbang_weixuanzhong@3x.png",
        "selectedIconPath": url+"/icon_paihangbang_xuanzhong@3x.png"
      },
      {
        "pagePath": "/pages/page-main/page-main",
        "text": "我的",
        "iconPath":url+ "/icon_wode_weixuanzhong@3x.png",
        "selectedIconPath": url+"/icon_wode_xuanzhong@3x.png"
      }
    ],
    list_one:[
      {
        img:"/images/icon_luzhishipin1.png",
        img_one:"/images/icon_fabushipin1.png"
        ,icon:'/images/icon_chahao.png'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  onLoad: function (options) {
    console.log(111)
  },
  methods: {
    switchTab(e) {
      const idx = e.currentTarget.dataset.index
      const path = e.currentTarget.dataset.path
      this.setData({
        selected: idx
      })
      if (this.data.list[idx].isSpecial){
        wx.switchTab({
          url: path,
        })
        console.log(path)
      }else{
        console.log(path)
          if(path == '/pages/buy/buy'){
            this.setData({
              isShowNewTabbar:true
            })
          }else{
            wx.switchTab({
              url: path,
            })
          }
      }
      console.log(this.data.selected, idx);
    },
    isShowNewTabbarClick(){
      this.setData({
        isShowNewTabbar:false
      })
    },
    Recording(){
      wx.navigateTo({
        url: '/zhibo/list/list',
      })
    }
  }
  
})
