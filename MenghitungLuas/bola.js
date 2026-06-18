const prompt = require("prompt-sync")({ sigint: true })
let jariJari = Number(prompt('Masukan jari-jari: '))
let phi = 3.14
let volume = 4 * phi * jariJari * jariJari * jariJari / 3
let luasPermukaan = 4 * phi * jariJari * jariJari

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Volume bola\t\t: ${volume.toFixed(2)} cm3`)
console.log(`Luas permukaan bola\t: ${luasPermukaan.toFixed(2)} cm2`)