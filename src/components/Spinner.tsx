export function Spinner({ label = 'Loading' }: { label?: string }) {
  return (
    <div role="status" aria-live="polite" className="spinner">
      <span className="visually-hidden">{label}</span>
    </div>
  );
}
