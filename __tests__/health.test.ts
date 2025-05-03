import request from "supertest";
import { app, startServer, stop } from "../src/index";

let server;

beforeAll(async () => {
  server = await startServer(3002); // 👈 different port again
});

afterAll(() => {
  stop();
});

describe("Server health check", () => {
  it("should respond to GET /recipes", async () => {
    const response = await request(app).get("/recipes");
    expect(response.statusCode).toBeLessThan(500);
  });
});
