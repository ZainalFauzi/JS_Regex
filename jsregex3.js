//SOAL 3---------------------------------------------------------------
var masuk = prompt("Apa yang ingin anda cari hari ini?")

let check1 = /bagaimana|cara|memulai|usaha|bisnis/;
let check2 = /bootcamp|impact|byte/;
let check3 = /status|covid|hari|ini/
let hasil1 = check1.test(masuk)
let hasil2 = check2.test(masuk)
let hasil3 = check3.test(masuk)
if (hasil1 == true) {
    alert("Apakah anda mencari : bagaimana cara memulai usaha bisnis?")
} else if (hasil2 == true) {
    alert("Apakah anda mencari : bootcamp impact byte?")
} else if (hasil3 == true) {
    alert("Apakah anda mencari : status covid hari ini?")
} else {
    alert("Maaf pencarian tidak dapat ditemukan.")
}
//-----------------------------------------------------------------------