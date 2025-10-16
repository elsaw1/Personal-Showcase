# 🌐 Personal Showcase

✨ **Sistem yang Dirancang:**  
Website Profil Kelompok “Personal Showcase”

---

## Latar Belakang
Di dunia digital saat ini, kemampuan menampilkan diri secara kreatif sangat penting. Website ini dibuat sebagai portofolio kelompok yang memadukan informasi pribadi, foto, media sosial, dan portofolio masing-masing anggota dalam satu halaman interaktif. Tujuannya adalah agar pengunjung dapat mengenal kami lebih dekat, sekaligus menunjukkan kreativitas dan kemampuan kami dalam merancang website.

## 🧩 Deskripsi Sistem

Website ini menampilkan informasi pribadi setiap anggota kelompok dalam satu platform terpadu.  
Setiap anggota memiliki **halaman profil** berisi:

- Deskripsi diri  
- Foto pribadi  
- Tautan media sosial  
- Tautan ke portofolio pribadi  

Sistem ini dikembangkan menggunakan **HTML, CSS, dan JavaScript** untuk menciptakan tampilan yang **interaktif, responsif, dan mudah digunakan**.  
Tujuannya adalah membantu pengguna mengenal identitas serta karya dari setiap anggota kelompok dengan cara yang menarik dan modern.

---

## 🎯 Tujuan

Website ini dibuat untuk:

1. Menyediakan wadah digital yang menampilkan identitas dan karya setiap anggota kelompok.  
2. Melatih kemampuan dalam **merancang dan mengembangkan website dinamis** dengan HTML, CSS, dan JavaScript.  
3. Menjadi media latihan dalam pembuatan **portofolio pribadi berbasis web**.  
4. Memudahkan pengunjung dalam mengakses informasi dan karya anggota kelompok secara terstruktur.

---

## 👥 Target Pengguna

Website ini ditujukan untuk:

- 🧑‍🏫 **Dosen dan penguji** mata kuliah *Pemrograman Web* sebagai bentuk evaluasi hasil belajar.  
- 💼 **Calon rekan kerja atau recruiter** yang ingin mengenal profil dan portofolio anggota kelompok.  
- 🎓 **Mahasiswa lain** yang mencari inspirasi untuk membuat website portofolio pribadi.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Deskripsi |
|------------|------------|
| **HTML5** | Struktur dasar halaman web |
| **CSS3** | Desain visual dan tata letak halaman |
| **JavaScript** | Interaktivitas dan animasi pada elemen halaman |

---

## 📸 Cuplikan Tampilan Website 
![Tampilan Website](assets/Tampilan%20Keseluruhan%20Website%20Personal%20Showcase.png)

---

## 🧩 1. Struktur HTML 

Struktur halaman web disusun secara **semantik** dan **terorganisir**, agar mudah dipahami baik oleh manusia maupun mesin pencari (SEO-friendly).  
Berikut elemen utama yang digunakan:

- `<header>` → berisi logo dan navigasi utama situs.  
- `<nav>` → menampung menu menuju setiap profil anggota.  
- `<main>` → area utama yang menampilkan konten profil.  
- `<section>` → menampilkan informasi tiap anggota (foto, deskripsi, dan tautan).  
- `<footer>` → berisi hak cipta serta tautan tambahan.  

Struktur ini memastikan halaman mudah di-*maintain* dan mengikuti standar HTML5.

---

## 🎨 2. Desain CSS 

Semua gaya tampilan diimplementasikan langsung di dalam file index.html menggunakan elemen <style>.
Pendekatan ini dipilih untuk menyederhanakan struktur proyek dan memastikan semua komponen tampil konsisten dalam satu berkas.

Konsep desain yang diterapkan:
- Layout responsif menggunakan Flexbox agar elemen menyesuaikan ukuran layar.
- Palet warna lembut dan seragam untuk menjaga kesan profesional dan nyaman dilihat.
- Efek hover pada tombol dan gambar untuk menambah interaktivitas visual.
- Transisi halus agar setiap perubahan tampilan tidak terasa kaku.
- Tipografi elegan dengan font sans-serif modern untuk keterbacaan optimal.

> Seluruh aturan CSS diletakkan dalam satu blok <style> di bagian <head>, memudahkan proses modifikasi langsung saat pengembangan.

---

## 💡 3. Kreativitas dan Desain 

Desain dibuat dengan pendekatan **minimalis modern**, menonjolkan informasi utama tanpa mengorbankan estetika.  
Beberapa unsur kreatif yang diterapkan:

- Penggunaan **ikon** (Font Awesome) untuk memperjelas fungsi tombol dan tautan.  
- **Animasi masuk (fade-in)** pada saat halaman dimuat untuk kesan dinamis.  
- Tata letak bersih dan proporsional dengan kontras warna yang seimbang.  
- Tema warna senada dengan identitas kelompok.  

> Desain ini tidak hanya fokus pada keindahan visual, tetapi juga pada *user experience* agar pengguna merasa mudah berinteraksi.

---

## 📘 4. Dokumentasi dan SRS 

### 📄 **Software Requirement Specification (SRS)**

**a. Pendahuluan**  
Website ini dirancang sebagai media untuk memperkenalkan profil anggota kelompok dalam bentuk digital interaktif.  

**b. Tujuan Sistem**  
Menampilkan data pribadi, portofolio, dan tautan sosial media anggota secara menarik, terintegrasi, dan mudah diakses.  

**c. Kebutuhan Fungsional**  
- Pengguna dapat melihat daftar anggota.  
- Pengguna dapat membuka halaman profil tiap anggota.  
- Navigasi dapat berfungsi di berbagai perangkat.  

**d. Kebutuhan Non-Fungsional**  
- Responsif di semua ukuran layar.  
- Waktu muat halaman cepat.  
- Tampilan konsisten di seluruh browser modern.  

**e. Desain Antarmuka**  
- Tampilan utama berisi daftar profil anggota.  
- Tiap kartu profil menampilkan nama, deskripsi, dan tautan media sosial.  
- Warna dominan: putih dan biru muda dengan aksen lembut.  

---

## ⚙️ 5. Fungsionalitas JavaScript
Fungsi interaktif juga ditempatkan langsung di dalam file index.html menggunakan elemen <script> di bagian bawah halaman.
Pendekatan ini menjaga situs tetap ringan dan mudah diuji tanpa perlu pemanggilan file eksternal.
Fitur JavaScript yang diterapkan:
- Menu Hamburger untuk navigasi pada perangkat mobile.
- Event Listener yang merespons klik pengguna dan menambah dinamika halaman.
- Animasi sederhana seperti efek buka-tutup menu dan perubahan ikon.
- Efek Fade-in on Scroll, dimana elemen muncul perlahan saat halaman dimuat atau saat pengguna menggulir halaman
- Smooth Scrolling Navigation, dimana pengguna dapat berpindah antarbagian halaman dengan efek gulir lembut tanpa memuat ulang halaman.

> Dengan menempatkan JavaScript langsung di index.html, seluruh logika interaktif terintegrasi penuh dalam satu file, sehingga memudahkan pengujian dan pengembangan cepat.


## 🚀 Cara Menjalankan
Akses website di link berikut https://elsaw1.github.io/Personal-Showcase/
