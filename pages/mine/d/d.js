// pages/mine/d/d.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  test: function (e) {
    console.log(e)
    var name = wx.getStorageSync("username")
    if (e.detail.value.username == name) {
      wx.showToast({

        title: '成功',

        icon: 'success',

        duration: 5000//持续的时
      })
      wx.navigateTo({
        url: '/pages/mine/c/c',
      })
    }
    else
    {
      console.log("输入错误")
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})