const prompt = require("prompt-sync")({ sigint: true })
let alas = Number(prompt('Masukan alas: '))
let tinggi = Number(prompt('Masukan tinggi: '))
let sisi1 = Number(prompt('Masukan  sisi1: '))
let sisi2 = Number(prompt('masukan sisi2: ') )
let luas = alas * tinggi /2
let keliling = sisi1 * sisi2



console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas prismaSegitiga\t\t: ${luas.toFixed(2)} cm2`)
console.log(`tinggi PrismaSegitiga\t: ${tinggi.toFixed(2)} cm`)
console.log(`keliling PrismaSegitiga\t: ${keliling.toFixed(2)} cm`)