/*
 * @Date: 2025-01-08 11:21:19
 * @Description: 文件下载
 */
/**
 * @description: 通过文件地址下载文件
 * @param {*} href 下载路径
 * @param {*} fileName 文件名
 */
export const fileDownload = (href: string, fileName: string) => {
  const a = document.createElement("a");
  a.style.display = "none";
  a.setAttribute("target", "_self");
  fileName && a.setAttribute("download", fileName);
  a.href = href;
  a.setAttribute("href", href);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return true;
};

/**
 * @description: 强制修改稿响应头下载文件
 * @param {*} url 下载路径
 * @param {*} fileName 文件名
 */
export const fileDownloadByType = (url: string, fileName: string) => {
  fetch(url, {
    method: "get",
  })
    .then((res) => {
      if (res.status !== 200) {
        return res.json();
      }
      return res.arrayBuffer();
    })
    .then((blobRes) => {
      // 生成 Blob 对象，设置 type 等信息
      const e = new Blob([blobRes], {
        type: "application/octet-stream",
      }); // 将arrayBuffer转为blob对象
      const link = window.URL.createObjectURL(e); // 将 Blob 对象转为 url
      const a = document.createElement("a");
      a.href = link;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(link);
    })
    .catch((err) => {
      console.error(err);
    });
};

/**
 * @description: 通过后端接口下载文件
 * @param {*} filename 文件名
 * @param {*} blobContent 后端返回二进制流数据
 * @param {*} type 文件类型
 *
 */
export const fileDownloadByRes = (
  filename: string,
  blobContent: any,
  type = "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
) => {
  const blob = new Blob([blobContent], { type: `application/${type};charset=utf-8` });
  // 获取heads中的filename文件名
  const downloadElement = document.createElement("a");
  // 创建下载的链接
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  // 下载后文件名
  downloadElement.download = filename;
  document.body.appendChild(downloadElement);
  // 点击下载
  downloadElement.click();
  // 下载完成移除元素
  document.body.removeChild(downloadElement);
  // 释放掉blob对象
  window.URL.revokeObjectURL(href);
};