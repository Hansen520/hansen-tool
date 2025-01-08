/**
 * 手机号码*加密函数
 * @param {string} phone 电话号
 * @returns
 */
export const phoneEncryption = (phone: string) => {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
};
