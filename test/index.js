var trimBody = require('../index'),
  httpMocks = require('node-mocks-http'),
  expect = require('chai').expect;
  request = {},
  response = {};

describe('Middleware test', function(){

  beforeEach(function(done) {
    response = httpMocks.createResponse();
    done();
  });

  it('trim object request body', function(done) {  

    request = httpMocks.createRequest({
      method: 'POST',
      body: {
        name: ' Kasun ',
        age: 29,
        phone: [{
          home: ' 045-222-3272 ',
          mobile: ' 071-608-0942'
        }]
      }              
    }); 
             
    trimBody(request, response, function next() {
      expect(request.body).to.be.an('object');
      expect(request.body.name).to.equal('Kasun');
      expect(request.body.phone).to.be.an('array');
      expect(request.body.phone[0]['home']).to.equal('045-222-3272');
      expect(request.body.phone[0]['mobile']).to.equal('071-608-0942');
      done();
    });
  });

  it('trim array request body', function(done) {  

    request = httpMocks.createRequest({
      method: 'POST',
      body: [{
        name: ' Kasun ',
        age: 29,
        phone: [{
          home: ' 045-222-3272 ',
          mobile: ' 071-608-0942'
        }]
      }, {
        name: ' Ramadasa ',
        age: 29,
        phone: [{
          home: ' 045-222-3272 ',
          mobile: ' 071-608-0942'
        }]
      }]              
    }); 
             
    trimBody(request, response, function next() {
      expect(request.body).to.be.an('array');
      expect(request.body[0].name).to.equal('Kasun');
      expect(request.body[0].phone).to.be.an('array');
      expect(request.body[0].phone[0]['home']).to.equal('045-222-3272');
      expect(request.body[0].phone[0]['mobile']).to.equal('071-608-0942');

      expect(request.body[1].name).to.equal('Ramadasa');
      expect(request.body[1].phone).to.be.an('array');
      expect(request.body[1].phone[0]['home']).to.equal('045-222-3272');
      expect(request.body[1].phone[0]['mobile']).to.equal('071-608-0942');
      done();
    });
  });

  it('trim empty request body', function(done) {  

    request = httpMocks.createRequest({
      method: 'POST',
      body: {}              
    }); 
             
    trimBody(request, response, function next() {
      expect(request.body).to.be.an('object').that.is.empty;
      done();
    });
  });
});