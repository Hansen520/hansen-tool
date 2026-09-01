export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | {
    [key: string]: JsonValue;
};
export default class Storage {
    static setStorage(key: string, value: JsonValue): void;
    static getStorage<T extends JsonValue = JsonValue>(key: string): T | string | null;
    static updateStorage(key: string, newValue: JsonValue): void;
    static removeStorage(key: string): void;
    static clearStorage(): void;
}
//# sourceMappingURL=storage.d.ts.map