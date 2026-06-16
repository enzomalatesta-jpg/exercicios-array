
let nota = [9,9,10,5,8,3]
let acima = 0
for (i = 0; i < nota.length; i++){
    if (nota[i] >= 7){
        acima = acima + 1
    }
}
console.log("Quantidade de notas boas: "+acima)