const prompt = require("prompt-sync")({ sigint: true })
let alas = Number(prompt('Masukan alas: '))
let tinggi = Number(prompt('Masukan tinggi: '))
let sisiMiring = Number(prompt('Masukan sisi miring: '))
let luas = alas * tinggi
let keliling = 2 * (alas + sisiMiring)

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas jajar genjang\t: ${luas.toFixed(2)} cm2`)
console.log(`Keliling jajar genjang\t: ${keliling.toFixed(2)} cm`)