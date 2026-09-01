export const hasDuplicates = <T>(items: readonly T[]): boolean => {
  if (!Array.isArray(items)) throw new TypeError("items must be an array");
  return new Set(items).size !== items.length;
};
