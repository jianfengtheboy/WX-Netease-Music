import { HTTP } from '../utils/http.js'

class Video extends HTTP {
      constructor () {
            super()
      }

      //获取mv排行榜
      getVideoTop (limit, success) {
            let params = {
                  url : 'top/mv',
                  data : {
                      limit : limit
                  },
                  success : success
            }
            this.request(params)
      }

      //获取mv详情 
      getVideoDetail (videoid, success) {
            let params = {
                  url : 'mv/detail',
                  data : {
                        mvid : videoid
                  },
                  success : success
            }
            this.request(params)
      }
}

export default Video