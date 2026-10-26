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

## Catatan Penting

- Kode di dalam `p2-siakad-mini/` **sengaja ditulis buruk**. Jangan dijadikan contoh gaya
  penulisan kode. Tugas Anda adalah menemukan pelanggarannya dan memperbaikinya.
- **Jangan** mengerjakan langsung di repositori ini. Salin ke repositori kelompok Anda
  sendiri, lalu kerjakan di sana. Riwayat commit di repositori kelompok adalah bukti
  kontribusi individu yang dinilai saat UAS.
- Repositori ini **satu arah**: tidak menerima *pull request* maupun permintaan akses *push*.
  Memperbaiki pelanggaran di sini justru menghapus soalnya untuk mahasiswa lain.
- Menemukan kekeliruan yang sebenarnya — perintah tidak jalan, berkas hilang, petunjuk keliru
  (**bukan** pelanggaran yang disengaja)? Sampaikan lewat kanal kelas atau langsung ke dosen
  pengampu, bukan lewat *issue* di repositori ini.

---

## Lisensi

Materi pengajaran. Bebas dipakai dan diadaptasi untuk keperluan pendidikan dengan mencantumkan sumber.
