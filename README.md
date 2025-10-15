![Booksy Screenshot](images/screenshot.png) Booksy adalah sebuah platform perpustakaan digital yang dirancang untuk memberikan akses mudah dan legal terhadap berbagai koleksi buku. Pengguna dapat menjelajahi katalog, meminjam buku, membuat daftar keinginan (wishlist), dan menikmati pengalaman membaca yang nyaman dengan antarmuka yang bersih dan responsif.

## ✨ Fitur Utama

-   **🎨 Antarmuka Modern & Responsif**: Desain yang bersih dan dapat beradaptasi dengan baik di berbagai ukuran layar, mulai dari desktop hingga perangkat mobile.
-   **🌙 Mode Gelap (Dark Mode)**: Terdapat tombol toggle untuk mengubah tema antara mode terang dan gelap, dengan preferensi yang tersimpan di browser.
-   **🔍 Pencarian Real-time**: Fitur pencarian yang dinamis untuk memfilter buku berdasarkan judul, penulis, atau genre.
-   **📚 Katalog Buku Terstruktur**: Buku dikelompokkan berdasarkan kategori untuk navigasi yang mudah.
-   **📖 Halaman Detail Buku**: Setiap buku memiliki halaman detail yang menampilkan sinopsis, genre, penerbit, dan informasi lainnya.
-   **👤 Fungsionalitas Pengguna**: Simulasi fitur pinjam buku ("My Books") dan "Wishlist".
-   **🚀 Interaksi Dinamis**: Tombol "View All" untuk menampilkan lebih banyak buku dan kartu buku yang interaktif.

## 🛠️ Teknologi yang Digunakan

-   **HTML5**: Untuk struktur dan konten halaman web.
-   **CSS3**: Untuk styling, layouting (Flexbox & Grid), dan desain responsif.
-   **JavaScript (Vanilla)**: Untuk fungsionalitas interaktif.
-   **Aset Eksternal**: Google Fonts (Poppins), Material Symbols, dan Font Awesome.

## 🚀 Cara Menjalankan Proyek

1.  **Clone repositori ini:**
    ```sh
    git clone [https://github.com/nama-user-kamu/nama-repositori-kamu.git](https://github.com/nama-user-kamu/nama-repositori-kamu.git)
    ```
2.  **Masuk ke direktori proyek:**
    ```sh
    cd nama-repositori-kamu
    ```
3.  **Buka file `index.html` di browser favoritmu.**

## 🔍 Penjelasan Kode Lengkap

Berikut adalah penjelasan mendetail mengenai struktur dan logika dari setiap file utama dalam proyek ini.

### 1. Struktur HTML

Struktur HTML proyek ini modular dan semantik. Komponen seperti `<header>` dan `<footer>` digunakan kembali di semua halaman untuk konsistensi.

-   **`index.html`**: Halaman utama (beranda). Berisi `hero-section` sebagai banner utama dan `popular-section` untuk menampilkan buku-buku unggulan. Ini adalah halaman pertama yang dilihat pengguna.

-   **`catalog.html`**: Halaman katalog utama. Strukturnya mirip dengan `index.html` namun fokus menampilkan semua buku yang dikelompokkan dalam beberapa `category-section` (seperti Novel, Self Development, dll).

-   **`detail-*.html`**: Template untuk halaman detail buku. Menggunakan layout dua kolom (`.book-detail-container`) untuk menampilkan sampul buku di satu sisi dan informasi detail (judul, sinopsis, penulis) di sisi lainnya.

-   **`mybooks.html` & `wishlist.html`**: Halaman yang menampilkan daftar buku yang dipinjam atau diinginkan. Keduanya menggunakan kembali komponen `.book-grid` dan `.book-card` yang sama seperti di halaman utama, menunjukkan efisiensi kode.

-   **`about.html` & `contact.html`**: Halaman statis. `about.html` berisi informasi tentang Booksy, sementara `contact.html` berisi sebuah `<form>` untuk pengguna mengirim pesan.

### 2. Styling (style.css)

File `style.css` adalah pusat dari seluruh tampilan visual website. Pengorganisasiannya sebagai berikut:

-   **General Styling & Setup**:
    -   **`:root`**: Di sinilah *CSS Variables* (variabel) didefinisikan (misal: `--primary-color`, `--background-color`). Ini adalah kunci utama dari fitur **Dark Mode**, karena nilai variabel ini bisa diubah dengan mudah.
    -   **`*` (Universal Selector)**: Digunakan untuk me-reset `margin`, `padding`, dan mengatur `box-sizing: border-box`, sebuah praktik standar untuk layouting yang lebih mudah.

