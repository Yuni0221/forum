import { connectDB } from "@/util/database.js";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      <div>안녕</div>
    </>
  );
}
