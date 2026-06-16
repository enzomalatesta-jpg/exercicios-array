
let num = [2,3,4,5,6,7,8,9,10]
let par = 0
for (i = 0; i < num.length; i++){
    if (num[i] % 2 === 0){
        par = par + 1
    }
}
console.log ("Há "+ par + " numeros pares")