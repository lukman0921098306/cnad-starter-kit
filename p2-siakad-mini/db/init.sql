CREATE TABLE IF NOT EXISTS mahasiswa (
  nim        TEXT PRIMARY KEY,
  nama       TEXT NOT NULL,
  prodi      TEXT NOT NULL,
  angkatan   INT  NOT NULL,
  ipk        NUMERIC(3,2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO mahasiswa (nim, nama, prodi, angkatan, ipk) VALUES
  ('105841100122', 'Andi Nurul Fadhilah',  'Informatika', 2022, 3.65),
  ('105841100222', 'Muh. Rizky Pratama',   'Informatika', 2022, 3.21),
  ('105841100322', 'Siti Aisyah Ramadani', 'Informatika', 2022, 3.88),
  ('105841100422', 'Ahmad Fauzan Hidayat', 'Informatika', 2022, 2.94),
  ('105841100522', 'Nur Azizah Putri',     'Informatika', 2022, 3.47)
ON CONFLICT (nim) DO NOTHING;

CREATE TABLE IF NOT EXISTS krs (
  id         BIGSERIAL PRIMARY KEY,
  nim        TEXT NOT NULL REFERENCES mahasiswa(nim),
  kode_mk    TEXT NOT NULL,
  nama_mk    TEXT NOT NULL,
  sks        INT  NOT NULL,
  semester   TEXT NOT NULL
);

INSERT INTO krs (nim, kode_mk, nama_mk, sks, semester) VALUES
  ('105841100122', 'CP6552022551', 'Cloud-Native Application Development', 3, '20261'),
  ('105841100222', 'CP6552022551', 'Cloud-Native Application Development', 3, '20261'),
  ('105841100322', 'CP6552022551', 'Cloud-Native Application Development', 3, '20261')
ON CONFLICT DO NOTHING;
