const prompt = require ("prompt-sync")( { sigint : true});
let panjang = Number(prompt('masukan panjang:'))
let lebar = Number(prompt('Masukan lebar:'))
let sisi = Number(prompt('masukan sisi:'))
let luas = lebar * panjang 
let keliling = 4 * sisi

console.log("=====================") 
console.log("        HASIL         ")
console.log("----------------------")
 
console. log(
    `Luas persegi\t\t: ${luas.toFixed(2)}cm2
    Keliling Persegi\t: ${keliling.toFixed(2) }cm`)