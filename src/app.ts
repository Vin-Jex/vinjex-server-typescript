import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import { client } from "./utils/client";
import log from "./utils/logger";

// middleware
app.use(express.json());

app
  .route("/")
  .get(async (req: Request, res: Response) => {
    try {
      await client.connect();
      const database = client.db();
      const projects = await database.collection("projects").find().toArray();

      log.info("Connected to Mongo");
      return res.status(200).json(projects);
    } catch (err) {
      log.error("Error connecting to Mongo", err);
    }
  })
  .post((req: Request, res: Response) => {
    return res.json({ requestType: "POST" });
  })
  .put((req: Request, res: Response) => {
    return res.json({ requestType: "PUT" });
  });

app.listen(8080, () => {
  log.info("Server listening on port http://localhost:8080");
});
