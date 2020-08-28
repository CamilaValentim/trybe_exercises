let custoProduto = 200;
let valorDeVenda = 400;
let imposto = 1.2;

if(custoProduto < 0 || valorDeVenda < 0){
    console.log("valores menores que zero,inválido")
}else{
    let valorCustoTotal = custoProduto + imposto;
    let lucro = valorDeVenda - valorCustoTotal;
    console.log(lucro)
}
