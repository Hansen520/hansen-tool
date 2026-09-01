const getDocument = (): Document => {
  if (typeof document === "undefined") {
    throw new Error("file download is only available in a browser environment");
  }
  return document;
};

const triggerDownload = (href: string, fileName?: string): void => {
  const browserDocument = getDocument();
  const anchor = browserDocument.createElement("a");
  anchor.style.display = "none";
  anchor.target = "_self";
  anchor.href = href;
  if (fileName) anchor.download = fileName;
  browserDocument.body.appendChild(anchor);
  try {
    anchor.click();
  } finally {
    anchor.remove();
  }
};

/** 通过文件地址触发浏览器下载。 */
export const fileDownload = (href: string, fileName?: string): true => {
  if (!href) throw new TypeError("href cannot be empty");
  triggerDownload(href, fileName);
  return true;
};

/** 请求远程文件并触发下载，HTTP 错误会 reject。 */
export const fileDownloadByType = async (url: string, fileName: string): Promise<void> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download file: HTTP ${response.status}`);

  const blob = new Blob([await response.arrayBuffer()], { type: "application/octet-stream" });
  const objectUrl = URL.createObjectURL(blob);
  try {
    triggerDownload(objectUrl, fileName);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
};

/** 将二进制内容转换为 Blob 并触发下载。 */
export const fileDownloadByRes = (
  filename: string,
  blobContent: BlobPart,
  type = "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
): void => {
  const mimeType = type.includes("/") ? type : `application/${type}`;
  const objectUrl = URL.createObjectURL(new Blob([blobContent], { type: `${mimeType};charset=utf-8` }));
  try {
    triggerDownload(objectUrl, filename);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
};
