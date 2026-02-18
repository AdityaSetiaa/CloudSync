import "dotenv/config";
import { Collection, MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let usercollention;
export const connectDB = async () => {
    try {
        await client.connect();
        const db = client.db("cloudsync");
        usercollention = db.collection("users");
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
export const getUsers = async () => {
    return await usercollention.find().toArray();
};
export const addUser = async (user) => {
    await usercollention.insertOne(user);
};
export const findUser = async (username) => {
    return await usercollention.findOne({ username });
};
//# sourceMappingURL=db.js.map