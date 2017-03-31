const request = require('supertest');
const { expect } = require('chai');
const app = require('./app.js');

describe('API', () => {
	it('get /api', () => {
		return request(app)
			.get('/api/')
			.expect(200)
			.expect('Content-type', /json/)
			.expect(res => {
				expect(res.body).to.eql(require('./data/base.json'));
			});
	});

	it('get /api/code', () => {
		return request(app)
			.get('/api/code')
			.expect(200)
			.expect('Content-type', /json/)
			.expect(res => {
				expect(res.body).to.eql(require('./data/code.json'));
			});
	});


	it('get /api/code/200', () => {
		return request(app)
			.get('/api/code/200')
			.expect(200)
			.expect('Content-type', /json/)
			.expect(res => {
				expect(res.body).to.eql(require('./data/code-200.json'));
			});
	});

	it('get /api/code/600', () => {
		return request(app)
			.get('/api/code/600')
			.expect(404);
	});

	it('put /api/code/<new code>', () => {
		return request(app)
			.put('/api/code/500')
			.send({ some: 'data'})
			.expect(201); // or 200 or something http://stackoverflow.com/questions/797834/should-a-restful-put-operation-return-something
	});
});
