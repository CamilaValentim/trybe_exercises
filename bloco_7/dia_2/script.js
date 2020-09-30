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

//4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

/*5.Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
Ao executar o comando console.log(allLessons), 
a saída deverá ser a seguinte:*/

const clone = Object.assign({}, {lesson1 , lesson2, lesson3});
console.log(clone);

//6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
      total += obj[array[i]].numeroEstudantes;
    }
    return total;
  };
  console.log(numberStudents(clone));

//7.Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const position = (obj, number) => Object.values(obj)[number];
console.log(position(lesson1, 0));

/*8.Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir 
três parâmetros, sendo eles: 
o objeto, o nome da chave e o valor da chave*/

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
      if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));