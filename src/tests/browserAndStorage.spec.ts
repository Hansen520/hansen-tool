import ToolStorage from "../storage.ts";
import { checkBrowser, detectDeviceType } from "../checkBrowser.ts";

const createLocalStorage = (): globalThis.Storage => {
  const values = new Map<string, string>();
  return {
    get length() { return values.size; },
    clear: () => values.clear(),
    getItem: (key) => values.get(key) ?? null,
    key: (index) => [...values.keys()][index] ?? null,
    removeItem: (key) => { values.delete(key); },
    setItem: (key, value) => { values.set(key, value); },
  };
};

describe("browser detection", () => {
  test("recognizes modern browser identifiers", () => {
    expect(checkBrowser("Mozilla/5.0 Chrome/120.0 Safari/537.36 Edg/120.0")).toEqual({ type: "Edge", version: 120 });
    expect(checkBrowser("Mozilla/5.0 Version/17.3 Mobile/15E148 Safari/604.1")).toEqual({ type: "Safari", version: 17.3 });
    expect(checkBrowser("custom-agent")).toEqual({ type: "Unknown", version: -1 });
  });

  test("recognizes device categories", () => {
    expect(detectDeviceType("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)")).toBe("Mobile");
    expect(detectDeviceType("Mozilla/5.0 (Windows NT 10.0; Win64; x64)")).toBe("PC");
  });
});

describe("Storage", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "localStorage", { configurable: true, value: createLocalStorage() });
  });

  afterEach(() => {
    Reflect.deleteProperty(globalThis, "localStorage");
  });

  test("stores strings and structured values", () => {
    ToolStorage.setStorage("token", "abc");
    ToolStorage.setStorage("profile", { name: "Hansen", roles: ["admin"] });
    expect(ToolStorage.getStorage("token")).toBe("abc");
    expect(ToolStorage.getStorage("profile")).toEqual({ name: "Hansen", roles: ["admin"] });
  });

  test("merges plain objects without double encoding", () => {
    ToolStorage.setStorage("profile", { name: "Hansen", active: true });
    ToolStorage.updateStorage("profile", { active: false });
    expect(ToolStorage.getStorage("profile")).toEqual({ name: "Hansen", active: false });
    expect(globalThis.localStorage.getItem("profile")).toBe('{"name":"Hansen","active":false}');
  });

  test("fails clearly when localStorage is unavailable", () => {
    Reflect.deleteProperty(globalThis, "localStorage");
    expect(() => ToolStorage.getStorage("key")).toThrow("localStorage is not available");
  });
});
