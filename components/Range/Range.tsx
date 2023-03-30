interface Props {
  value: number;
  min?: number;
  max: number;
  onChange: (e: number) => void;
  disabled: boolean;
}
function Range({ min = 0, max, onChange, value, disabled }: Props) {
  return (
    <input
      className="range range-primary range-xs"
      type="range"
      value={value}
      onChange={(e) => onChange(e.target.valueAsNumber)}
      min={min}
      max={max}
      disabled={disabled}
    />
  );
}
export default Range;
