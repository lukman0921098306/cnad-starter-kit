# SIAKAD mini — Bahan Audit Twelve-Factor (Praktikum 2)

> ⚠️ Aplikasi ini **sengaja dibuat melanggar** beberapa prinsip Twelve-Factor App.
> Jangan menyalin gayanya. Tugas Anda adalah menemukan pelanggarannya dan memperbaikinya.

Gunakan folder ini **hanya jika** Anda tidak punya proyek lama untuk diaudit.
Mengaudit proyek sendiri jauh lebih bermanfaat.

---

## Menjalankan

```powershell
cd starter/p2-siakad-mini
npm install

# Opsional: nyalakan PostgreSQL & Redis pendukung
docker compose up -d
docker compose ps

node app.js
```

Aplikasi berjalan di `http://127.0.0.1:3000`.

### Endpoint

| Metode | Path | Keterangan |
| --- | --- | --- |
| `GET` | `/profil` | Menghitung kunjungan, menyimpan di sesi |
| `POST` | `/upload` | Menyimpan berkas ke disk lokal |
| `GET` | `/mahasiswa/:nim` | Membaca dari PostgreSQL |

```powershell
# Uji cepat
Invoke-RestMethod http://127.0.0.1:3000/profil
Invoke-RestMethod http://127.0.0.1:3000/mahasiswa/105841100122
```

---

## Yang Harus Anda Kerjakan

Ikuti [Praktikum 2](../../praktikum/02-praktikum-twelve-factor.md):

1. **Tahap 1** — jalankan pemindaian otomatis (Langkah 1.2), isi matriks 12 faktor dengan bukti `berkas:baris`.
2. **Tahap 2** — pindahkan konfigurasi ke *environment*, buat `.env.example`, pastikan gagal cepat.
3. **Tahap 3** — jadikan aplikasi *stateless*; buktikan dengan dua instance berbagi sesi.
4. **Tahap 4** — perbaiki *port binding*, *graceful shutdown*, dan *logging*.
5. **Tahap 5** — review silang dengan kelompok lain.

> 💡 **Petunjuk**: penanda `(a)` sampai `(g)` di `app.js` menandai pelanggaran yang paling
> jelas. Masih ada beberapa pelanggaran lain yang **tidak** diberi penanda — temukan sendiri,
> termasuk di `package.json` dan di repositori ini secara keseluruhan.

---

## Data Contoh

`db/init.sql` dimuat otomatis oleh Compose saat volume masih kosong.

```powershell
docker compose exec db psql -U postgres -d siakad -c 'SELECT nim, nama FROM mahasiswa;'
```

Jika perlu memuat ulang dari nol:

```powershell
docker compose down -v
docker compose up -d
```

---

## Pemecahan Masalah

| Gejala | Sebab | Solusi |
| --- | --- | --- |
| `ECONNREFUSED 127.0.0.1:5432` | PostgreSQL belum jalan | `docker compose up -d` |
| `/upload` berhasil tapi log tak ditemukan | `/var/log` tidak bisa ditulis | Log jatuh ke `./logs/siakad.log` — ini sendiri temuan faktor X |
| `curl localhost:3000` gagal dari WSL ke Windows | `app.listen(..., '127.0.0.1')` | Ini **pelanggaran faktor VII** yang harus Anda perbaiki |
| `Ctrl+C` langsung mati tanpa pesan | Tidak ada penanganan `SIGTERM` | **Pelanggaran faktor IX** |
| Port 3000 dipakai | Aplikasi lain berjalan | Hentikan, atau ubah port **setelah** faktor III diperbaiki |
