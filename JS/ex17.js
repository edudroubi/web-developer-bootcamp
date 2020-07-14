function isEven (num) {
  return num % 2 === 0;
}

function factorial (num) {
  if (num !== 0) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

// function fatorial (num) {
//   return num === 0 ? 1 : num * fatorial (num - 1);
// }

function kebabToSnake (str) {
  return str.replace(/-/g, '_');
}