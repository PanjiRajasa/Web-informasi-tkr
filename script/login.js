// Supaya ga bisa back tanpa register/login terlebih dahulu
// Menambahkan event listener pada saat halaman project1.html dimuat
window.onload = function () {
    // Menggunakan history.pushState() untuk memanipulasi riwayat halaman
    history.pushState(null, null, window.location.href);
  
    // Menambahkan event listener untuk mencegah kembali ke halaman login
    window.addEventListener("popstate", function () {
      history.pushState(null, null, window.location.href);
    });
  };