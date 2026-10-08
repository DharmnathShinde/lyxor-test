export function Comment({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function ExternalLink({ url, label }: { url: string; label: string }) {
  return (
    <a href={url} target="_blank">
      {label}
    </a>
  );
}
