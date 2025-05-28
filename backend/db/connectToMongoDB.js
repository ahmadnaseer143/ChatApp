import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to mongo db");
  } catch (error) {
    console.log("Error in Connecting to mongo db", error.messaage);
  }
};

export default connectToMongoDB;
