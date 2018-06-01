let add = require('./'),
    expect = require('chai').expect;

describe('Add', () => {
  it('Should work with 2 arguments', () => {
    expect(add(1,2)).to.be.equal(3);
  });
}); 

