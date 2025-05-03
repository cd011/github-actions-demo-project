import request from "supertest";
import { server, startServer, stop } from "../src/index";

beforeAll(async () => {
  await startServer();
});

afterAll(() => {
  stop();
});

describe("Server health check", () => {
  it("should respond to GET /recipes", async () => {
    const response = await request(server).get("/recipes");
    expect(response.statusCode).toBeLessThan(500); // or check for 200 if data is seeded
  });
});
