'use strict';

const trimmer = require('../lib/trimmer');
const expect = require('chai').expect;
let body = {};

describe('trimmer test', function(){

  it('trim object body', function(done) {  
    body = {
      name: ' Kasun ',
      age: 29,
      phone: [{
        home: ' 045-222-3272 ',
        mobile: ' 071-608-0942'
      }]
    };
            
    let result = trimmer(body);
    expect(result).to.be.an('object');
    expect(result.name).to.equal('Kasun');
    expect(result.phone).to.be.an('array');
    expect(result.phone[0]['home']).to.equal('045-222-3272');
    expect(result.phone[0]['mobile']).to.equal('071-608-0942');
    done();
  });

  it('trim array body', function(done) {  

    body = [{
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
    }];              
    
    let result = trimmer(body);
    expect(result).to.be.an('array');
    expect(result[0].name).to.equal('Kasun');
    expect(result[0].phone).to.be.an('array');
    expect(result[0].phone[0]['home']).to.equal('045-222-3272');
    expect(result[0].phone[0]['mobile']).to.equal('071-608-0942');

    expect(result[1].name).to.equal('Ramadasa');
    expect(result[1].phone).to.be.an('array');
    expect(result[1].phone[0]['home']).to.equal('045-222-3272');
    expect(result[1].phone[0]['mobile']).to.equal('071-608-0942');
    done();
  });

  it('trim empty request body', function(done) {  

    body = {};            
    
    let result = trimmer(body);         
    expect(result).to.be.an('object').that.is.empty;
    done();
  });
});