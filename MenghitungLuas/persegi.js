// sebelumnya install dengan perintah : npm install prompt-sync
const prompt = require ("prompt-sync")( { sigint : true});
let sisi = Number(prompt('masukan sisi:'))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("=====================") 
console.log("        HASIL         ")
console.log("----------------------")
 
console. log(
    `Luas persegi\t\t: ${luas.toFixed(2)}cm2
    Keliling Persegi\t: ${keliling.toFixed(2) }cm`)