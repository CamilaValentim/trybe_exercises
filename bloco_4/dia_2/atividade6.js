let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let numImpar = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
        numImpar += 1;
    }
}
if(numImpar != 0){
    console.log(`Existem  ${numImpar} números impares`);
}
else{
    console.log("Nenhum valor impar encontrado")
}