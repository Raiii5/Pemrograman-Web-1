// --- 1. Efek Navbar & Animasi Scroll ---
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  reveal(); // Menjalankan fungsi reveal saat scroll
});

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach((element) => {
    const revealTop = element.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}
reveal(); // Panggil sekali saat load

// --- 2. Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// --- 3. Logika WhatsApp (Simpel & Terpusat) ---

// Nomor tujuan tetap
const OWNER_PHONE = "6285723005671";

// Fungsi umum untuk membuka WhatsApp
function openWA(text) {
  const url = `https://api.whatsapp.com/send?phone=${OWNER_PHONE}&text=${text}`;
  window.open(url, "_blank");
}

// Fungsi Pengiriman dari Halaman Contact
function sendToWhatsapp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Harap isi semua kolom contact!");
    return;
  }

  const text = `Halo Nusantara Burger!%0A%0A*PESAN BARU*%0A----------------------------%0A*Nama:* ${encodeURIComponent(
    name
  )}%0A*Email:* ${encodeURIComponent(email)}%0A*Pesan:* ${encodeURIComponent(
    message
  )}`;

  openWA(text);
}

// Fungsi Pengiriman dari Halaman Reservation
function sendReservation() {
  const name = document.getElementById("resvName").value;
  const email = document.getElementById("resvEmail").value;
  const phone = document.getElementById("resvPhone").value;
  const date = document.getElementById("resvDate").value;
  const time = document.getElementById("resvTime").value;
  const message = document.getElementById("resvMessage").value || "-";

  if (!name || !date || !time || !phone) {
    alert("Mohon lengkapi data reservasi!");
    return;
  }

  const text = `Halo Nusantara Burger!%0A%0A*RESERVASI BARU*%0A----------------------------%0A*Nama:* ${encodeURIComponent(
    name
  )}%0A*No HP:* ${encodeURIComponent(phone)}%0A*Jadwal:* ${encodeURIComponent(
    date
  )} @${encodeURIComponent(time)}%0A*Email:* ${encodeURIComponent(
    email
  )}%0A*Pesan:* ${encodeURIComponent(message)}`;

  openWA(text);
}
