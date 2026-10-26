# SIAKAD mini — Bahan Audit Twelve-Factor (Praktikum 2)

> ⚠️ Aplikasi ini adalah **bahan audit**, bukan contoh kode yang baik. Jangan menyalin gayanya.

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
| `GET` | `/profil` | Menghitung kunjungan pengguna |
| `POST` | `/upload` | Menerima berkas |
| `GET` | `/mahasiswa/:nim` | Data satu mahasiswa |
| `GET` | `/krs/:nim` | Daftar mata kuliah yang diambil |

```powershell
# Uji cepat
Invoke-RestMethod http://127.0.0.1:3000/profil
Invoke-RestMethod http://127.0.0.1:3000/mahasiswa/105841100122
Invoke-RestMethod http://127.0.0.1:3000/krs/105841100122
```

---

## Yang Harus Anda Kerjakan

Ikuti [Praktikum 2](../../praktikum/02-praktikum-twelve-factor.md):

1. **Tahap 1** — jalankan pemindaian otomatis (Langkah 1.2), isi matriks 12 faktor dengan bukti `berkas:baris`.
2. **Tahap 2** — pindahkan konfigurasi ke *environment*, buat `.env.example`, pastikan gagal cepat.
3. **Tahap 3** — jadikan aplikasi *stateless*; buktikan dengan dua instance berbagi sesi.
4. **Tahap 4** — perbaiki *port binding*, *graceful shutdown*, dan *logging*.
5. **Tahap 5** — review silang dengan kelompok lain.

> Audit ini menuntut Anda membaca **seluruh** isi folder, bukan `app.js` saja — termasuk
> `package.json`, `compose.yaml`, dan berkas apa pun yang **seharusnya ada tetapi tidak ada**.

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
| `ECONNREFUSED 127.0.0.1:5432` | PostgreSQL belum jalan | `docker compose up -d`, tunggu status `healthy` |
| `/upload` berhasil tapi log tak ada di `/var/log` | Direktori itu tidak dapat ditulis | Lihat `./logs/siakad.log` — catat juga mengapa bisa berbeda |
| `curl localhost:3000` gagal dari WSL ke Windows | Alamat yang diikat proses | Jalankan `curl` dari sisi yang sama dengan proses |
| `Ctrl+C` langsung mati tanpa pesan | Perilaku bawaan proses | Catat sebagai hasil pengamatan |
| Port 3000 dipakai | Aplikasi lain berjalan | Hentikan proses tersebut |
