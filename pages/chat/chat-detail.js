Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow: true,

    list: [{
        name: "尘埃落定莱昂纳德加盟快船",
        images: "http://00imgmini.eastday.com/mobile/20190706/20190706225952_56082c79f66cfd690c49190ff50f9ce4_1.jpeg",
        container: "北京时间7月6日，NBA球员莱昂纳德宣布加盟洛杉矶快船队，随后通知猛龙与湖人这一决定。"

      },
      {
        name: "阿根廷不再需要梅西！事实恰恰相反，梅西将会更加依赖阿根廷",
        images: "http://02imgmini.eastday.com/mobile/20190706/2019070623_bb2edb899a8f46fa80e5f990690b3697_6923_wmk.jpg",
        container: "阿根廷已经退出了2019年美洲杯的争夺，延续着国家队无冠的记录。然而从这次征战的过程来看，还是有不少积极因素的——斯卡洛尼是一个有水平的教练，且阿根廷的新一代已经开始冒头了。根据国外评论员的观点，阿根廷甚至可以不需要梅西了，因为他的影响力已经渐渐消失。"

      }
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this
    setInterval(
      function() {
        that.setData({
          isshow: false
        })
      },
      2000
    );

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