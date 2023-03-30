import DebouncedRange from '@components/Range/DebouncedRange';

interface Props {
  initialVolume: number;
  changeVolume: (v: number) => void;
}

function VolumeBar({ initialVolume, changeVolume }: Props) {
  return (
    <DebouncedRange
      initialValue={initialVolume}
      debouncedChange={(e) => changeVolume(e)}
      max={100}
    />
  );
}
export default VolumeBar;
