import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("Write a title");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).redirect("/list");
  }
}
