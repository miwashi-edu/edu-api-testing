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


it('Testing to see if Jest works', () => {
	expect(1).toBe(1)
})