import { convertCurrency } from "../formatPrice.ts";

describe("convertCurrency", () => {
  test.each([
    [0, "零元整"],
    [10, "壹拾元整"],
    [10001, "壹万零壹元整"],
    [100000001, "壹亿零壹元整"],
    [1314520.86, "壹佰叁拾壹万肆仟伍佰贰拾元捌角陆分"],
    [1.01, "壹元零壹分"],
  ])("converts %s", (value, expected) => {
    expect(convertCurrency(value as number)).toBe(expected);
  });

  test("rejects non-finite values and reports out-of-range values", () => {
    expect(() => convertCurrency(Number.NaN)).toThrow(TypeError);
    expect(convertCurrency(-1)).toBe("超出最大或最小处理数字");
  });
});
