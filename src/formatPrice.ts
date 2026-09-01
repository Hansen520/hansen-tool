const MAX_CURRENCY = 999_999_999_999_999.9999;
const CN_NUMBERS = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"] as const;
const CN_RADICES = ["", "拾", "佰", "仟"] as const;
const CN_SECTION_UNITS = ["", "万", "亿", "兆"] as const;
const CN_DECIMAL_UNITS = ["角", "分", "毫", "厘"] as const;

/** 使用千位分隔符格式化非负金额。 */
export const formatPrice = (value = 0, decimal = 2): string => {
  if (!Number.isFinite(value)) throw new TypeError("value must be a finite number");
  if (value < 0) throw new RangeError("value cannot be negative");
  if (!Number.isInteger(decimal) || decimal < 0 || decimal > 100) {
    throw new RangeError("decimal must be an integer between 0 and 100");
  }

  const [integer, fraction] = value.toFixed(decimal).split(".");
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction === undefined ? formattedInteger : `${formattedInteger}.${fraction}`;
};

const convertSection = (section: number): string => {
  let result = "";
  let unitIndex = 0;
  let pendingZero = false;
  while (section > 0) {
    const digit = section % 10;
    if (digit === 0) {
      if (result !== "") pendingZero = true;
    } else {
      const zero = pendingZero ? CN_NUMBERS[0] : "";
      result = `${CN_NUMBERS[digit]}${CN_RADICES[unitIndex]}${zero}${result}`;
      pendingZero = false;
    }
    unitIndex += 1;
    section = Math.floor(section / 10);
  }
  return result;
};

const convertInteger = (integer: number): string => {
  if (integer === 0) return CN_NUMBERS[0];
  let result = "";
  let sectionIndex = 0;
  let needsZero = false;
  while (integer > 0) {
    const section = integer % 10_000;
    if (section !== 0) {
      const zero = needsZero ? CN_NUMBERS[0] : "";
      result = `${convertSection(section)}${CN_SECTION_UNITS[sectionIndex]}${zero}${result}`;
    }
    needsZero = section === 0 || section < 1_000;
    sectionIndex += 1;
    integer = Math.floor(integer / 10_000);
  }
  return result;
};

/** 将非负金额转换为中文大写，最多保留四位小数。 */
export const convertCurrency = (money: number): string => {
  if (!Number.isFinite(money)) throw new TypeError("money must be a finite number");
  if (money < 0 || money > MAX_CURRENCY) return "超出最大或最小处理数字";

  const [integerPart, decimalPart = ""] = money.toString().split(".");
  const integer = Number(integerPart);
  const decimals = decimalPart.slice(0, CN_DECIMAL_UNITS.length);
  let result = `${convertInteger(integer)}元`;
  let pendingZero = false;
  let hasDecimalValue = false;

  for (let index = 0; index < decimals.length; index++) {
    const digit = Number(decimals[index]);
    if (digit === 0) {
      if (hasDecimalValue || integer > 0) pendingZero = true;
      continue;
    }
    if (pendingZero) result += CN_NUMBERS[0];
    result += `${CN_NUMBERS[digit]}${CN_DECIMAL_UNITS[index]}`;
    pendingZero = false;
    hasDecimalValue = true;
  }
  return hasDecimalValue ? result : `${result}整`;
};
