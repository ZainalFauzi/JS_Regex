var masuk = prompt("Masukkan kata :")

let check = /\d.{10,12}/;
let hasil = check.test(masuk)
if (hasil == true) {
    alert("Huruf pertama adalah huruf besar")
} else if (hasil == length > 12) {
    alert("Huruf pertama adalah huruf kecil")
}




var str = prompt("Masukkan nomor telepon");
var res = str.match(/\d{10}|\d{11}|\d{12}/);