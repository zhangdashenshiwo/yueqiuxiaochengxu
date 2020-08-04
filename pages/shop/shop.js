// pages/shop/shop.js
Page({
  buying: function(e) {
    wx.navigateTo({
      url: '/pages/buy/buy',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    winwidth: 0,
    winheight: 0,
    list: [{
      name: "李宁篮球",
      detail: "李宁官方旗舰店",
      money: "￥121",
      image: "/image/lanqiu.jpg"
    }, {
      name: "红双喜羽毛球",
      detail: "红双喜官方旗舰店",
      money: "￥95",
      image: "/image/yumao.jpg"
    }, {
      name: "阿迪达斯足球",
      detail: "阿迪达斯官方旗舰店",
      money: "￥99.9",
      image: "/image/foot.jpg"
    }, {
      name: "红双喜乒乓球",
      detail: "红双喜官方旗舰店",
      money: "￥149",
      image: "/image/pingpon.jpg"
    }, ],
    grid: [{
      name: "球类",
      image: "/image/zuqiu.png"
    }, {
      name: "搏击类",
      image: "/image/quanji.png"
    }, {
      name: "运动服装",
      image: "/image/yifu.png"
    }, {
      name: "健身器械",
      image: "/image/paobu.png"
    }, {
      name: "运动护具",
      image: "/image/huju.png"
    }, {
      name: "户外用品",
      image: "/image/zhangpeng.png"
    }, {
      name: "竞赛专用",
      image: "/images/rank.png"
    }, {
      name: "体育场馆",
      image: "/image/tiyuguan.png"
    }, {
      name: "运动营养品",
      image: "/image/yingyang.png"
    }, {
      name: "校园体育器材",
      image: "/image/xiaoyuan.png"
    }, {
      name: "家用系列",
      image: "/image/jiayong.png"
    }, {
      name: "二手区",
      image: "/image/ershou.png"
    }, ],
    ball: [{
      name: "正品耐磨篮球",
      image: "/image/lanqiu.jpg"
    }, {
      name: "儿童西瓜球",
      image: "/image/tao2.jpg"
    }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var page = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        page.setData({
          winwidth: res.windowWidth
        });
        page.setData({
          winheight: res.windowHeight
        });
      },
    })
  },
  switchNav: function(e) {
    var id = e.currentTarget.id;
    this.setData({
      currentTab: id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})