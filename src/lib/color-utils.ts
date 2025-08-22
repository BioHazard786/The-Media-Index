/** biome-ignore-all lint/suspicious/noBitwiseOperators: bs */
function sumRGB(color: string[]) {
  return color.reduce((sum, i) => sum + Number(i), 0);
}

function parseRGBString(color: string): string[] {
  return color.slice(4, -1).split(',');
}

export function compDarkRGB(c1: string, c2: string) {
  const sum1 = sumRGB(parseRGBString(c1));
  const sum2 = sumRGB(parseRGBString(c2));
  return sum1 < sum2 ? c1 : c2;
}

export function compLightRGB(c1: string, c2: string) {
  const sum1 = sumRGB(parseRGBString(c1));
  const sum2 = sumRGB(parseRGBString(c2));
  return sum1 > sum2 ? c1 : c2;
}

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (rgbString: string) => {
  const [r, g, b] = parseRGBString(rgbString).map(Number);
  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
};
