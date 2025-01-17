/*
 * @Date: 2025-01-17 14:02:05
 * @Description: description
 */
import { getExt } from '../getExt.ts';
    
test('ext abc.txt', () => {
    expect(getExt('abc.txt')).toBe('txt')
});

test('ext xxx.JSON', () => {
    expect(getExt('xxx.JSON')).toBe('json');    
});

test('xxx.yy.Png', () => {
    expect(getExt('xxx.yy.Png')).toBe('png');    
});