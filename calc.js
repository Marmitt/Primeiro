'use strict';

function soma(a, b)
{
  if (a === undefined || b === undefined )
    return { message: 'parâmentos faltando'};

  if (typeof a == 'string' || typeof b == 'string')
    return { message: 'parâmentos invalidos'};

    return a + b;
}

module.exports = { soma };
