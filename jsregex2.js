//SOAL 2------------------------------------------
var masuk = prompt("Masukkan nomor telepon :")

let check = /^\d{10,12}$/;
let hasil = check.test(masuk)
if (hasil == true) {
    alert("Nomor telepon anda telah di validasi")
} else {
    alert("Nomor telepon yang anda masukkan salah")
}
//----------------------------------------------------