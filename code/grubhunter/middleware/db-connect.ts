import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error (
      "MONGO_URI variable not found."
    )
  }
  let cached = global.mongoose;
  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    try {
      cached.promise = mongoose.connect(MONGO_URI!).then((mongoose) => {
      return mongoose;
    });
    } catch (error) {
      console.error("Database Connection Failed: ", error);
      ;
    }
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
