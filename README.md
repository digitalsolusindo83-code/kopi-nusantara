# Landing Page Kopi Nusantara

Landing page UMKM untuk **Kopi Nusantara**, usaha kedai kopi dengan gaya **Modern Premium** dan palet warna cokelat kopi serta krem.

## Teknologi
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3 (CDN)
- Tanpa database / backend

## Cara menjalankan
1. Ekstrak file ZIP.
2. Buka folder `kopi-nusantara-landing-page`.
3. Klik dua kali `index.html`, atau jalankan dengan ekstensi Live Server di Visual Studio Code.
4. Pastikan koneksi internet tersedia agar Bootstrap dan Google Fonts dari CDN dapat dimuat.

## Struktur folder
```text
kopi-nusantara-landing-page/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero-coffee.svg
    ├── coffee-beans.svg
    ├── espresso.svg
    ├── latte.svg
    ├── manual-brew.svg
    └── cafe-interior.svg
```

## Bagian halaman
- Navigasi responsif
- Hero / halaman utama
- Cerita dan filosofi kedai
- Kutipan brand
- Kartu menu dan harga contoh
- Pengalaman suasana kedai
- Informasi kontak dan tombol WhatsApp
- Footer dengan tahun otomatis

## Kustomisasi
Edit `index.html` untuk mengganti nama, deskripsi, alamat, jam operasional, harga menu, dan nomor kontak.

Edit `css/style.css` untuk mengganti warna pada variabel CSS di bagian `:root`:
- `--coffee`: cokelat kopi utama
- `--coffee-2`: cokelat sekunder
- `--cream`: krem utama
- `--gold`: aksen keemasan

Edit `js/script.js`, ubah `whatsappNumber` menjadi nomor WhatsApp kedai dalam format internasional tanpa tanda `+`, spasi, atau tanda hubung. Contoh Indonesia: `6281234567890`.

## Catatan
- Semua gambar dalam folder `images` adalah ilustrasi SVG lokal sehingga tetap tersedia tanpa layanan gambar eksternal.
- Harga, alamat, jam buka, dan nomor WhatsApp pada project ini merupakan data contoh dan perlu diganti sebelum website dipublikasikan.
- Bootstrap dan Google Fonts menggunakan CDN, sehingga memerlukan koneksi internet.
