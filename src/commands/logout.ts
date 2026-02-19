import type { Command } from "commander";
import { cleartoken, gettoken } from "../Config/config.js";


export const logoutcommand = (program: Command)=>{
    program
     .command("Logout")
     .description("Logout from your account")
     .action(()=>{
        const token = gettoken()
        if(!token){
            console.log("You are not logged in.")
            return
        }

        cleartoken()
        setTimeout(()=>{console.log("Logging out...", 2000)})
        setTimeout(()=>{console.log("clearinf session data...", 2000)})
        console.log("You have been logged out.")
     })
}