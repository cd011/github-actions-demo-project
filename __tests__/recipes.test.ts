import request from "supertest";
import { app, startServer, stop } from "../src/index";

let server;

beforeAll(async () => {
  server = await startServer(3001); // 👈 use a different port
});

afterAll(() => {
  stop();
});

describe("Recipes API Endpoints", () => {
  test("GET /recipes/:id", async () => {
    const res = await request(app).get("/recipes/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toBeTruthy();
    expect(res.body.data.id).toBeTruthy();
    expect(res.body.data.title).toBeTruthy();
    expect(res.body.data.ingredients).toBeTruthy();
    expect(res.body.data.instructions).toBeTruthy();
    expect(res.body.data.image).toBeTruthy();
  });
});
