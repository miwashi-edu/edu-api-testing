const request = require("supertest")

const pet = {
	"id": 0,
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
			const container = request("https://petstore.swagger.io/")
			container.get('/whatever')
				.expect(404)
		})
	})
})

describe("Testing petshop", () => {
	describe('given GET /', () => {
		it('should return status 200', () => {
			container = request("https://petstore.swagger.io/")
			container.get('/')
				.expect('Allow', /GET/)
				.expect(200);
		})
	})
})

describe("Testing petshop", () => {
	describe('given POST /v2/pet', () => {
		it('should return status 200', () => {
			container = request("https://petstore.swagger.io/")
			container.post('/v2/pet')
				.expect('Allow', /POST/)
				.expect(200);
		})
	})
})