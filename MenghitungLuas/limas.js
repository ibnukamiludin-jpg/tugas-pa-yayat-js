const prompt = require ("prompt-sync")( { sigint : true});
let alas = Number(prompt('masukan alas:'))
let tinggi = Number(prompt('Masukan tinggi:'))
let sisi1 = Number(prompt('Masukan sisi1::'))
let sisi2 = Number(prompt('masukan sisi2:'))
let sisi3 = Number(prompt('masukan sisi3:'))
let luas = alas * tinggi / 2
let keliling = sisi1 * sisi2 * sisi3


console.log("=====================") 
console.log("        HASIL         ")
console.log("----------------------")

console.log(`tinggi limas\t\t: ${tinggi.toFixed(2)} cm3`)
console.log(`Luas limas\t\t: ${luas.toFixed(2)} cm2`)
console.log(`keliling limas\t\t: ${keliling.toFixed(2)} cm3`)