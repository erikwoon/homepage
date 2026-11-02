const STEP = 144;
const BASE_HUE = Math.floor(Math.random() * 360);

function Dot({ index }: { index: number }) {
  const hue = (BASE_HUE + index * STEP) % 360;
  return (
    <span
      className="dot"
      style={{ background: `oklch(var(--pastel-l) var(--pastel-c) ${hue})` }}
      aria-hidden="true"
    />
  );
}

export default Dot;
