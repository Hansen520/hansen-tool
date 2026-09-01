import { randomNum, randomRange, randomRgbColor, randomString } from "../randomValue.ts";
import { sleep, sleepFn } from "../sleep.ts";

describe("random utilities", () => {
  afterEach(() => jest.restoreAllMocks());

  test("uses the full RGB range", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.999999);
    expect(randomRgbColor()).toBe("rgb(255,255,255)");
  });

  test("validates ranges, lengths, and arrays", () => {
    expect(randomString(0)).toBe("");
    expect(() => randomString(-1)).toThrow(RangeError);
    expect(randomRange(3, 3)).toBe(3);
    expect(() => randomRange(4, 3)).toThrow(RangeError);
    expect(() => randomRange(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toThrow(RangeError);
    expect(() => randomNum([])).toThrow(RangeError);
    expect(randomNum(["only"])).toBe("only");
  });
});

describe("sleep utilities", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test("resolves after the configured delay", async () => {
    const callback = jest.fn();
    const result = sleepFn(10, callback);
    await jest.advanceTimersByTimeAsync(10);
    await expect(result).resolves.toBe(true);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("rejects callback errors and invalid delays", async () => {
    const result = sleepFn(0, () => { throw new Error("callback failed"); });
    const rejection = expect(result).rejects.toThrow("callback failed");
    await jest.advanceTimersByTimeAsync(0);
    await rejection;
    expect(() => sleep(-1)).toThrow(RangeError);
    expect(() => sleep(2_147_483_648)).toThrow(RangeError);
  });
});
