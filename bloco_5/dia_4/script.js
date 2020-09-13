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
    if (color === 'branco') return 'rgb(255,255,255)';
    if (color === 'verde') return 'rgb(81, 208, 146)';
    if (color === 'azul') return 'rgb(0, 159, 198)';
}

selectBackgroundArticle.addEventListener('click', function() {
    let textSelect = getSelectText(selectBackgroundArticle);
    let rgbColor = getRgbColor(textSelect);
    let article = document.getElementById('article');
    article.style.backgroundColor = rgbColor;
    localStorage.setItem('cor-fundo',rgbColor);
});

colorArticle.addEventListener('click', function() {
    let textSelect = getSelectText(colorArticle);
    let rgbColor = getRgbColor(textSelect);
    let article = document.getElementById('article');
    article.style.color = rgbColor;
    localStorage.setItem('cor-text',rgbColor);
});

tamanhoDaFonte.addEventListener('click', function() {
    let textSelect = getSelectText(tamanhoDaFonte);
    let article = document.getElementById('article');
    article.style.fontSize = `${parseInt(textSelect)}px`;
    localStorage.setItem('tamanho-da-fonte',textSelect);
});

espacoEntreLinhas.addEventListener('click', function() {
    let textSelect = getSelectText(espacoEntreLinhas);
    let article = document.getElementById('article');
    article.style.lineHeight = `${parseInt(textSelect)}px`;
    localStorage.setItem('cor-text',textSelect);
});

tipoFonte.addEventListener('click', function() {
    let textSelect = getSelectText(tipoFonte);
    let article = document.getElementById('article');
    article.style.fontFamily = textSelect;
    localStorage.setItem('cor-text',textSelect);
});










/*

1 - que cor o usuario escolheu;ok
2 - qual o codigo rgb da cor escolhida; ok
3 - mudar a cor de fundo do artigo;
*/
