const prompt = require("prompt-sync")({ sigint: true })
let panjang = Number(prompt('Masukan panjang: '))
let lebar = Number(prompt('Masukan lebar: '))
let tinggi = Number(prompt('Masukan tinggi: '))
let volume = panjang * lebar * tinggi
let luasPermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Volume balok\t\t: ${volume.toFixed(2)} cm3`)
console.log(`Luas permukaan balok\t: ${luasPermukaan.toFixed(2)} cm2`)