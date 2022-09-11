const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const HOST = process.env.HOST || "https://petstore.swagger.io"


describe("Testing petshop with chai-http", () => {
    describe('/GET /', () => {
        it('it should GET all the users', (done) => {
            chai.request(HOST)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.not.be.null
                expect(res).to.have.header('content-type', 'text/html');
                expect(res).to.be.html;
                done()
            })
        })
    })
})

const pet = {
	"category": {
	  "name": "string"
	},
	"name": "doggie",
	"photoUrls": [
	  "string"
	],
	"tags": [
	  {
		"id": 0,
		"name": "string"
	  }
	],
	"status": "available"
}

describe("Testing petshop with supertest", () => {
	describe('given POST /v2/pet', () => {
		it('should add pet', () => {
        chai.request(HOST)
			.post('/v2/pet')
			.send(pet)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res).to.have.header('content-type', 'application/json');
                expect(res).to.be.json;
                expect(res.body).to.have.property('id')
            })
		})
	})
})