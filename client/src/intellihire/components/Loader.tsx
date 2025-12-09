// client/src/intellihire/components/Loader.tsx
export default function Loader({ size = 6 }: { size?: number }) {
  const s = `${size}rem`;
  return (
    <div
      style={{ width: s, height: s }}
      className="inline-block border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
    />
  );
}
