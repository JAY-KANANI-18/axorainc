import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // e.g. mongodb+srv://user:pass@cluster/dbname
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // reuse connection in dev
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri, options);
        (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
} else {
    // new client in prod
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
