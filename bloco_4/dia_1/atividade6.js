let peçaDeXadrez ="cavalo"
let peça = peçaDeXadrez.toLowerCase();

switch (peça) {
    case "peão":
        console.log("O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar.");
        break;

    case "bispo":
        console.log("Movimenta-se em diagonal, não podendo pular peças intervenientes, e captura tomando o lugar ocupado pela peça adversária.");
        break;
    
    case "cavalo":
        console.log("move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. ");
        break;

    case "torre": 
        console.log("move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça"); 
        break;
    
    case "dama":
        console.log("movimentar-se quantas casas quiser ou puder, na diagonal, vertical ou horizontal, porém, apenas em um sentido em cada jogada");
        break;

    case "rei":
        console.log("mover para qualquer casa adjacente. ");
        break;

    default:
        break;
}