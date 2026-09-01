export const FILE_SIZE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] as const;
export type FileSizeUnit = (typeof FILE_SIZE_UNITS)[number];

const assertNonNegativeFinite = (value: number, name: string): void => {
  if (!Number.isFinite(value)) throw new TypeError(`${name} must be a finite number`);
  if (value < 0) throw new RangeError(`${name} cannot be negative`);
};

export const convertFileSize = (
  size: number,
  fromUnit: FileSizeUnit,
  toUnit: FileSizeUnit,
  decimalPoint = 2,
): string => {
  assertNonNegativeFinite(size, "size");
  if (!Number.isInteger(decimalPoint) || decimalPoint < 0 || decimalPoint > 100) {
    throw new RangeError("decimalPoint must be an integer between 0 and 100");
  }
  const fromIndex = FILE_SIZE_UNITS.indexOf(fromUnit);
  const toIndex = FILE_SIZE_UNITS.indexOf(toUnit);
  if (fromIndex === -1 || toIndex === -1) {
    throw new TypeError("fromUnit and toUnit must be valid file size units");
  }
  const resultSize = size / 1024 ** (toIndex - fromIndex);
  return `${Number.parseFloat(resultSize.toFixed(decimalPoint))} ${toUnit}`;
};

export const formatFileSize = (sizeInBytes: number): string => {
  assertNonNegativeFinite(sizeInBytes, "sizeInBytes");
  if (sizeInBytes === 0) return "0 Bytes";

  const units = ["Bytes", ...FILE_SIZE_UNITS.slice(1)] as const;
  const exponent = Math.min(Math.floor(Math.log(sizeInBytes) / Math.log(1024)), units.length - 1);
  return `${(sizeInBytes / 1024 ** exponent).toFixed(2)}${units[exponent]}`;
};
