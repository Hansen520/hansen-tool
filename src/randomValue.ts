const RANDOM_CHARACTERS = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789!@#$%^&#*";

export const randomRgbColor = (): string => {
  const channel = (): number => Math.floor(Math.random() * 256);
  return `rgb(${channel()},${channel()},${channel()})`;
};

export const randomString = (length: number): string => {
  if (!Number.isSafeInteger(length) || length < 0) {
    throw new RangeError("length must be a non-negative safe integer");
  }
  let result = "";
  for (let index = 0; index < length; index++) {
    result += RANDOM_CHARACTERS.charAt(Math.floor(Math.random() * RANDOM_CHARACTERS.length));
  }
  return result;
};

export const randomRange = (min: number, max: number): number => {
  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
    throw new TypeError("min and max must be safe integers");
  }
  if (min > max) throw new RangeError("min cannot be greater than max");
  const range = max - min + 1;
  if (!Number.isSafeInteger(range)) throw new RangeError("range is too large");
  return Math.floor(Math.random() * range) + min;
};

export const randomNum = <T>(items: readonly T[]): T => {
  if (!Array.isArray(items)) throw new TypeError("items must be an array");
  if (items.length === 0) throw new RangeError("items cannot be empty");
  return items[Math.floor(Math.random() * items.length)];
};
