const prompt = require("prompt-sync")({ sigint: true })
let diagonal1 = Number(prompt('Masukan diagonal 1: '))
let diagonal2 = Number(prompt('Masukan diagonal 2: '))
let sisi = Number(prompt('Masukan sisi: '))
let luas = diagonal1 * diagonal2 / 2
let keliling = 4 * sisi

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas belah ketupat\t: ${luas.toFixed(2)} cm2`)
console.log(`Keliling belah ketupat\t: ${keliling.toFixed(2)} cm`)