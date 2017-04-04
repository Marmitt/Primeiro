const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});
lab.test('retorno da soma de -5 e 6 deve ser 1', (done) => {

    Code.expect(soma(-5, 6)).to.equal(1);
    done();
});
lab.test('retorno da soma de -5 e -7 deve ser 1', (done) => {

    Code.expect(soma(-5, -7)).to.equal(-12);
    done();
});
lab.test('não passando parâmetros', (done) => {
    const r = soma();
    expect(r.message).to.equal("parâmentos faltando")
    done();
});
lab.test('Soma com 0', (done) => {

    Code.expect(soma(0, 70)).to.equal(70);
    done();
});
lab.test('Soma nada com nada', (done) => {
  const r = soma('a','b');
  expect(r.message).to.equal("parâmentos invalidos")
  done();

});
