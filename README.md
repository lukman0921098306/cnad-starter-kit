# CNAD Starter Kit

Bahan pendukung mata kuliah **Cloud-Native Application Development**
Program Studi Informatika · Universitas Muhammadiyah Makassar

---

## Isi

| Folder | Dipakai pada | Keterangan |
| --- | :-: | --- |
| [`p2-siakad-mini/`](p2-siakad-mini/) | Praktikum 2 | Aplikasi Express yang **sengaja melanggar** prinsip Twelve-Factor App, untuk bahan audit |

> Bahan untuk praktikum berikutnya akan ditambahkan menjelang pertemuannya.

---

## Cara Memakai

```bash
git clone https://github.com/lukman0921098306/cnad-starter-kit.git
cd cnad-starter-kit/p2-siakad-mini
npm install
docker compose up -d
node app.js
```

Petunjuk lengkap ada di [`p2-siakad-mini/README.md`](p2-siakad-mini/README.md).

---

## Prasyarat

| Perkakas | Versi |
| --- | --- |
| Node.js | 20 LTS |
| Docker + Docker Compose | terbaru |
| Git | terbaru |

Panduan pemasangan (WSL 2 + Windows) ada pada lembar **Praktikum 1** yang dibagikan di kelas.

---

## Kontribusi

Repositori ini **tidak menerima pull request** — lihat [CONTRIBUTING.md](CONTRIBUTING.md).
PR yang dibuka tidak akan ditinjau maupun digabungkan.

---

## Catatan Penting

- Kode di dalam `p2-siakad-mini/` **sengaja ditulis buruk**. Jangan dijadikan contoh gaya
  penulisan kode. Tugas Anda adalah menemukan pelanggarannya dan memperbaikinya.
- **Jangan** mengerjakan langsung di repositori ini. *Fork* atau salin ke repositori
  kelompok Anda sendiri, lalu kerjakan di sana.
- Pertanyaan teknis: ajukan lewat kanal kelas, bukan lewat *issue* di repositori ini.

---

## Lisensi

Materi pengajaran. Bebas dipakai dan diadaptasi untuk keperluan pendidikan dengan mencantumkan sumber.
