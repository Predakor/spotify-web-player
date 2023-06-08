import usePageColor from '@hooks/usePageColor';

function DynamicBackground() {
  const color = usePageColor() ?? 'transparent';
  return (
    <span
      className="absolute -z-50 h-[70vh] w-full transition-colors duration-300"
      style={{
        background: `linear-gradient(to bottom,${color},transparent)`,
      }}
      aria-hidden
    />
  );
}

export default DynamicBackground;
