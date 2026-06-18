const prompt = require("prompt-sync")({ sigint: true })
let jariJari = Number(prompt('Masukan jari-jari: '))
let tinggi = Number(prompt('Masukan tinggi: '))
let garisPelukis = Number(prompt('Masukan garis pelukis: '))
let phi = 3.14
let volume = phi * jariJari * jariJari * tinggi / 3
let luasPermukaan = phi * jariJari * (jariJari + garisPelukis)

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Volume kerucut\t\t: ${volume.toFixed(2)} cm3`)
console.log(`Luas permukaan kerucut\t: ${luasPermukaan.toFixed(2)} cm2`)