const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});
lab.test('soma de letras é igual a 0', (done) => {

    Code.expect(soma(5,d)).to.equal(5);
    done();
});
lab.test('soma de 5 número com nada é igual a 5', (done) => {

    Code.expect(soma(5, )).to.equal(5);
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
lab.test('retorno da soma de nada com nada deve ser nada', (done) => {

    Code.expect(soma(,)).to.equal();
    done();
});
