const stringX = (parametro) => {
    let phrase = "Tryber x aqui! Minhas principais habilidades são:";
    phrase = phrase.replace("x", parametro);
    return phrase;
};

const array = ["JavaScript", "HTML"];

let functionString = stringX("Bebeto");

const segundaFunction = (array, functionString) => {
    array = array.sort();
    const string = `${functionString} ${array}.`;
    return string;
};

console.log(segundaFunction(array, functionString));