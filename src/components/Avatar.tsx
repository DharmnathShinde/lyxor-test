interface AvatarProps {
  name: string;
  src?: string;
  size?: number;
}

export function Avatar({ name, src, size = 32 }: AvatarProps) {
  if (src) {
    return <img src={src} alt={name} width={size} height={size} className="avatar" />;
  }
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <span className="avatar" role="img" aria-label={name} style={{ width: size, height: size }}>
      {initial}
    </span>
  );
}
