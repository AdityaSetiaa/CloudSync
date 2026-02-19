import { Command } from "commander";
import { gettoken, cleartoken } from "../Config/config.js"
import jwt from "jsonwebtoken";
import "dotenv/config";


type TokenPayload={
    username: string;
    iat: number;
    exp: number;
}


export const statusCommand = (program: Command) => {
    program
        .command('status')
        .description('check your status')
        .action(()=>{
            const token = gettoken()
            const secret = process.env.JWT_SECRET;
            if (!secret) {
                console.log("JWT secret not configured.");return;
            }
            
            if(!token){
                console.log("Not logged in. log in")
                console.log("Run: csync login <username> <password>");
                return
            }

            try {
        const decoded = jwt.verify(token, secret) as TokenPayload;

        console.log("Session is valid.");
        console.log(`Logged in as: ${decoded.username}`);
        console.log("You are logged in.");
        console.log("Token found in ~/.cloudsync/config.json");
      } catch (err) {
        console.log("Session expired. Please login again.");
        cleartoken();

      }
    });
      
        
}