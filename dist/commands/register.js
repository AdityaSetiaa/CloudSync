import { Command } from 'commander';
import { getUsers, addUser, findUser, connectDB } from '../db/db.js';
import bcrypt from "bcrypt";
export const registerCommand = (program) => {
    program
        .command('register <username> <password>')
        .description("create a new user")
        .action(async (username, password) => {
        await connectDB();
        const existing = await findUser(username);
        if (existing) {
            console.log("User already exists");
            return;
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        await addUser({ username, password: hashedpassword });
        console.log("User created successfully");
    });
};
//# sourceMappingURL=register.js.map