-   **Header & Navigation (`<header>`)**:
    -   Header dibuat `position: sticky` agar selalu menempel di atas saat di-scroll.
    -   `.navbar-top` dan `.navbar-bottom` diatur menggunakan `display: flex` untuk menyusun logo, search bar, dan menu secara horizontal dan rapi.

-   **Book Cards & Grid (`.book-grid`, `.book-card`)**:
    -   **`.book-grid`**: Menggunakan `display: grid` dengan `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`. Ini adalah teknik modern untuk membuat grid yang **sepenuhnya responsif** tanpa memerlukan media query. Kartu akan secara otomatis menyesuaikan jumlah kolom berdasarkan lebar layar.
    -   **`.book-card`**: Diberi `transition` pada properti `transform` dan `box-shadow` untuk menciptakan efek *hover* yang halus saat kursor mouse diarahkan ke kartu.

-   **Dark Mode (`body.dark-mode`)**:
    -   Fitur ini bekerja dengan sangat cerdas. Saat class `dark-mode` ditambahkan ke `<body>`, CSS akan menimpa (override) nilai variabel yang ada di `:root`.
    -   Contoh: `--background-color` yang tadinya `#F2EADF` (terang) akan diubah menjadi `#161625` (gelap). Karena semua elemen menggunakan variabel ini, seluruh tema situs pun berubah secara instan.

-   **Responsive Design (`@media` queries)**:
    -   **Tablet (`@media (max-width: 992px)`)**: Ukuran layout disesuaikan untuk layar medium.
    -   **Mobile (`@media (max-width: 768px)`)**: Perubahan signifikan terjadi di sini. `.hero-section` yang tadinya berdampingan (horizontal) diubah menjadi tumpukan (vertikal) dengan `flex-direction: column`.
    -   **Small Mobile (`@media (max-width: 480px)`)**: Layout dioptimalkan lebih lanjut untuk layar kecil. `navbar-top` yang tadinya satu baris dipecah menjadi beberapa baris (`flex-direction: column`) agar semua elemen muat.

### 3. Fungsionalitas (script.js)

File `script.js` mengontrol semua interaktivitas di website. Script dieksekusi setelah seluruh halaman dimuat berkat event listener `DOMContentLoaded`.

-   **Dark Mode Logic**:
    -   Sebuah `event listener` dipasang pada tombol `#dark-mode-toggle`.
    -   Saat diklik, fungsi ini akan memeriksa apakah `<body>` sudah memiliki class `dark-mode`. Jika sudah, class itu dihapus (menjadi mode terang). Jika belum, class itu ditambahkan (menjadi mode gelap).
    -   **`localStorage.setItem('theme', 'dark'/'light')`**: Bagian ini sangat penting. Preferensi tema pengguna (`dark` atau `light`) disimpan di `localStorage` browser.
    -   Saat halaman dimuat ulang, script akan memeriksa `localStorage.getItem('theme')`. Jika nilainya 'dark', maka dark mode akan langsung diaktifkan. Ini membuat pilihan tema pengguna tetap tersimpan.

-   **"View All" Button Logic**:
    -   Script mencari semua tombol dengan class `.view-all-btn`.
    -   Saat salah satu tombol diklik, script akan mencari semua elemen `.book-card.hidden-book` yang berada di dalam section yang sama.
    -   Kemudian, class `.hidden-book` dihapus dari elemen-elemen tersebut, sehingga buku yang tadinya tersembunyi menjadi terlihat. Tombol "View All" itu sendiri lalu disembunyikan.

-   **Search Bar Logic**:
    -   Script mendengarkan event `keyup` pada `#search-input`. Artinya, fungsi akan berjalan setiap kali pengguna selesai menekan sebuah tombol keyboard.
    -   Fungsi ini mengambil teks pencarian, mengubahnya menjadi huruf kecil, lalu melakukan *looping* ke setiap `.book-card` di halaman.
    -   Untuk setiap kartu, script membandingkan teks pencarian dengan judul, penulis, dan genre buku. Jika cocok, kartu ditampilkan (`display = 'block'`). Jika tidak, kartu disembunyikan (`display = 'none'`).

-   **Event Handlers Lainnya**:
    -   Script juga menambahkan fungsi `alert()` sederhana sebagai placeholder untuk tombol "Pinjam Buku" dan "Tambah ke Wishlist".
    -   Untuk form kontak, `event.preventDefault()` digunakan pada event `submit` untuk mencegah halaman me-reload, lalu menampilkan `alert` sebagai konfirmasi.

## 👥 Tim Pengembang

Proyek ini dibuat oleh tim yang terdiri dari 3 mahasiswa program studi **D4 Manajemen Informatika, Universitas Negeri Surabaya**:

* **Danny Christian Hermawan** - `[24091397056]` 
* **Cesya Aulia Ramadhani** - `[24091397121]` 
* **Hanifah Kurnia Fa'Izah** - `[24091397124]` 
