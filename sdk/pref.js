export default {
  init: (cb) => {
    cb()
    let performance = window.performance
    let isDomReady = false
    let isLoaded = false
    let Util = {
      getPerfData(p) {
        let data = {
          // 网络连接相关时间
          prevPage: p.fetchStart - p.navigationStart, // 上一个页面的时间
          redirect: p.redirectEnd - p.redirectStart, // 重定向时间
          dns: p.domainLookupEnd - p.domainLookupStart, //DNS查询时间
          tcp: p.connectEnd - p.connectStart, // tcp连接时间
          network: p.connectEnd - p.navigationStart, // 网络总耗时
          // 网络接收时间
          send: p.responseStart - p.requestStart, // 数据从发送到接收的时间
          receive: p.responseEnd - p.responseStart, // 接收数据时间
          request: p.responseEnd - p.requestStart, // 请求页面总耗时
          // 前端渲染总耗时
          dom: p.domComplete - p.domLoading, //dom解析时间
          loadEvent: p.loadEventEnd - p.loadEventStart, // load事件执行时间
          frontend: p.loadEventEnd - p.domLoading, // 前端渲染总时间
          //
          load: p.loadEventEnd - p.navigationStart, // 页面完全加载的时间
          domReady: p.domContentLoadedEventStart - p.navigationStart, // DOM准备时间
          interactive: p.domInteractive - p.navigationStart, // DOM可交互时间
          ttfb: p.responseStart - p.navigationStart, // 首字节时间
        }
        return data
      },
      domReady(callback) {
        if(isDomReady) return
        let timer = null
        let runCheck = () => {
          if(performance.timing.domComplete) {
            clearTimeout(timer)
            callback()
            isDomReady = true
          } else {
            timer = setTimeout(runCheck, 100)
          }
        }

        window.addEventListener('DOMContentLoaded', () => {
          runCheck()
        })
      },
      load(callback) {
      }
    }
    Util.domReady(() => {
      let prefData = Util.getPerfData(performance.timing)
      debugger
    })
    // window.addEventListener('DOMContentLoaded', () => {
    //   setTimeout(() => {
    //     let perfData = Util.getPerfData(performance.timing)
    //     debugger
    //   }, 100)
    // })
    //
    // window.addEventListener('load', () => {
    //   setTimeout(() => {
    //     let perfData = Util.getPerfData(performance.timing)
    //     debugger
    //   }, 200)
    // })
  }
}