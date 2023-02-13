export function msToText(ms: number) {
  const seconds = ms / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);

  return minutes + ':' + minutesToLeftSeconds(secondsLeft);
}

export function msToHours(ms: number) {
  const seconds = ms / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);
}

export function msToStringValues(ms: number) {
  const seconds = ms / 1000;

  if (seconds < 60) return { hours: 0, minutes: 0, seconds };

  const [minutes, secondsLeft] = divideWithRest(seconds);
  if (minutes < 60) return { hours: 0, minutes, seconds: secondsLeft };

  const [hours, minutesLeft] = divideWithRest(minutes);
  return { hours, minutes: minutesLeft, seconds: secondsLeft };
}

function divideWithRest(time: number, divide = 60) {
  if (!time) return [0, time];
  return [Math.floor(time / divide), Math.floor(time % divide)];
}

function minutesToLeftSeconds(seconds: number) {
  if (!seconds) return '00';
  if (seconds < 10) return '0' + seconds;
  return seconds.toString();
}
