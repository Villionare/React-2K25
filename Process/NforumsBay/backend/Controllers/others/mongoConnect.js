import mongoose from "mongoose";

const mongoConnect = async (connectionString) => {
    try {
        await mongoose.connect(connectionString);
        console.log("✅ MongoDB connected successfully");

    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1); // Exit process if DB connection fails
    }
}

export default mongoConnect;