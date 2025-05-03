import express from "express";
import cors from "cors";
import body from "body-parser";

const app = express();
let server;

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use(body.json({ limit: "100kb" }));

app.use("/recipes", require("./routes/recipes"));

async function startServer(port = 3000) {
  return new Promise((resolve, reject) => {
    try {
      server = app.listen(port, () => {
        console.log(`Service ready on :${port}`);
        resolve(server);
      });
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      reject(error);
    }
  });
}

function stop() {
  if (server) {
    console.log("Stopping server");
    server.close();
  }
}

export { app, server, startServer, stop };
