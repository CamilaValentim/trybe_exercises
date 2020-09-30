const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1.Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir
 três parâmetros, sendo eles: o objeto a ser modificado,
 a chave que deverá ser adicionada e o valor dela.
 */
const addKeyValue = (obj, key, value) => {
    obj[key] = value;
};
addKeyValue(lesson2, 'turno', 'Manhã')
console.log(lesson2);

//2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const myKeys = (obj) => {
    const arrayMyKeys = Object.keys(obj);
    for(i in arrayMyKeys){
        console.log(`${obj[arrayMyKeys[i]]}`);
    }
}
myKeys(lesson2)

//3.Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (obj) =>  Object.keys(obj).length;
    
console.log(objectLength(lesson3));
