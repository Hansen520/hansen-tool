import { formatPrice } from "../formatPrice.ts";

test("formatPrice", () => {
  expect(formatPrice(0)).toBe("0.00");
  expect(formatPrice(123456789.21)).toBe("123,456,789.21");
  expect(formatPrice(20050009.21289989898)).toBe("20,050,009.21");
  expect(formatPrice(20050009.212899, 5)).toBe("20,050,009.21290");
  expect(formatPrice(20050009.212899, 7)).toBe("20,050,009.2128990");

  try {
    formatPrice(Infinity)
  } catch (err) {
    expect(err).toBeInstanceOf(Error);
  }
    
});

