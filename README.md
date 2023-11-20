# hansen-tool
实用的工具集-tool，一款来在工具库的爱！



## 简介
特色，我们开发中一些实用的工具函数，分为三种打包模式esModule，commonJs和global模式

## 安装下载

- 下载地址 https://github.com/Hansen520/hansen-tool/releases
- npm地址 npm i hansen-tool
- CDN https://unpkg.com/hansen-tool

## 使用方法

**esModule**

```javascript
import {randomRgbColor, Storage} from 'hansen-tool';
randomRgbColor();
Storage.setStorage(key: string, value: string)
```

**commonJs**

```javascript
const {randomRgbColor,Storage}  = require('hansen-tool');
randomRgbColor();
Storage.setStorage(key: string, value: string)
```

`global` ，可以直接调用cdn方式进行调用

```javascrip
<script src="http://unpkg.com/hansen-tool"></script>
hansenTool.randomRgbColor();
hansenTool.Storage.setStorage(key: string, value: string)
```

## 相关函数的介绍

`sleep(time: number, fn?: () => void)`几秒后才执行函数

`randomRgbColor()` 获取随机颜色

`formatPrice(number: number)`将金额以逗号分隔，1314520.52 => 1,314,520.52

`fileDownload(href: string, fileName: string)`文件下载(普通下载，图片等可能会直接打开页面)

`fileDownloadByType(url: string, fileName: string)`文件直接下载(修改头补请求方式)

`fileDownloadByRes(filename, blobContent, type)`通过文件流下载，请求头要额外设置下面的方式，type默认为vnd.openxmlformats-officedocument.spreadsheetml.sheet

```javascript
{
    withFullResponse: true,
    responseType: 'blob',
    ContentType: 'application/octet-stream',
}
```

`scrollToTop()`滑滚动页面到顶部

`scrollToBottom()`滚动到页面底部

`getBetweenYears(startYear: number, endYear: number)`根据开始年和结束年获取之间的所有年份(包含开始年和结束年)，返回数组

`getExt(filename: string)` 获取文件的后缀名

`checkBrowser()`判断浏览器的内核

`randomString(len: number)`获取随机字符串，len获取的长度

`randomRange(min: number, max: number)`获取min到max之间(含)的随机数

`randomNum(arr: any[])`获取数组中的随机项

`findParentNodeArray(array: any[], parentSubjectCode, period: string = "value")` 根据递归数组获取映射的路径, array为递归数据，parentSubjectCode为寻找的值，period为寻找的字段

`hasDuplicates` 查找数组内是否有重复的数组，是返回true，否返回false

```jvascript
Storage.getStorage(key: string) 获取本地存储

Storage.setStorage(key: string, value: string) 设置本地存储

Storage.updateStorage(key: string, value: string) 更新本地存储

Storage.removeStorage(key: string) 移除本地存储

Storage.clearStorage() 移除本地存储

```



## 快速使用
简单的接入文档

- [使用文件](./doc/use/PEADME.md)
- [二次开发文档](./doc/dev/README.md)

## 交流 & 提问
- 提问: https://github.com/Hansen520/hansen-tool/issues
- QQ群、微信群 (即时反馈)

## 关于作者
- 个人主页
- 编码不易，还望支持哦！
<img src="1698907738233.png" alt="Alt text" style="zoom:50%;" />