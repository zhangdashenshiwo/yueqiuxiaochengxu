const { $Toast } = require('../../dist/base/index');
var app = getApp()
Page({
  data: {
    current: 'tab1',
    current_scroll: 'tab1',
    ets: [],
    baseUrl: app.globalData.baseUrl,
    currentTab: 0,
    winwidth: 0,
    winheight: 0,
    current: 1
  },
  handleSuccess() {
    $Toast({
      content: '成功的提示',
      type: 'success'
    });
  },
  handleChange({ detail }) {
    const type = detail.type;
    if (type === 'next') {
      this.setData({
        current: this.data.current + 1
      });
    } else if (type === 'prev') {
      this.setData({
        current: this.data.current - 1
      });
    }
  },

  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function() {
    // this.loading();
    var that = this;
    that.loadPer();
    var page = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        page.setData({ winwidth: res.windowWidth });
        page.setData({ winheight: res.windowHeight });
      },
    })
  },
  openConfirm: function () {
    wx.showModal({
      title: '确定约球',
      content: '若点击确定，在2分钟内能取消该约球申请，若违约，则造成信誉度降低',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/log/lon',
          })
        } 
      }
    });
  },
  switchNav: function (e) {
    var id = e.currentTarget.id;
    this.setData({ currentTab: id });
  },
  // 加载艺人列表
  loadPer: function() {
    var that = this;
    wx.request({
      url: app.globalData.baseUrl + '/list/', // 接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      // 成功
      success: function(res) {
        console.log("加载艺人列表 成功", res.data.data);
        that.setData({
          ets: res.data.data
        });
      },
      // 失败
      fail: function(err) {
        console.log("加载艺人列表 失败", err);
      }
    })
  },

  handleChangeScroll({
    detail
  }) {
    this.setData({
      current_scroll: detail.key
    });
  },
  onPullDownRefresh: function() {
    console.log("下拉刷新")
    var that = this;
    wx.showNavigationBarLoading()

    setTimeout(() => {
      that.loadPer();
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000)
  },
  seePerson: function(e) {
    if (!e.currentTarget.id == "") {
      wx.navigateTo({
        url: "../detailjiemu/detailjiemu?id=" + e.currentTarget.id
      })
      console.log(e)
    } else {
      console.log("无内容")
    }
  }
})