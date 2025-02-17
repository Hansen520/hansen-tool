const convertCurrency = (money) => {
  // 汉字的数字
  const cnNumbers = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  // 基本单位
  const cnIntRadice = ['', '拾', '佰', '仟'];
  // 对应整数部分扩展单位
  const cnIntUnits = ['', '万', '亿', '兆'];
  // 对应小数部分单位
  const cnDecUnits = ['角', '分', '毫', '厘'];
  // 整数金额时后面跟的字符
  const cnInteger = '整';
  // 整型完以后的单位
  const cnIntLast = '元';
  // 最大处理的数字
  const maxNum = 999999999999999.9999;
  // 金额整数部分
  let integerNum;
  // 金额小数部分
  let decimalNum;
  // 输出的中文金额字符串
  let chineseStr = '';
  // 分离金额后用的数组，预定义
  let parts;

  // 1.超出预定数字
  if (money > maxNum || money < 0) {
    // 超出最大处理数字
    return '超出最大或最小处理数字';
  }

  if (money === 0) {
    chineseStr = cnNumbers[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  // 转换为字符串
  // eslint-disable-next-line @iceworks/best-practices/recommend-polyfill
  const moneyStr = money.toString();
  // 判断有无小数点部分
  if (moneyStr.indexOf('.') === -1) {
    integerNum = moneyStr;
    decimalNum = '';
  } else {
    parts = moneyStr.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    const IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      const n = integerNum.substr(i, 1);
      const p = IntLen - i - 1;
      const q = p / 4;
      const m = p % 4;
      if (n === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNumbers[0];
        }
        // 归零
        zeroCount = 0;
        // eslint-disable-next-line radix
        chineseStr += cnNumbers[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  // 小数部分
  if (decimalNum !== '') {
    const decLen = decimalNum.length;
    for (let j = 0; j < decLen; j++) {
      const n = decimalNum.substr(j, 1);
      if (n !== '0') {
        chineseStr += cnNumbers[Number(n)] + cnDecUnits[j];
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNumbers[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
};


const result = convertCurrency(12345);
console.log(result);
