# Interactive Calculator & Data Analyzer

## Konteks 

sebuah aplikasi sederhana berbasis command-line (CLI) menggunakan JavaScript. Aplikasi ini akan berfungsi sebagai:

1. Kalkulator interaktif
2. Analyzer sederhana untuk hasil perhitungan

Fokus utama bukan pada tampilan, tapi pada bagaimana menyusun logika yang rapi, robust, dan mudah dibaca.

## Checklist yang Harus Diselesaikan

1. Validasi input user (angka dan operator)
2. Implementasi operasi matematika dasar menggunakan function
3. Logic utama kalkulator menggunakan loop dan conditional
4. Analisis hasil berdasarkan tipe data dan nilai
5. Mekanisme exit dari aplikasi
6. Code yang rapi, readable, dan menggunakan 'use strict'


### 1. alur programnya:

- User akan input apa saja?
- Program harus merespon seperti apa?
- Kapan program harus berhenti?

percakapan antara user dan program.

### 2. Mengelola Input

function untuk memastikan input valid.

Beberapa hal yang perlu dipikirkan:

- Bagaimana memastikan input adalah angka?
- Bagaimana jika user memasukkan input yang salah?
- Bagaimana cara “memaksa” user untuk mengulang input sampai benar?

Gunakan:

- Number() untuk konversi tipe data
- isNaN() untuk validasi
- while loop untuk pengulangan

### 3. Operasi Matematika

Pisahkan setiap operasi ke dalam function.

Misalnya:

- penjumlahan
- pengurangan
- perkalian
- pembagian
- modulo
- pangkat

Kenapa ini penting?

Karena function membantu code lebih modular, reusable, dan mudah dibaca.

Perhatikan edge case seperti:

- Pembagian dengan nol → harus ditangani dengan jelas

### 4. Menyusun Logic Utama

loop utama `(while(true))` agar program bisa berjalan terus sampai user ingin berhenti.

Di dalam loop:

- Ambil input angka pertama
- Ambil operator
- Ambil angka kedua
- Gunakan switch untuk menentukan operasi

melatih untuk:

- Mengontrol flow program
- Menggabungkan berbagai konsep JavaScript dalam satu alur

## 5 Analisis Hasil (Bagian Paling Penting)

Setelah mendapatkan hasil, 

Analisis hasilnya:

Kalau hasil berupa _number_:

- Apakah positif, negatif, atau nol?
- Apakah integer atau desimal?
- Apakah genap atau ganjil?

Gunakan:

- typeof
- Number.isInteger()
- if / else
- ternary operator
- operator logika (&&, ||)

Kalau hasil berupa string:

- Tampilkan sebagai error message

Kalau hasil null atau undefined:

- Gunakan ?? untuk fallback message

Bagian ini penting karena melatih kalian berpikir lebih dari sekadar “kode berjalan”.

## 6 Mekanisme Exit

Setelah satu perhitungan selesai:

- Tanyakan apakah user ingin lanjut
- Jika user mengetik "no" → hentikan program

Gunakan:

- if
- break
- handling case-insensitive input

## Struktur Folder

Struktur project :

```bash
root/
    ├── index.js
    ├── readme.md
    ├── package.json
    ├── package-lock.json
    └── .gitignore
```

fokus pada:

- index.js

## Workflow yang Disarankan

- Install dependency yang diperlukan (misalnya prompt-sync)
- Pahami requirement secara menyeluruh
- Buat flow program (boleh pakai pseudocode)
- Implement input handling
- Implement operasi matematika
- Gabungkan dalam main loop
- Tambahkan analisis hasil
- Test berbagai case (valid & invalid input)

Cara Memulai

Install dependency:

`npm install`

Jalankan program:

`node index.js`
