const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
    Code.expect(soma(2, 3, 5)).to.equal(10);
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
lab.test('três parâmetros string', (done) => {
    const r = soma(0, 1, 'c');
    expect(r.message).to.equal("parâmentos inválidos")
done();
});
lab.test('com array', (done) => {
    const r = soma([1,2,3]);
    expect(r.message).to.equal("parâmentos inválidos")
    done();
});
lab.test('somando três números', (done) => {
    expect(soma(3, 3, 3)).to.equal(9);
    done();
});
lab.test('parâmetros mistos', (done) => {
    const r = soma('a', 2, 'C', [1,2,3]);
    expect(r.message).to.equal("parâmentos inválidos");
    done();
});
