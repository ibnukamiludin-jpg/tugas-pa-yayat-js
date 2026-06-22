const prompt = require("prompt-sync")({ sigint: true })
let jariJari = Number(prompt('Masukan jari-jari: '))
let phi = 3.14
let luas = phi * jariJari * jariJari
let keliling = 2 * phi * jariJari

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas lingkaran\t\t: ${luas.toFixed(2)} cm2`)
console.log(`Keliling lingkaran\t: ${keliling.toFixed(2)} cm`)