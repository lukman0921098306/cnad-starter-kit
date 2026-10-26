# Aturan Kontribusi

## Repositori ini tidak menerima kontribusi

Ini **bahan ajar satu arah** untuk mata kuliah Cloud-Native Application Development,
Program Studi Informatika, Universitas Muhammadiyah Makassar.

| Tindakan | Boleh? |
| --- | :-: |
| `git clone` dan menyalin isinya | ✅ |
| *Fork* untuk keperluan sendiri | ✅ |
| Mengerjakan praktikum di repositori kelompok Anda | ✅ |
| Membuka **pull request** ke repositori ini | ❌ ditutup otomatis |
| Meminta akses *push* | ❌ tidak akan diberikan |

---

## Mengapa pull request ditutup?

Kode pada `p2-siakad-mini/` **sengaja ditulis melanggar** prinsip Twelve-Factor App —
konfigurasi tertanam di kode, sesi di memori proses, log ke berkas, dan seterusnya.
Itu bukan kelalaian, melainkan bahan audit Praktikum 2.

Memperbaikinya **di sini** justru menghapus soalnya untuk mahasiswa lain. Perbaikan
adalah tugas Anda, dan harus dikerjakan di repositori kelompok Anda sendiri.

---

## Cara yang benar

```bash
git clone https://github.com/lukman0921098306/cnad-starter-kit.git
cd cnad-starter-kit/p2-siakad-mini
npm install
docker compose up -d
node app.js
```

Lalu salin isinya ke repositori kelompok Anda, buat cabang kerja, dan audit di sana:

```bash
cp -r cnad-starter-kit/p2-siakad-mini <repo-kelompok>/audit-p2
cd <repo-kelompok>
git switch -c perbaikan-12factor
```

> **Penting**: riwayat commit di repositori kelompok Anda adalah bukti kontribusi
> individu yang dinilai saat UAS. Pastikan Anda yang commit pekerjaan Anda sendiri.

---

## Menemukan kekeliruan yang sebenarnya?

Jika ada kesalahan nyata pada bahan ini — misalnya perintah yang tidak jalan, berkas
yang hilang, atau petunjuk yang keliru (**bukan** pelanggaran yang disengaja) — sampaikan
lewat:

1. Kanal kelas (LMS / grup mata kuliah), atau
2. Langsung ke dosen pengampu

Jangan lewat *issue* atau *pull request* di repositori ini.
