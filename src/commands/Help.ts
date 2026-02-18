import {Command} from "commander"

export const helpcommand = (program: Command) =>{
    program
     .command('help me')
     .description("Display help information")
     .action(()=>{
        console.log(`
Commands: 
- register <username> <password>   Create a new user
- login <username> <password>      Login to your account
- backup <filepath>                Backup a file
- restore <filename>               Restore a file
- list                             List all backups
        `)
     })
}