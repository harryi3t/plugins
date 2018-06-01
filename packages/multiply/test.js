let multiply = require('./'),
    mocha = require('mocha'),
    expect = require('chai').expect;

describe('Multiply', () => {
  it('Should work with 2 arguments', () => {
    expect(multiply(2,3)).to.be.equal(6);
  });
}); 

