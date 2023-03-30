import { useEffect, useState } from 'react';

interface Props {
  initialValue: number;
  debouncedChange: (v: number) => void;
  time?: number;
  max: number;
}

function VolumeBar({ initialValue, debouncedChange, time, max }: Props) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timeoutID = setTimeout(() => debouncedChange(value), time ?? 200);
    return () => clearTimeout(timeoutID);
  }, [debouncedChange, time, value]);

  return (
    <input
      className="range range-primary range-xs"
      type="range"
      value={value}
      onChange={(e) => setValue(e.target.valueAsNumber)}
      min={0}
      max={max}
    />
  );
}
export default VolumeBar;
