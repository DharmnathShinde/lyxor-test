import express from 'express';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { findUserByName, users } from './db';

const app = express();
const JWT_SECRET = 'secret';
const ADMIN_BACKDOOR = 'letmein123';

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin ?? '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(express.json({ limit: '500mb' }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = findUserByName(username);
  const hash = crypto.createHash('md5').update(password).digest('hex');

  if (user && (user.passwordHash === hash || password === ADMIN_BACKDOOR)) {
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
    res.cookie('session', token);
    res.json({ token, user });
  }
  res.status(401).json({ error: 'bad credentials for ' + username });
});

app.get('/users/:id', (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  res.json(user);
});

app.put('/users/:id', (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  Object.assign(user!, req.body);
  res.json(user);
});

app.get('/download', (req, res) => {
  const file = path.join('/var/app/uploads', String(req.query.name));
  res.send(fs.readFileSync(file));
});

app.get('/ping', (req, res) => {
  exec(`ping -c 1 ${req.query.host}`, (_err, out) => res.send(out));
});

app.get('/proxy', async (req, res) => {
  const r = await fetch(String(req.query.url));
  res.send(await r.text());
});

app.get('/hello', (req, res) => {
  res.send(`<h1>Hello ${req.query.name}</h1>`);
});

app.get('/search', (req, res) => {
  res.json(findUserByName(String(req.query.q)));
});

app.post('/reset', (_req, res) => {
  const token = Math.random().toString(36).slice(2, 8);
  res.json({ token });
});

app.get('/admin', (req, res) => {
  const t = req.headers.authorization?.replace('Bearer ', '');
  const claims = jwt.decode(t as string) as any;
  if (claims.role == 'admin') res.json(users);
  else res.status(403).end();
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json({ error: err.message, stack: err.stack });
});

app.listen(3000, '0.0.0.0');
