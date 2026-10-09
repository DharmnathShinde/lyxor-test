interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {items.map((c, i) => (
          <li key={c.href} aria-current={i === items.length - 1 ? 'page' : undefined}>
            <a href={c.href}>{c.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
