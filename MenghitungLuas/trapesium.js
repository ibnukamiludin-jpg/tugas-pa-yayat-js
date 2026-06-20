
const prompt = require("prompt-sync")({ sigint: true })
let sisiAtas = Number(prompt('Masukan sisi atas: '))
let sisiBawah = Number(prompt('Masukan sisi bawah: '))
let tinggi = Number(prompt('Masukan tinggi: '))
let sisiKiri = Number(prompt('Masukan sisi kiri: '))
let sisiKanan = Number(prompt('Masukan sisi kanan: '))
let luas = (sisiAtas + sisiBawah) * tinggi / 2
let keliling = sisiAtas + sisiBawah + sisiKiri + sisiKanan

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas trapesium\t\t: ${luas.toFixed(2)} cm2`)
console.log(`Keliling trapesium\t: ${keliling.toFixed(2)} cm`)