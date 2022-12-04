// 2- Crie uma função que receba um array de números
// (crie uma segunda função para validar os dados dentro do array) e
//  depois calcule a soma de  todos os valores dentro do array.
//   Execute a função mostrando na tela o seguinte
//   texto: 'A soma dos valores do array é ${(resultado)}'.

function isNumerico(valor) {
  if (valor == "number") {
    return true;
  } else {
    return false;
  }
}

function somarNumeros(array) {
  let somaValores = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (isNumerico(element)) {
      somaValores += element;
    } else {
      return "Erro";
    }
  }

  return somaValores;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado = somarNumeros(array);

alert(`A soma dos valores do array é ${resultado}`);
