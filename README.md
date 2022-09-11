# edu-api-testing

## Supertest


[supertest](https://www.npmjs.com/package/supertest)  
[chai-http](https://www.npmjs.com/package/chai-http)  
  
  
[Testing HTTP APIs with SuperTest](https://www.cloudbees.com/blog/testing-http-apis-supertest)  
[chai-http](https://www.chaijs.com/plugins/chai-http/)  

[Komponent Testning med supertest](https://www.youtube.com/watch?v=r5L1XRZaCR0&t=449s)  

## Instruktioner

```bash
cd ~
cd ws
mkdir edu-api-testing
cd edu-api-testing
npm init -y
npm install jest
npm install chai-http
npm install supertest
mkdir __tests__
touch ./__tests__/supertest.js
touch ./__tests__/chai-http.js
git init
touch .gitignore
git add .
git commit -m "initial commit"
code .
```

## package.json
```json
{
  "name": "edu-api-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "jest --verbose",
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/miwashiab/edu-api-testing.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/miwashiab/edu-api-testing/issues"
  },
  "homepage": "https://github.com/miwashiab/edu-api-testing#readme",
  "dependencies": {
    "chai": "^4.3.6",
    "chai-http": "^4.3.0",
    "jest": "^29.0.3",
    "supertest": "^6.2.4"
  }
}
```

## .gitignore
```bash
logs
*.log
node_modules/
.env
.env.test
```
## supertest.js

```js
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

```
