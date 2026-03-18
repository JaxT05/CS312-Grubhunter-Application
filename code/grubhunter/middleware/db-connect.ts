import mongoose, { ConnectOptions } from "mongoose";
  
declare global {
    var mongoose: { conn: unknown, promise: unknown };
  }

const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error (
      "MONGO_URI variable not found."
    )
  }

  let cached = global.mongoose;
  if (!cached) {
    cached = global.mongoose = {conn: null, promise: null};
  }

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
      maxIdleTimeMS: 10000,
      socketTimeoutMS: 20000,
    }
  cached.promise = mongoose.connect(MONGO_URI!, opts)
  .then((mongoose) => mongoose)
  .catch((error)  => {
    throw new Error (String(error));
  })
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    throw new Error (String(error));
  }
}

console.log(mongoose.connection.readyState);
export default dbConnect;
