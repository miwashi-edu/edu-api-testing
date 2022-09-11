const request = require("supertest")

afterAll(async () => { 
	await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe('When testing jest', () => {
	describe('given i have a non failing test', () => {
		it('should be one', () => {
			expect(1).toBe(1)
		})
	})

	describe('given i have a non failing test', () => {
		it('should be two', () => {
			expect(2).toBe(2)
		})
	})
})

describe('When testing jest', () => {
	describe('given i have a non failing test', () => {
		it.skip('should fail', () => {
			expect(1).toBe(2)
		})
	})
})

describe("Testing petshop", () => {
	describe('given a broken url', () => {
		it('should return status 404', () => {
			const container = request("https://petstore.swagger.io")
			container.get('/whatever')
				.expect(404)
		})
	})
})

describe("Testing petshop", () => {
	describe('given GET /', () => {
		it('should return status 200', () => {
			container = request("https://petstore.swagger.io")
			container.get('/')
				.expect('Allow', /GET/)
				.expect(200);
		})
	})
})

describe("Testing petshop", () => {
	describe('given POST /v2/pet', () => {
		it('should return status 200', () => {
			container = request("https://petstore.swagger.io")
			container.post('/v2/pet')
				.expect('Allow', /POST/)
				.expect(200);
		})
	})
})

const pet = {
	"category": {
	  "id": 0,
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

describe("Testing petshop", () => {
	describe('given POST /v2/pet', () => {
		it('should add pet', () => {
		container = request("https://petstore.swagger.io")
		container
			.post('/v2/pet')
			.send(pet)
			.set('Accept', 'application/json')
			.expect(200,/id/, function(err, res) {
				if (res.body.id.toString() < 19) {
				  throw new Error('ID too short');
				}
			})
			.expect(200,/name/)
			.expect(200,/tags/)
			.expect(200,/status/)
			.expect('Content-Type', 'application/json')
			.expect(function(err, res) {
				if (err) return done(err);
				done()
			})
		})
	})
})