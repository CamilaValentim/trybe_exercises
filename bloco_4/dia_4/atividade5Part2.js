let inteiroMaisRepete;
let numeroRepeticoes = 0;
let aux = 0;

function numbers(array) {
    for (let i in array) {
        for (let j in array) {
            if (array[i] === array[i]) {
                numeroRepeticoes += 1;
            }
        }
      if (numeroRepeticoes > aux) {
        aux = numeroRepeticoes;
        inteiroMaisRepete = array[i];
      }
      numeroRepeticoes = 0;
    }
    return inteiroMaisRepete;
  }
  let meuArray = [2, 3, 2, 5, 8, 2, 3];
  console.log(numbers(meuArray))