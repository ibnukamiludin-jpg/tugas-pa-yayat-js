const prompt = require("prompt-sync")({ sigint: true })
let sisi = Number(prompt('Masukan sisi: '))
let volume = sisi * sisi * sisi
let luasPermukaan = 6 * sisi * sisi

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Volume kubus\t\t: ${volume.toFixed(2)} cm3`)
console.log(`Luas permukaan kubus\t: ${luasPermukaan.toFixed(2)} cm2`)