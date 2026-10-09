interface EmptyStateProps {
  title: string;
  hint?: string;
}

export function EmptyState({ title, hint }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <p>{title}</p>
      {hint ? <small>{hint}</small> : null}
    </div>
  );
}
