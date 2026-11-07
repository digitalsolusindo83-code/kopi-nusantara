// Interaksi sederhana landing page Kopi Nusantara
document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Tutup menu navigasi setelah pengunjung memilih tautan (khusus layar mobile).
  document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      const nav = document.getElementById('mainNav');
      if (nav && nav.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Ubah nomor di tautan WhatsApp sesuai nomor kedai, gunakan format internasional tanpa + atau spasi.
  const whatsappNumber = '6281200000000';
  const whatsappMessage = encodeURIComponent('Halo Kopi Nusantara, saya ingin bertanya tentang menu kopi.');
  const whatsappLink = document.getElementById('whatsappLink');
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  }
});

