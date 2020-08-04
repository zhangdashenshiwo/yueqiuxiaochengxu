// pages/peilian/peilian.js
Page({
  openConfirm: function () {
    wx.showModal({
      title: '是否预约',
      content: '若点击确定，在2分钟内能取消该预约申请，若违约，则造成信誉度降低',
      confirmText: "确认支付",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/yuyue/yuyue',
          })
        } 
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    value1: 1,
    value2:30

  },
  handleChange1({
    detail
  }) {
    this.setData({
      value1: detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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