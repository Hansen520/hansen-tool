# hansen-tool
实用的工具集-tool，一款来在工具库的爱！

## 简介
特色，我们开发中一些实用的工具函数，分为二种打包模式esModule，global模式

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

`global` ，可以直接调用cdn方式进行调用

```javascrip
<script src="http://unpkg.com/hansen-tool"></script>
hansenTool.randomRgbColor();
hansenTool.Storage.setStorage(key: string, value: string)
```

## 相关函数的介绍

具体参数请参考每个函数的typescript文件

| getBetweenYearsArr    | 根据开始年和结束年获取之间的所有日期(包含开始和结束)         |
| --------------------- | ------------------------------------------------------------ |
| detectDeviceType      | 设备的判断，判断是移动端还是PC端的用户，利用header头部的userAgent |
| checkBrowser          | 判断浏览器内核                                               |
| convertFileSize       | 精准将文件大小从一个单位转换为另一个单位                     |
| formatFileSize        | 模糊匹配格式化文件大小，将字节转换为 KB、MB、GB 或 TB        |
| colorRgbaToHex        | rgba的颜色值转为Hex颜色值                                    |
| colorHexToRgb         | rgba的颜色值转为Hex颜色值                                    |
| colorHexToRgba        | rgba的颜色值转为Hex颜色值                                    |
| fileDownload          | 通过文件地址下载文件                                         |
| fileDownloadByType    | 强制修改稿响应头下载文件                                     |
| fileDownloadByRes     | 通过后端流文件形式接口下载文件                               |
| formatPrice           | 金额逗号分隔                                                 |
| priceFormat           | 格式化价格数额为字符串，例如 priceFormat(12, 4) => 0.1200    |
| getExt                | 获取文件的后缀名                                             |
| hasDuplicates         | 判断数组内是否有元素重复，如果有返回true，没有返回false      |
| phoneEncryption       | 手机号码*加密函数                                            |
| randomRgbColor        | 获取rgb随机颜色值                                            |
| randomString          | 获取随机字符串                                               |
| scrollToTop           | 滑滚动页面到顶部                                             |
| scrollToBottom        | 滚动到页面底部                                               |
| sleepFn               | 对某一个函数延迟执行, 异步                                   |
| sleep                 | 直接延迟睡眠，异步                                           |
| findParentNodeArray   | 根据递归树形菜单和目标值，获取从根节点到目标节点的路径       |
| Storage.setStorage    | 设置本地存储，设置为string类型或者为转换后的的JSON           |
| Storage.getStorage    | 获取本地存储                                                 |
| Storage.updateStorage | 更新本地存储，如果是字符串直接更新，如果是对象，则合并       |
| Storage.removeStorage | 移除某个本地存储                                             |
| Storage.clearStorage  | 清空本地存储                                                 |

## 快速使用
简单的接入文档

- [使用文件](./doc/use/PEADME.md)
- [二次开发文档](./doc/dev/README.md)

## 交流 & 提问
- 提问: https://github.com/Hansen520/hansen-tool/issues

## 关于作者
- 个人主页
- 编码不易，还望支持哦！
感觉还可以的话在github点个赞噢