function numInteiro(array) {
    let menorNumero = array[0];
    let menorIndex = 0;
    for (let i = 1; i < array.length;i += 1) {
        if(array[i] < menorNumero) {
            menorNumero = array[i];
            menorIndex = i;
        }
    }
    return menorIndex

}
let meuArray = [2, 4, 6, 7, 10, 0, -3];
console.log(numInteiro(meuArray));