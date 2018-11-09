// components/classic/music/music.js
let mMgr = wx.getBackgroundAudioManager()
const app = getApp()

Component({
      //组件的属性列表
      behaviors : [],
      properties : {
            src : {
                  type : String,
                  value : ''
            },
            name : String,
            img : String
      },

      //组件的初始数据
      data : {
            playing : false,
            waittingUrl: 'images/player@waitting.png',
            playingUrl: 'images/player@playing.png',
            touchDot: 0,
            position: Number,
            playingBg: '/images/play/playing-bg.png'
      },

      attached : function () {
            this._recoverPlaying()
            this._monitorSwitch()
      },

      ready : function () {
            this.isPlaying()
      },

      detached: function () {
            // wx.pauseBackgroundAudio()
      },

      //组件的方法列表
      methods : {
            onPlay : function (event) {
                  if (this.properties.src === 'error') {
                        wx.showToast({
                              title : '无法播放此音乐',
                              icon : 'none',
                              duration : 2000
                        })
                        return
                  }
                  if (!this.data.playing) {
                        this.setData({
                              playing : true
                        })
                        if (mMgr.src == this.properties.src) {
                              mMgr.play()


                        } else {
                              mMgr.src = this.properties.src
                        }
                        mMgr.coverImgUrl = this.properties.img
                        mMgr.title = this.properties.name
                        app.globalData.g_isPlayingMusic = true
                  } else {
                        this.setData({
                              playing : false
                        })
                        mMgr.pause()
                        app.globalData.g_isPlayingMusic = false
                  }
            },

            _recoverPlaying : function () {
                  if (mMgr.paused) {
                        this.setData({
                              playing : false
                        })
                        return
                  }
                  if (mMgr.src == this.properties.src) {
                        if (!mMgr.paused) {
                              this.setData({
                                    playing : true
                              })
                        }
                  }
            },

            _monitorSwitch : function () {
                  mMgr.onPlay(() => {
                        this._recoverPlaying()
                  })
                  mMgr.onPause(() => {
                        this._recoverPlaying()
                  })
                  mMgr.onStop(() => {
                        this._recoverPlaying()
                  })
                  mMgr.onEnded(() => {
                        this._recoverPlaying()
                  })
            },

            onTouchstart : function (e) {
                  const pageX = e.touches[0].pageX
                  this.setData({
                        touchDot : pageX
                  })
            },

            onTouchmove : function (e) {
                  let touch = e.changedTouches[0]
                  let touchMove = e.changedTouches[0].pageX
                  let deltaX = touch.pageX - this.data.touchDot
                  if (deltaX > 0) {
                        return
                  }
                  mMgr.stop()
                  mMgr.src = this.properties.src
                  mMgr.coverImgUrl = this.properties.img
                  mMgr.title = this.properties.name
                  app.globalData.g_isPlayingMusic = true
            },

            onTouched : function (e) {

            },

            isPlaying : function () {
                  if (app.globalData.g_isPlayingMusic) {
                        if (app.globalData.g_songUrl === this.properties.src) {
                              this.setData({
                                    playing : true
                              })
                        } else {
                              mMgr.pause()
                              this.setData({
                                    playing : false
                              })
                              app.globalData.g_isPlayingMusic = false
                        }
                  }
            }
      }
})