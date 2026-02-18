import { Command } from 'commander';
import { findUser, connectDB } from '../db/db.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { savetoken } from "../Config/config.js";
export const loginCommand = (program) => {
    program
        .command('login <username> <password>')
        .description("Login to your account")
        .action(async (username, password) => {
        await connectDB();
        const user = await findUser(username);
        if (!user) {
            console.log("user not found, please register first");
            return;
        }
        const ispasswordValid = await bcrypt.compare(password, user.password);
        if (!ispasswordValid) {
            console.log("Invalid passowrd");
            return;
        }
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        savetoken(token);
        console.log("Login successful");
    });
};
//# sourceMappingURL=login.js.map