const fs = require('fs');
const path = require('path');
// 模拟浏览器向网站发送请求
const superagent = require("superagent");
// 服务器端的 jQuery，相当于 html中的 jQuery
const cheerio = require("cheerio");

// 1.爬取的请求地址：丁香园
const url = 'https://ncov.dxy.cn/ncovh5/view/pneumonia';
superagent.get(url)
  .then(res => {
    // console.log(res.text);  // 相应的内容
    // 2. 去解析 html字符串从里面提取对应的疫情数据
    const $ = cheerio.load(res.text);
    var $getAreaStat = $('#getAreaStat').html();
    var $getListByCountryTypeService2true = $('#getListByCountryTypeService2true').html();
    // console.log($getAreaStat);
    // 3. 使用正则表达式，unescape()函数转编码,字符串切割或 eval函数将代码运行
    var dataObj = {};  // 定义对象换掉源码的 window
    eval($getAreaStat.replace(/window/g,'dataObj'));
    eval($getListByCountryTypeService2true.replace(/window/g,'dataObj'));
    // console.log(dataObj);  // 此时该对象就有我们添加的属性了
    // 4. 用 fs模块写入数据到本地
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(dataObj),err=>{
      if(err) throw err;
      console.log('数据写入成功');
    })
  })
  .catch(err=>{
    throw err
  });
