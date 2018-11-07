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
            
      }
})