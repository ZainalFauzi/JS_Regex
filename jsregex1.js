
//SOAL 1
var masuk = prompt("Masukkan kata :")

let check = /^[A-Z*]/;
let hasil = check.test(masuk)
if (hasil == true) {
    alert("Huruf pertama adalah huruf besar")
} else if (hasil == false) {
    alert("Huruf pertama adalah huruf kecil")
}
//------------------------
