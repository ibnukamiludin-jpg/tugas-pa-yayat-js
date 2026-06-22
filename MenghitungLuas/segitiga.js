const prompt = require("prompt-sync")({ sigint: true })
let alas = Number(prompt('Masukan alas: '))
let tinggi = Number(prompt('Masukan tinggi: '))
let sisi1 = Number(prompt('Masukan sisi 1: '))
let sisi2 = Number(prompt('Masukan sisi 2: '))
let sisi3 = Number(prompt('Masukan sisi 3: '))
let luas = alas * tinggi / 2
let keliling = sisi1 + sisi2 + sisi3

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas segitiga\t\t: ${luas.toFixed(2)} cm2`)
console.log(`Keliling segitiga\t: ${keliling.toFixed(2)} cm`)