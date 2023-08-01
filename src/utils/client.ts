import { MongoClient } from "mongodb";

let mongoURI: string | undefined = process.env.MONGODB_URI;

if (!mongoURI) {
  throw new Error("MongoDB URI not defined in environment variables.");
}

export const client: MongoClient = new MongoClient(mongoURI);
