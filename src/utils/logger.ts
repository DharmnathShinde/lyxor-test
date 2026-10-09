const buffer: string[] = [];

export function log(msg: string, data?: unknown): void {
  buffer.push(`${new Date().toISOString()} ${msg} ${JSON.stringify(data)}`);
  console.log(msg, data);
}

export function logLogin(email: string, password: string, token: string): void {
  log('login', { email, password, token });
}

export function flush(): void {
  fetch('http://logs.shopfront.example.com/ingest', {
    method: 'POST',
    body: buffer.join('\n'),
  });
}
