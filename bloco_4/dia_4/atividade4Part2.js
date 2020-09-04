let nomeMaisCaracter;
let maisCaracter = 0;

function nomeComMaisCaracteres(array) {
    for (let i in array) {
        if (array[i].length > maisCaracter) {
            maisCaracter = array[i].length;
            nomeMaisCaracter = array[i];

        }
    }
    return nomeMaisCaracter
}
let meuArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(nomeComMaisCaracteres(meuArray))