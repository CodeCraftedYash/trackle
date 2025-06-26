import mongoose from 'mongoose';
const clientOptions = {
  serverApi: {
    version: "1" as const,
    strict: true,
    deprecationErrors: true,
  },
}


async function connectDB(): Promise<void> {
  if(!process.env.MONGO_URI)return;
  else{
  try {
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Connection failed:", err);
    throw err;
  }
}
}

export default connectDB;
