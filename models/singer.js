import { HTTP } from '../utils/http.js'

class Singer extends HTTP {
      constructor () {
            super()
      }

      //获取歌手排行榜
      getTopSinger (success) {
            let params = {
                  url : 'toplist/artist',
                  success : success
            }
            this.request(params)
      }

      //获取热门歌手排行榜
      getHotSinger (success) {
            let params = {
                  url : 'top/artists',
                  data : {
                      limit : 1000
                  },
                  success : success
            }
            this.request(params)
      }

      //获取歌手单曲
      getArtists (singerid, success) {
            let params = {
                  url : 'artists',
                  data : {
                      id : singerid
                  },
                  success : success
            }
            this.request(params)
      }

      //获取歌手专辑
      getArtistAlbum (singerid, success) {
            let params = {
                  url : 'artist/album',
                  data : {
                      id : singerid,
                      limit : 100
                  },
                  success : success
            }
            this.request(params)
      }
}

export default Singer