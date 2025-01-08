/*
 * @Date: 2025-01-08 11:18:23
 * @Description: 获取文件后缀名值
 */
/**
 * @description: 获取文件的后缀名
 * @param {*} filename
 */
export const getExt = (filename: string): string => {
    return (filename.split(".").pop() as string).toLocaleLowerCase();
};