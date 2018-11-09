import { HTTP } from '../utils/http.js'

class Music extends HTTP {
      constructor () {
            super()
      }

      //获取歌曲播放src
      getSrc (songid, success) {
            let params = {
                  url: 'song/url',
                  data : {
                        id : songid
                  },
                  success : success
            }
            this.request(params)
      }

      //获取歌曲详情
      getSongDetail (songid, success) {
            let params = {
                  url : 'song/detail',
                  data : {
                        ids : songid
                  },
                  success : success
            }
            this.request(params)
      }
}

export default Music