var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

it('Testing to see if Jest works', () => {
expect(1).toBe(1)
})