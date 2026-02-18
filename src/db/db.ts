import "dotenv/config"
import { Collection, MongoClient } from "mongodb";


type User = {
    username: string;
    password: string;
}

const uri = process.env.MONGO_URI! 
const client = new MongoClient(uri)

let usercollention: Collection<User>

export const connectDB = async () => {
    try{
        await client.connect();
        const db = client.db("cloudsync")
        usercollention = db.collection("users")
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export const getUsers = async (): Promise<User[]> => {
    return await usercollention.find().toArray()
}

export const addUser = async (user: User) => {
    await usercollention.insertOne(user)
}

export const findUser = async (username: string) => {
    return await usercollention.findOne({username})
}



