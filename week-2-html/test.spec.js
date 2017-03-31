const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const nock = require('nock');
const proxyquire = require('proxyquire');
const Response = require('node-fetch').Response;

const sinon = require('sinon');
chai.use(require('sinon-chai'));
require('sinon-as-promised');

const stubs = {
	'node-fetch': sinon.stub()
};
const app = proxyquire('./app.js', stubs);

describe('HTML serving app', () => {

	beforeEach(() => {
		const mockBody = JSON.stringify({ some: "body" });
		const mockOKResponse = new Response(mockBody);
		stubs['node-fetch'].resolves(mockOKResponse);

		// alternatively:

		// Nock has a nice API but I don't think it lets us assert that a particular url has been called.
		// I thought we might want to assert that the url for the json API was called, to provide useful error messages to the students?

		nock('http://localhost:8080')
			.get('/api/code/200')
			.reply(200, {some: "json"});
	});

	it('has a \'/\' route which accepts a parameter', () => {
		return request(app)
			.get('/200')
			.expect(200);
	});

	it('calls the api with the correct code', () => {
		return request(app)
			.get('/200')
			.expect(200)
			.expect(() => {
				expect(stubs['node-fetch']).calledWith('http://localhost:8080/api/code/200');
			});
	});

	it('returns a 404 if there is no such code in the api', () => {
		const notFound = new Response(null, { status: 404 });
		stubs['node-fetch'].resolves(notFound);

		// alternatively, with nock

		nock('http://localhost:8080')
			.get('/api/code/600')
			.reply(404);

		return request(app)
			.get('/600')
			.expect(404)
			.expect(res => {
				expect(stubs['node-fetch']).calledWith('http://localhost:8080/api/code/600');
			});
	});


	xit('renders mustache (?) templates that live in the views directory, and correctly renders the data into the view, too', () => {
		// not sure how, or whether, to test this
		expect(true).false;
	});
});
