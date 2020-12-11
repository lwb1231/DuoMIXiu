// pages/page-wdorder/page-wdorder.js// pages/order/order.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"

Page({
  data: {
    navbar: ['全部', '待付款', '待发货','待收货',"待评价"],
    currentTab: 0,
    summation:"¥9398.00",
    time:"2020-10-14 15:01",
    tab1: {
      list: [{
        id: 0,
        title: '全部'
      }, {
        id: 1,
        title: '待付款'
      }, {
        id: 2,
        title: '待发货'
      }, {
        id: 3,
        title: '待收货'
      }, {
        id: 4,
        title: '待评价'
      }],
      selectedId: 0,
      scroll: false,
    },
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    this.setData({
      "${componentId}.selectedId": selectedId
    });
  },
  // 导航切换监听
navbarTap: function (e) {
  console.debug(e);
  this.setData({
    currentTab: e.currentTarget.dataset.idx
  })
},
});