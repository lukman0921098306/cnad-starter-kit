import express from 'express';
import session from 'express-session';
import fs from 'fs';
import path from 'path';
import pg from 'pg';

const app = express();
app.use(express.json({ limit: '5mb' }));

const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres123',
  database: 'siakad'
});

app.use(session({ secret: 'rahasia', resave: true, saveUninitialized: true }));

fs.mkdirSync(path.join(import.meta.dirname, 'uploads'), { recursive: true });

app.post('/upload', (req, res) => {
  fs.writeFileSync('./uploads/' + req.body.name, req.body.data ?? '');
  tulisLog(`upload ${req.body.name}`);
  res.send('ok');
});

app.get('/profil', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.json({ views: req.session.views, pid: process.pid });
});

app.get('/mahasiswa/:nim', async (req, res) => {
  try {
    const r = await pool.query('SELECT * FROM mahasiswa WHERE nim = $1', [req.params.nim]);
    if (r.rowCount === 0) return res.status(404).send('tidak ditemukan');
    res.json(r.rows[0]);
  } catch (e) {
    res.status(500).send(e.stack);
  }
});

app.get('/krs/:nim', async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT kode_mk, nama_mk, sks, semester FROM krs WHERE nim = $1 ORDER BY kode_mk',
      [req.params.nim]
    );
    tulisLog(`krs ${req.params.nim}`);
    res.json(r.rows);
  } catch (e) {
    res.status(500).send(e.stack);
  }
});

app.listen(3000, '127.0.0.1', () => {
  tulisLog('siakad-mini berjalan di 127.0.0.1:3000');
  console.log('siakad-mini berjalan di 127.0.0.1:3000');
});

function tulisLog(pesan) {
  const baris = `${new Date().toISOString()} ${pesan}\n`;
  try {
    fs.appendFileSync('/var/log/siakad.log', baris);
  } catch {
    fs.mkdirSync(path.join(import.meta.dirname, 'logs'), { recursive: true });
    fs.appendFileSync(path.join(import.meta.dirname, 'logs', 'siakad.log'), baris);
  }
}
