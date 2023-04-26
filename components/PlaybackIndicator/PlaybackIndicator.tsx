import { clamp } from '@utils/clamp';

interface Props {
  bars?: number;
  duration?: number;
}
function PlaybackIndicator({ bars = 5, duration = 10 }: Props) {
  const renderedBars = new Array(bars);

  for (let i = 0; i < bars; i++) {
    const rand = Math.floor(Math.random() * 60 + 30);
    renderedBars[i] = clamp(rand, 40, 80);
  }

  return (
    <div className="flex aspect-square h-full flex-1 items-end gap-2 overflow-clip ">
      {renderedBars.map((bar, i) => (
        <div
          className={`w-6 flex-shrink bg-green-600`}
          style={{
            height: `${bar}%`,
            animation: 'hop both infinite alternate',
            animationDuration: `${bar * duration * 2}ms`,
            animationDelay: `${bar}ms`,
          }}
          key={i}
        />
      ))}
    </div>
  );
}
export default PlaybackIndicator;