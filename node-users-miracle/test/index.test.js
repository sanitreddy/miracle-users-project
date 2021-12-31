let index = require("../index");
let chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe('Test GET route', () => {
  it('Get users', (done) => {
    chai.request(index)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(10);
              done();
      });
  });
});