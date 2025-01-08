/**
 * @description: 根据开始年和结束年获取之间的所有日期(包含开始和结束)
 * @example getBetweenYears(2019, 2024) => [2019, 2020, 2021, 2022, 2023, 2024]
 */
export function getBetweenYearsArr(startYear: number, endYear: number) {
    const years: any = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return [...years].reverse();
}