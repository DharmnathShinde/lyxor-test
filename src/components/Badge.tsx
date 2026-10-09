interface BadgeProps {
  label: string;
  tone?: 'info' | 'success' | 'warning';
}

export function Badge({ label, tone = 'info' }: BadgeProps) {
  return <span className={`badge badge-${tone}`}>{label}</span>;
}
