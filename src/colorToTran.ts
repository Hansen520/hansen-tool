const HEX_COLOR_PATTERN = /^#([\da-f]{3}|[\da-f]{6})$/i;
const RGB_COLOR_PATTERN = /^(rgb|rgba)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)$/i;

const parseHex = (hex: string): [number, number, number] => {
  const match = HEX_COLOR_PATTERN.exec(hex);
  if (!match) throw new TypeError("hex must be a valid #RGB or #RRGGBB color");

  const normalized = match[1].length === 3
    ? [...match[1]].map((character) => character.repeat(2)).join("")
    : match[1];
  return [0, 2, 4].map((start) => Number.parseInt(normalized.slice(start, start + 2), 16)) as [number, number, number];
};

/** 将 rgb/rgba 颜色转换为六位十六进制颜色（忽略 alpha 通道）。 */
export const colorRgbaToHex = (color: string): string => {
  const match = RGB_COLOR_PATTERN.exec(color);
  if (!match) throw new TypeError("color must be a valid rgb() or rgba() value");

  const hasAlpha = match[5] !== undefined;
  if ((match[1].toLowerCase() === "rgba") !== hasAlpha) {
    throw new TypeError("rgb() requires three channels and rgba() requires four channels");
  }
  if (hasAlpha && (Number(match[5]) < 0 || Number(match[5]) > 1)) {
    throw new RangeError("alpha must be between 0 and 1");
  }

  const channels = match.slice(2, 5).map(Number);
  if (channels.some((channel) => channel < 0 || channel > 255)) {
    throw new RangeError("RGB channels must be between 0 and 255");
  }
  return `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
};

export const colorHexToRgb = (hex: string): string => {
  const [r, g, b] = parseHex(hex);
  return `rgb(${r}, ${g}, ${b})`;
};

export const colorHexToRgba = (hex: string, alpha = 1): string => {
  if (!Number.isFinite(alpha) || alpha < 0 || alpha > 1) {
    throw new RangeError("alpha must be between 0 and 1");
  }
  const [r, g, b] = parseHex(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
