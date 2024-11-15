// Untuk login

/* Only for reference */

// function loginUser(event) {
//     event.preventDefault();  // Cegah pengiriman form default
//     // Simpan status login di localStorage
//     localStorage.setItem('isLoggedIn', 'true');
//     // Redirect ke halaman homepage
//     window.location.href = 'homepage.html';
// }

// // Untuk Sign up
// // Cek status login saat halaman dimuat
// if (localStorage.getItem('isLoggedIn') !== 'true') {
//     // Jika belum login, redirect ke halaman login
//     window.location.href = 'index.html';
// }

// function logoutUser() {
//     // Hapus status login dari localStorage
//     localStorage.removeItem('isLoggedIn');
//     // Redirect ke halaman login
//     window.location.href = 'index.html';
// }

const inputBoxes = document.querySelectorAll(".input-box");

inputBoxes.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1) {
      if (index < inputBoxes.length - 1) {
        inputBoxes[index + 1].focus();
      }
    } else if (input.value.length === 0) {
      // Check if input is empty
      if (index > 0) {
        // If not the first input box
        inputBoxes[index - 1].focus();
      }
    }
  });
});


// supaya ga bisa balik lagi ke homepage tanpa login/register terlebih dahulu
function goBack() {

  //if history ada (lebih dari 1) maka akan kembali ke halaman sebelumnya, misal user loginnya lewat login.html
  if(window.history.length > 1) {
    window.history.back();   
  } else {
    //misal user masuknya langsung di project.html/ga ada history dari page apa dia sebelumnya
    window.location.href = "index.html";
  }
  

}