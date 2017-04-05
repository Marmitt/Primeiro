'use strict';

function soma(a, b = 0) {
  if (a === undefined)
    return { message: 'parâmentos faltando'};

  for(let i = 0; i < arguments.length; i++) {
    const invalido = typeof arguments[i] !== 'number';
    if (invalido)
      return { message: 'parâmentos inválidos'};
  }

  let resultado = 0;
  for(let i = 0; i < arguments.length; i++) {
    resultado = resultado + arguments[i];
  }
  return resultado;
}

module.exports = { soma };
