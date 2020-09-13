let article = document.getElementById('article');

window.onload = function() {
    article.style.backgroundColor = localStorage.getItem('background-color');
    article.style.color = localStorage.getItem('font-color');
    article.style.fontSize = localStorage.getItem('font-size');
    article.style.lineHeight = localStorage.getItem('line-height');
    article.style.fontFamily = localStorage.getItem('font-family');
}


let selectBackgroundArticle = document.getElementById('background-color');
let colorArticle = document.getElementById('color-font');
let tamanhoDaFonte = document.getElementById('tamanho-da-fonte');
let espacoEntreLinhas = document.getElementById('espaco-entre-linhas');
let tipoFonte = document.getElementById('tipos-de-fontes');



function getSelectText(select) {
    let text = select.options[select.selectedIndex].text;
    return text;
}

function getRgbColor(color) {
    if(color === 'preto') return 'rgb(0,0,0)';
    if (color === 'branco') return 'rgb(255,255,255)';
    if (color === 'verde') return 'rgb(81, 208, 146)';
    if (color === 'azul') return 'rgb(0, 159, 198)';
}

selectBackgroundArticle.addEventListener('click', function() {
    let textSelect = getSelectText(selectBackgroundArticle);
    let rgbColor = getRgbColor(textSelect);
    article.style.backgroundColor = rgbColor;
    localStorage['background-color'] = rgbColor;
});

colorArticle.addEventListener('click', function() {
    let textSelect = getSelectText(colorArticle);
    let rgbColor = getRgbColor(textSelect);
    article.style.color = rgbColor;
    localStorage['font-color'] = rgbColor;
});

tamanhoDaFonte.addEventListener('click', function() {
    let textSelect = getSelectText(tamanhoDaFonte);
    article.style.fontSize = `${parseInt(textSelect)}px`;
    localStorage['font-size'] = textSelect;
});

espacoEntreLinhas.addEventListener('click', function() {
    let textSelect = getSelectText(espacoEntreLinhas);
    article.style.lineHeight = `${parseInt(textSelect)}px`;
    localStorage['line-height'] = textSelect;
});

tipoFonte.addEventListener('click', function() {
    let textSelect = getSelectText(tipoFonte);
    article.style.fontFamily = textSelect;
    localStorage['font-family'] = textSelect;
});










/*

1 - que cor o usuario escolheu;ok
2 - qual o codigo rgb da cor escolhida; ok
3 - mudar a cor de fundo do artigo;
*/
