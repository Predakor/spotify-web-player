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
    <div className="grid auto-cols-fr grid-flow-col auto-rows-fr items-end gap-1">
      {renderedBars.map((bar, i) => {
        const direction = i % 2 === 0 ? 'alternate' : 'alternate-reverse';
        const _duration = bar * duration * 2;
        const delay = bar * 2 + (i % 3);
        return (
          <div
            className={'h-full rounded bg-primary text-xl text-primary'}
            style={{
              animation: `hop both infinite ${direction}`,
              animationDuration: `${_duration}ms`,
              animationDelay: `${delay}ms`,
            }}
            key={i}
          >
            .
          </div>
        );
      })}
    </div>
  );
}
export default PlaybackIndicator;
