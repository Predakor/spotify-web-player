export function msToText(ms: number) {
  const seconds = ms / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);

  return minutes + ':' + minutesToLeftSeconds(secondsLeft);
}

function minutesToLeftSeconds(seconds: number) {
  if (!seconds) return '00';
  if (seconds < 10) return '0' + seconds;
  return seconds.toString();
}
