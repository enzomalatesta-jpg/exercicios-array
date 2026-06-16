
let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let buscando = "Coxinha";
for (i = 0; i < produtos.length; i ++){
    if (produtos[i] === buscando){
        console.log ("Produto encontrado")
    }else if (i > produtos.length && produtos[i] !== buscando){
        console.log ("produto não encotrado")
    }
}