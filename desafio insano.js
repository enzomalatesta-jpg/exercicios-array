
let alimentos = ["batata doce","suco","agua","guarana","pão de queijo"]
for (i = 0; i < alimentos.length; i++){
    console.log(alimentos[i])
}
alimentos.push("bolo de pote")
alimentos.shift()
alimentos[4] = "coxinha"
console.log(alimentos)
console.log(alimentos.length)

for (g = 0; 
    g < alimentos.length;
     g++){
    if (alimentos[g] == "coxinha"){
        console.log ("produto encontrado")
    }else if (g !== 'coxinha' && g == alimentos.length){
        console.log ("produto não encontrado")
    }
}