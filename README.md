# 前端监控

## 技术监控

- 页面性能监控
  - `performance.timing`
- 静态资源性能监控
    - `performance.getEntries()`
- 错误监控
- 接口性能监控

## 行为监控

- 用户行为路径
- 打点监控
  - 监控页面中功能使用频率
- `log`上报策略
- 时效策略

## `performance.timing`
页面加载时间顺序
![页面加载顺序](072455NuJ.png)

| 参数                       | 含义                       | 默认值                            | 备注        |
| -------------------------- | -------------------------- | --------------------------------- | ----------- |
| navigationStart            | 前一个网页卸载的时间       | fetchStart                        |             |
| unloadEventStart           | 前一个网页的unload事件开始 | 0                                 |             |
| unloadEventEnd             | 前一个网页的unload事件结束 | 0                                 |             |
| **Redirect**               |                            |                                   |             |
| redirectStart              | 重定向开始时间             | 0                                 | 需要同域    |
| redirectEnd                | 重定向结束时间             | 0                                 | 需要同域    |
| **App cache**              |                            |                                   |             |
| fetchStart                 | 开始请求网页               |                                   |             |
| **DNS**                    |                            |                                   |             |
| domainLookupStart          | DNS查询开始                | fetchStart                        |             |
| domainLookupEnd            | DNS查询结束                | fetchStart                        |             |
| **TCP**                    |                            |                                   |             |
| connectStart               | 向服务器建立握手开始       | fetchStart                        |             |
| (secureConnetionStart)     | https握手开始              | 0                                 | 非https没有 |
| connectEnd                 | 建立握手结束               | fetchStart                        |             |
| **Request**                |                            |                                   |             |
| requestStart               | 向服务器发送请求开始       |                                   |             |
| responseStart              | 响应式开始                 |                                   |             |
| responseEnd                | 响应结束                   |                                   |             |
| **DOM**                    |                            |                                   |             |
| domLoading                 | 解析DOM开始                | document.readyState为 loading     |             |
| domInteractive             | 解析DOM结束                | document.readyState为 interactive |             |
| DOMContentLoadedEventStart | ContentLoaded开始          |                                   |             |
| DOMContentLoadedEventEnd   | ContentLoaded结束          |                                   |             |
| domComplete                | 文档解析完成               |                                   |             |
| loadEventStart             | load事件前                 |                                   |             |
| loadEventEnd               | load事件后                 |                                   |             |


```js
Performance 
memory: MemoryInfo {totalJSHeapSize: 7740041, usedJSHeapSize: 7081361, jsHeapSizeLimit: 4294705152},
navigation: PerformanceNavigation {type: 1, redirectCount: 0},
onresourcetimingbufferfull: null
timeOrigin: 1592043218678.9648
timing: PerformanceTiming
    connectEnd: 1592043218679
    connectStart: 1592043218679
    domComplete: 1592043222527
    domContentLoadedEventEnd: 1592043222121
    domContentLoadedEventStart: 1592043222016
    domInteractive: 1592043222016
    domLoading: 1592043219082
    domainLookupEnd: 1592043218679
    domainLookupStart: 1592043218679
    fetchStart: 1592043218679
    loadEventEnd: 1592043222534
    loadEventStart: 1592043222527
    navigationStart: 1592043218677
    redirectEnd: 0
    redirectStart: 0
    requestStart: 1592043218684
    responseEnd: 1592043219406
    responseStart: 1592043219067
    secureConnectionStart: 0
    unloadEventEnd: 1592043219076
    unloadEventStart: 1592043219076
```