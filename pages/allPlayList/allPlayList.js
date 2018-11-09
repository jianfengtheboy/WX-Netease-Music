// pages/allPlayList/allPlayList.js
import Discover from '../../models/discover.js'
let discover = new Discover()

Page({

      /**
       * 页面的初始数据
       */
      data: {
            recommendSongList: [],
            playListHighQuality: []
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            var _this = this
            discover.getPersonalized((data) => {
                  this.setData({
                        recommendSongList: data.result
                  })
            })
            discover.getPlaylistHighQuality((data) => {
                  this.setData({
                        playListHighQuality: data.playlists
                  })
            })
      },

      //点击歌单获取详情
      goPlayList: function (e) {
            wx.navigateTo({
                  url: '../../pages/playList/playList?playlistid=' + e.detail.playlistid,
            })
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