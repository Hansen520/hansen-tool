import { colorHexToRgb, colorHexToRgba, colorRgbaToHex } from "../colorToTran.ts";

describe("color conversion", () => {
  test("converts valid RGB and hex colors", () => {
    expect(colorRgbaToHex("rgba(255, 0, 128, 0.5)")).toBe("#ff0080");
    expect(colorRgbaToHex("rgb(0, 16, 255)")).toBe("#0010ff");
    expect(colorHexToRgb("#0f8")).toBe("rgb(0, 255, 136)");
    expect(colorHexToRgba("#ff0080", 0.25)).toBe("rgba(255, 0, 128, 0.25)");
  });

  test("rejects malformed and out-of-range colors", () => {
    expect(() => colorRgbaToHex("rgba(256, 0, 0, 1)")).toThrow(RangeError);
    expect(() => colorRgbaToHex("rgba(0, 0, 0)")).toThrow(TypeError);
    expect(() => colorRgbaToHex("rgb(0, 0, 0, 0.5)")).toThrow(TypeError);
    expect(() => colorHexToRgb("#gggggg")).toThrow(TypeError);
    expect(() => colorHexToRgba("#ffffff", 2)).toThrow(RangeError);
  });
});
