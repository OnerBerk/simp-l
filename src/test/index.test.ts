import supertest from "supertest";
import {server} from "../index";

describe("Server", () => {
    const request = supertest.agent(server)
    afterAll((done) => {
        server.close(done);
    });
    it('should get /', () => {
        request.get('/').expect(200, {data: "IT Works!"})
    });
});