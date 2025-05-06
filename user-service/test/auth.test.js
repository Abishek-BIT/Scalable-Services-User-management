import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';  // Path to your Express app
const { should } = chai;     // Destructure 'should' from chai

chai.use(chaiHttp);

describe('User Service API', () => {
  it('should return a 200 status for the root route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
