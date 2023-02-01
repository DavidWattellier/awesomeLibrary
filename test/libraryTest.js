const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");


const server = setupServer();

describe("Library Test", () => {
    let request;
    let expect;
    beforeEach(()=> {
        request = chai.request(server);
        expect = chai.expect;
    })
    it("should return status 200", (done) => {
        request.get("/books").end((err, res) => {
            expect(res).to.have.status(200);
            done();
        })
    })
})