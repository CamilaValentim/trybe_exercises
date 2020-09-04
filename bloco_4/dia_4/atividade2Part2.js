function numInteiro(array) {
    let maiorNumero = array[0];
    let maiorIndex = 0;
    for (let i = 1; i < array.length;i += 1) {
        if(array[i] > maiorNumero) {
            maiorNumero = array[i];
            maiorIndex = i;
        }
    }
    return maiorIndex

}
let meuArray = [2, 3, 6, 7, 10, 1];
console.log(numInteiro(meuArray));