/** 隐藏 11 位手机号码的中间四位；其他输入保持不变。 */
export const phoneEncryption = (phone: string): string => {
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};
