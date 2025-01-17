import { getBetweenYearsArr } from '../betweenYear.ts';

test('years between 2022 and 2025', () => {
    expect(getBetweenYearsArr(2022, 2025)).toEqual([2025, 2024, 2023, 2022]);
});