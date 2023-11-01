/*
 * @Date: 2023-09-20 11:03:39
 * @Description: description
 */
import { formatPrice } from "./index";

test("Adding 1 + 1 equals 2", () => {
  expect(formatPrice(121212.22)).toBe(121, 121.22);
});
