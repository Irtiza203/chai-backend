import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🔍 DEBUG MONGODB_URI:", process.env.MONGODB_URI);

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env file");
    }

    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ MONGODB connection FAILED:", error.message);
    process.exit(1);
  }
};

export default connectDB;
