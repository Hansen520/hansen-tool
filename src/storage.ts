export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

const getLocalStorage = (): globalThis.Storage => {
  if (typeof globalThis.localStorage === "undefined") {
    throw new Error("localStorage is not available in the current environment");
  }
  return globalThis.localStorage;
};

const isPlainObject = (value: unknown): value is Record<string, JsonValue> => {
  if (value === null || typeof value !== "object") return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
};

export default class Storage {
  static setStorage(key: string, value: JsonValue): void {
    if (typeof key !== "string" || key.length === 0) {
      throw new TypeError("key must be a non-empty string");
    }
    const serialized = typeof value === "string" ? value : JSON.stringify(value);
    getLocalStorage().setItem(key, serialized);
  }

  static getStorage<T extends JsonValue = JsonValue>(key: string): T | string | null {
    const value = getLocalStorage().getItem(key);
    if (value === null || value === "") return value;
    try {
      const parsed: unknown = JSON.parse(value);
      return (parsed !== null && typeof parsed === "object" ? parsed : value) as T | string;
    } catch {
      return value;
    }
  }

  static updateStorage(key: string, newValue: JsonValue): void {
    const oldValue = Storage.getStorage(key);
    if (isPlainObject(oldValue) && isPlainObject(newValue)) {
      Storage.setStorage(key, { ...oldValue, ...newValue });
      return;
    }
    Storage.setStorage(key, newValue);
  }

  static removeStorage(key: string): void {
    getLocalStorage().removeItem(key);
  }

  static clearStorage(): void {
    getLocalStorage().clear();
  }
}
