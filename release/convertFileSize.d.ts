export declare const FILE_SIZE_UNITS: readonly ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
export type FileSizeUnit = (typeof FILE_SIZE_UNITS)[number];
export declare const convertFileSize: (size: number, fromUnit: FileSizeUnit, toUnit: FileSizeUnit, decimalPoint?: number) => string;
export declare const formatFileSize: (sizeInBytes: number) => string;
//# sourceMappingURL=convertFileSize.d.ts.map