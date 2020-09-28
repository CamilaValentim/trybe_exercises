const longestWord = text => {
    const frase = text.split(' ');
    let maiorPalavra = '';
    for (let i = 0; i < frase.length; i += 1) {
        if (frase[i].length > maiorPalavra.length) {
            maiorPalavra = frase[i];
        }
    }
    return maiorPalavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));