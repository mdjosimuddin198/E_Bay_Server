const express = require("express");

const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send("🚀 Express + MongoDB (MVC) Server Running!");
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.URI_SECRET;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db("E_bay");
    const ProductsCollection = database.collection("products");

    app.get("/products", async (req, res) => {
      const data = await ProductsCollection.find().toArray();
      res.send(data);
    });

    app.get("/products/:id", async (req, res) => {
      const { id } = req.params;
      const quary = { _id: new ObjectId(id) };
      const data = await ProductsCollection.findOne(quary);
      res.send(data);
    });

    app.post("/products", async (req, res) => {
      const product = req.body;
      const postProduct = await ProductsCollection.insertOne(product);
      res.send(postProduct);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
