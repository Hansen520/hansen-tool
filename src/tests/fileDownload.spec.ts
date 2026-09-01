import { fileDownload, fileDownloadByRes, fileDownloadByType } from "../fileDownload.ts";

describe("file download utilities", () => {
  const anchor = {
    style: { display: "" },
    target: "",
    href: "",
    download: "",
    click: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(globalThis, "document", {
      configurable: true,
      value: {
        createElement: jest.fn(() => anchor),
        body: { appendChild: jest.fn() },
      },
    });
    jest.spyOn(URL, "createObjectURL").mockReturnValue("blob:test");
    jest.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    Reflect.deleteProperty(globalThis, "document");
    Reflect.deleteProperty(globalThis, "fetch");
  });

  test("creates and removes a temporary anchor", () => {
    expect(fileDownload("https://example.com/file", "file.txt")).toBe(true);
    expect(anchor.click).toHaveBeenCalledTimes(1);
    expect(anchor.remove).toHaveBeenCalledTimes(1);
  });

  test("propagates HTTP errors", async () => {
    Object.defineProperty(globalThis, "fetch", {
      configurable: true,
      value: jest.fn().mockResolvedValue({ ok: false, status: 404 }),
    });
    await expect(fileDownloadByType("/missing", "missing.txt")).rejects.toThrow("HTTP 404");
  });

  test("always revokes generated object URLs", () => {
    anchor.click.mockImplementationOnce(() => { throw new Error("click failed"); });
    expect(() => fileDownloadByRes("file.txt", "content", "text/plain")).toThrow("click failed");
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:test");
    expect(anchor.remove).toHaveBeenCalledTimes(1);
  });
});
