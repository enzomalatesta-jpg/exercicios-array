
let nota = [9,9,10,5,8]
for (i = 0; i < nota.length; i++){
    if (nota[i] < 6){
        console.log("Existe nota abaixo da média")
    }else if (nota[i] > 6 && i == nota.length){
        console.log("Todas as notas estão boas")
    }
}