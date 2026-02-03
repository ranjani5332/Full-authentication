const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://Ranju:Ranju123@cluster0.tkggh2b.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with Stable API
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client
    await client.connect();

    // Ping to confirm connection
    await client.db("admin").command({ ping: 1 });

    console.log("✅ Pinged your deployment. Successfully connected to MongoDB!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  } finally {
    // Close client
    await client.close();
  }
}

run();