import { msToStringValues } from '@utils/time';

function TotalPlayTime({ timeMS }: { timeMS: number }) {
  if (timeMS < 60000) return null;

  const playlistDuration = () => {
    const { hours, minutes } = msToStringValues(timeMS);
    if (!hours && !minutes) return null;
    const displayerHours = hours ? `${hours}hr` : '';
    const displayerMinutes = minutes ? `${minutes}min` : '';
    return `${displayerHours} ${displayerMinutes}`;
  };
  const totalDuration = playlistDuration();

  return <p>{totalDuration}</p>;
}
export default TotalPlayTime;
