import mongoose from 'mongoose';

// Try to get MONGODB_URI from different sources
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://foxuae35:m7711655@cluster0.z3ssp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
