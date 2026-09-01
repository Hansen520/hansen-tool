/** 根据开始年和结束年获取年份列表，结果按年份降序排列。 */
export function getBetweenYearsArr(startYear: number, endYear: number): number[] {
  if (!Number.isSafeInteger(startYear) || !Number.isSafeInteger(endYear)) {
    throw new TypeError("startYear and endYear must be safe integers");
  }
  if (startYear > endYear) return [];

  return Array.from({ length: endYear - startYear + 1 }, (_, index) => endYear - index);
}
