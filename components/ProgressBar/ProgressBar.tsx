import { ReactNode, useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  onFinish?: VoidFunction;
  onChange?: VoidFunction;
  children?: ReactNode;
}

const ProgressBar = ({
  value,
  max,
  onFinish,
  children,
  onChange,
}: ProgressBarProps) => {
  const [trackProgress, setTrackProgress] = useState(value);
  if (trackProgress >= max) onFinish && onFinish();

  useEffect(() => {
    setTrackProgress(value);
    const intervalId = setInterval(() => {
      setTrackProgress((oldProgress) => oldProgress + 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [value]);

  return (
    <div>
      <progress value={trackProgress} max={max} onChange={onChange}>
        {children}
      </progress>
    </div>
  );
};
export default ProgressBar;
export type { ProgressBarProps };
