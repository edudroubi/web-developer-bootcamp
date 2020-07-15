function printElement(array) {
  console.log(array);
}

function printReverse(array) {
  array.reverse();
  array.forEach(printElement);
}

let isUniform = array => array.every(value => value === array[0]);

function sumArray(array) {
  var num = array.reduce( function(acumulador, valor, indice, lista) {
    return acumulador + valor;
  });

  return num;
}

function max(array) {
  var num = array.reduce( function(acumulador, valor) {
    return Math.max(acumulador, valor);
  });

  return num;
}