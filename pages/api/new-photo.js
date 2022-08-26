// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
("mongodb");

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://yoforia_lilian:yoforia12345678@cluster0.eymkfj8.mongodb.net/gallerys?retryWrites=true&w=majority"
    );
    const db = client.db();

    const photosCollection = db.collection("gallerys");

    const result = await photosCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "photo inserted!" });
  }
}

export default handler;
