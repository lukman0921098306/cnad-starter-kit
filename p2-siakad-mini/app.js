// =====================================================================
//  SIAKAD mini — APLIKASI CONTOH UNTUK PRAKTIKUM 2
//
//  ⚠️  BERKAS INI SENGAJA DIBUAT MELANGGAR TWELVE-FACTOR APP.
//      Jangan dijadikan contoh penulisan kode yang baik.
//      Tugas Anda: temukan pelanggarannya, lalu perbaiki.
//
//  Penanda (a)..(g) dirujuk di lembar Praktikum 2 §3.
// =====================================================================

const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const app = express();
app.use(express.json({ limit: '5mb' }));

// (a) kredensial tertanam di kode
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres123',
  database: 'siakad'
});

// (b) sesi disimpan di memori proses
app.use(session({ secret: 'rahasia', resave: true, saveUninitialized: true }));

// Direktori unggahan lokal — dibuat saat start agar aplikasi tidak langsung mati
fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });

app.post('/upload', (req, res) => {
  // (c) berkas ditulis ke disk lokal kontainer
  fs.writeFileSync('./uploads/' + req.body.name, req.body.data ?? '');

  // (d) log ditulis ke berkas, bukan stdout
  tulisLog(`upload ${req.body.name}`);

  res.send('ok');
});

app.get('/profil', (req, res) => {
  // (e) state pengguna hanya ada di memori instance ini
  req.session.views = (req.session.views || 0) + 1;
  res.json({ views: req.session.views, pid: process.pid });
});

app.get('/mahasiswa/:nim', async (req, res) => {
  try {
    const r = await pool.query('SELECT * FROM mahasiswa WHERE nim = $1', [req.params.nim]);
    if (r.rowCount === 0) return res.status(404).send('tidak ditemukan');
    res.json(r.rows[0]);
  } catch (e) {
    // bonus: detail galat internal dibocorkan ke klien
    res.status(500).send(e.stack);
  }
});

// (f) hanya mengikat ke localhost — tidak bisa diakses dari luar kontainer
app.listen(3000, '127.0.0.1', () => {
  tulisLog('siakad-mini berjalan di 127.0.0.1:3000');
  console.log('siakad-mini berjalan di 127.0.0.1:3000');
});

// (g) tidak ada penanganan SIGTERM — lihat README

// ---------------------------------------------------------------------
// Penulisan log ke berkas. /var/log hanya bisa ditulis di Linux/WSL sebagai
// root; di Windows selalu gagal. Ketidakcocokan ini sendiri adalah contoh
// pelanggaran faktor X (dev/prod parity).
function tulisLog(pesan) {
  const baris = `${new Date().toISOString()} ${pesan}\n`;
  try {
    fs.appendFileSync('/var/log/siakad.log', baris);
  } catch {
    fs.mkdirSync(path.join(__dirname, 'logs'), { recursive: true });
    fs.appendFileSync(path.join(__dirname, 'logs', 'siakad.log'), baris);
  }
}
