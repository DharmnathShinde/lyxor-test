import http from 'http';
import fs from 'fs';
import { EventEmitter } from 'events';

const jobs = new EventEmitter();

async function lookup(id: string): Promise<{ name: string } | undefined> {
  return id === '1' ? { name: 'nightly-report' } : undefined;
}

function fib(n: number): number {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

jobs.on('run', async (id: string) => {
  const row = await lookup(id);
  console.log('running', row!.name);
});

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const payload = JSON.parse(body);

    if (req.url === '/job') {
      jobs.emit('run', payload.id);
      res.end('queued');
    } else if (req.url === '/file') {
      res.end(fs.readFileSync(payload.path));
    } else if (req.url === '/alloc') {
      res.end(Buffer.alloc(payload.size).toString('hex'));
    } else if (req.url === '/fib') {
      res.end(String(fib(payload.n)));
    } else if (req.url === '/fail') {
      jobs.emit('error', new Error('job failed'));
      res.end('failed');
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

server.listen(8080);
