import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    const objectId = new ObjectId(req.body._id);
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").deleteOne({ _id: objectId });
    console.log(result);
    res.status(200).json("삭제완료!");
  }
}
