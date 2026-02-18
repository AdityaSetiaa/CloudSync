import fs from "fs"
import path from "path"
import os from "os"

type Config = {
    token? : string
}

const configDir = path.join(os.homedir(), ".cloudsync")
const configPath = path.join(configDir, "config.json")

export const savetoken = (token : string) => {
    if(!fs.existsSync(configDir)){
        fs.mkdirSync(configDir)
    }
    const config: Config = {token}
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
}

export const gettoken = (): string | null => {
    if(!fs.existsSync(configPath)){
        return null
    }

    const raw = fs.readFileSync(configPath).toString()
    const config: Config = JSON.parse(raw)
    return config.token ?? null 
}

export const cleartoken = () => {
    if(fs.existsSync(configPath)){
        fs.unlinkSync(configPath)
    }
}