function logout() {
    // Kirim permintaan ke server untuk logout
    fetch("/logout.php") // Ganti dengan endpoint logout yang sesuai
        .then(response => {
            // Ganti halaman saat ini dengan halaman login dan hapus seluruh riwayat
            window.location.replace("/index.html");

            // Menghapus seluruh riwayat sebelumnya secara terus-menerus agar tombol "back" tidak berfungsi
            history.pushState(null, null, "/index.html");
            window.addEventListener('popstate', function(event) {
                // Set ulang state riwayat ketika pengguna menekan tombol "back"
                history.pushState(null, null, "/index.html");
            });
        })
        .catch(error => {
            console.error('Logout error:', error);
        });
}