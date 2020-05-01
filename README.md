## node爬取数据接口与ECharts实现的全国疫情数据分布图

### 运行项目
  + 切换到`server`目录安装相关依赖
  ```
  npm install
  ```
  +  跑起后台接口
  ```
  node app.js
  ```
  + 运行`index.html`

### node爬取数据接口
+ 使用`superagent`和`cheerio`技术
```js
// 模拟浏览器向网站发送请求
const superagent = require("superagent");
// 服务器端的 jQuery，相当于 html中的 jQuery
const cheerio = require("cheerio");
```
+ 爬取步骤如下：
1. 要爬取的地址：丁香园
2. 去解析 `html`字符串从里面提取对应的疫情数据
3. 使用正则表达式，`unescape()`函数转编码,字符串切割或`eval`函数将代码运行
4. 用 `fs`模块写入数据到本地

### 前端
+ `axios` 发送`ajax`请求
+ `ECharts` 对数据进行可视化渲染
