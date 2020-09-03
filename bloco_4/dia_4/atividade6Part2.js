let soma = 0;
function somar(n) {
    for (let i = 0; i <= n; i += 1){
        soma += i;
    }
    return soma;
}
console.log(somar(5))