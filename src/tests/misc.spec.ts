import { hasDuplicates } from "../hasDuplicates.ts";
import { phoneEncryption } from "../phoneEncryption.ts";

test("hasDuplicates handles empty arrays and NaN", () => {
  expect(hasDuplicates([])).toBe(false);
  expect(hasDuplicates([Number.NaN, Number.NaN])).toBe(true);
  expect(() => hasDuplicates(null as unknown as [])).toThrow(TypeError);
});

test("phoneEncryption only masks complete 11-digit numbers", () => {
  expect(phoneEncryption("13812345678")).toBe("138****5678");
  expect(phoneEncryption("x13812345678y")).toBe("x13812345678y");
});
