import { clamp } from './clamp';

export function idToHsl(id: string) {
  const chars = id.toLowerCase().slice(3).split('');
  const _firstNum = () => {
    const char = chars.findLast((char) => !isNaN(char as unknown as number));
    return parseInt(char ?? '5');
  };

  const _firstChar = () => {
    const char = chars.findLast((char) => typeof char === 'string');
    const charCode = (char ?? '30').charCodeAt(0);
    return Math.floor(charCode / 2);
  };

  const firstNum = _firstNum();
  const firstChar = _firstChar();
  const sum = firstNum * firstChar * 0.7;

  console.log(firstNum, firstChar);

  return [
    clamp(sum, 0, 360),
    clamp(firstNum, 60, 100),
    clamp(firstChar, 25, 55),
  ];
}
