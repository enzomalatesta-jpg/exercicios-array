
let numeros = [1,4,23,76,75,21]
let soma = 0
for (i = 0; i < numeros.length; i++){
    if (numeros[i] > soma) {
        soma = numeros[i]
    }
}
console.log("O maior numero é : "+ soma)