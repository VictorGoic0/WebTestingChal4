const request = require("supertest");
const router = require("./router.js");

describe("router.js", () => {
  describe("GET /", () => {
    it("should respond with 200 OK", async () => {
      const response = await request(router).get("/");
      expect(response.status).toBe(200);
    });
    it("should return json", async () => {
      const response = await request(router).get("/");
      expect(response.type).toBe("application/json");
    });
  });
});
