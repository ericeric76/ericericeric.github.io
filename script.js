// Data biodata bisa kamu ubah di sini
const biodata = {
  nama: "Eric",
  status: "Mahasiswa | Sistem Informasi",
  NPM: "2531069",
  kampus: "Universitas Internasional Batam",
  domisili: "Batam",
  email: "25.01.eric@uib.edu"
};

// Masukkan data ke HTML
document.getElementById("nama").innerText = biodata.nama;
document.getElementById("status").innerText = biodata.status;
document.getElementById("NPM").innerText = biodata.NPM;
document.getElementById("kampus").innerText = biodata.kampus;
document.getElementById("domisili").innerText = biodata.domisili;
document.getElementById("email").innerText = biodata.email;

function toggleDarkMode() {
  const body = document.body;
  const btn = document.querySelector('.toggle-btn');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    btn.innerText = "Mode Terang";
  } else {
    btn.innerText = "Mode Gelap";
  }
}

// Animasi progress bar skill
window.addEventListener("load", () => {
  const fills = document.querySelectorAll(".fill");
  fills.forEach(fill => {
    const value = fill.getAttribute("data-skill");
    setTimeout(() => {
      fill.style.width = value + "%";
    }, 300);
  });
});

// Form kontak
const namaInput = document.getElementById("namaPengirim");
const emailInput = document.getElementById("emailPengirim");
const pesanInput = document.getElementById("pesan");

// Batas karakter
const batasNama = 60;
const batasEmail = 256;
const batasPesan = 1000;

// Batas real-time dengan notifikasi
namaInput.addEventListener("input", () => {
  if (namaInput.value.length > batasNama) {
    namaInput.value = namaInput.value.slice(0, batasNama);
    alert("Batas maksimal nama " + batasNama + " karakter!");
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.length > batasEmail) {
    emailInput.value = emailInput.value.slice(0, batasEmail);
    alert("Batas maksimal email " + batasEmail + " karakter!");
  }
});

pesanInput.addEventListener("input", () => {
  if (pesanInput.value.length > batasPesan) {
    pesanInput.value = pesanInput.value.slice(0, batasPesan);
    alert("Batas maksimal pesan " + batasPesan + " karakter!");
  }
});

// Fungsi kirim pesan dengan validasi lengkap
function kirimPesan(event) {
  event.preventDefault();

  let nama = namaInput.value.trim();
  let email = emailInput.value.trim();
  let pesan = pesanInput.value.trim();

  const emailKamu = "25.01.eric@uib.edu";

  // ❌ Nama minimal 2 karakter
  if (nama.length < 2) {
    alert("Nama harus minimal 2 karakter!");
    return;
  }

  // ❌ Email tidak boleh milik pemilik website
  if (email.toLowerCase() === emailKamu.toLowerCase()) {
    alert("Tidak bisa menggunakan email pemilik website!");
    return;
  }

  // ❌ Harus Gmail lengkap & valid
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    alert("Email harus menggunakan Gmail yang valid (contoh: contoh123@gmail.com)");
    return;
  }

  // ❌ Username Gmail minimal 6 karakter
  const username = email.split("@")[0];
  if (username.length < 6) {
    alert("Username Gmail harus minimal 6 karakter!");
    return;
  }

  // ❌ Pesan maksimal 1000 karakter
  if (pesan.length > batasPesan) {
    alert("Pesan terlalu panjang, maksimal " + batasPesan + " karakter!");
    return;
  }

  // ✅ Jika lolos semua validasi
  alert(
    "Pesan berhasil dikirim!\n\nNama: " + nama +
    "\nEmail: " + email +
    "\nPesan: " + pesan
  );

  // Reset form
  namaInput.value = "";
  emailInput.value = "";
  pesanInput.value = "";
}

// Smooth scroll nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    const headerHeight = document.querySelector("header").offsetHeight;
    const targetPosition = target.offsetTop - headerHeight - 10;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});


    // Hapus active semua dulu
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  ;
;

// ACTIVE NAV AUTO PAS SCROLL
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
