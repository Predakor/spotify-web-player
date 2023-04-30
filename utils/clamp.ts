export function clamp(num: number, min: number, max: number) {
  if (num < min) return min;
  if (num > max) return max;
  return num;
}

export function clampArray(array: Array<any>, min: number, max: number) {
  return array.length > max ? array.slice(min, max) : array;
}
