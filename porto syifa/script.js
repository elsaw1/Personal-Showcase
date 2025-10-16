// ======== DARK MODE TOGGLE =========
const darkBtn = document.getElementById("darkModeBtn");
if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Ubah teks tombol sesuai mode
    if (document.body.classList.contains("dark-mode")) {
      darkBtn.textContent = "Light Mode";
    } else {
      darkBtn.textContent = "Dark Mode";
    }
  });
}

// ======== FORM VALIDASI DAN NOTIFIKASI =========
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const notif = document.getElementById("notif");

    if (nama === "" || email === "" || pesan === "") {
      notif.textContent = "Semua kolom wajib diisi!";
      notif.style.color = "red";
    } else {
      notif.textContent = "Pesan berhasil dikirim ✅";
      notif.style.color = "green";
      form.reset();
    }
  });
}

// ======== SEMBUNYIKAN / TAMPILKAN FOTO =========
const sembunyikan = document.getElementById("sembunyikanFoto");
const tampilkan = document.getElementById("tampilkanFoto");
const foto = document.getElementById("fotoProfil");

if (sembunyikan && tampilkan && foto) {
  sembunyikan.addEventListener("click", () => {
    foto.style.display = "none";
  });

  tampilkan.addEventListener("click", () => {
    foto.style.display = "block";
  });
}