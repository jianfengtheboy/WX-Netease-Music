// components/songlilst/songlilst.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            img: String,
            name: String,
            playlistid: Number,
            count: Number
      },

      /**
       * 组件的初始数据
       */
      data: {

      },

      /**
       * 组件的方法列表
       */
      methods: {
            onTap: function (event) {
                  this.triggerEvent('tapping', {
                        playlistid: this.properties.playlistid
                  })
            }
      }
})