/*
 * @Date: 2025-01-17 16:30:53
 * @Description: description
 */
import { convertFileSize } from "../convertFileSize";


test('convertFileSize', () => {
    expect(convertFileSize(213213213, 'B', 'KB')).toBe('208216.03 KB')
    expect(convertFileSize(213213213, 'B', 'GB')).toBe('0.2 GB')
    expect(convertFileSize(213213213, 'B', 'GB', 3)).toBe('0.199 GB')
    expect(convertFileSize(2.11, 'GB', 'MB')).toBe('2160.64 MB')
});
