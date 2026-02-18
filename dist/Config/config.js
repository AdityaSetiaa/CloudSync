import fs from "fs";
import path from "path";
import os from "os";
const configDir = path.join(os.homedir(), ".cloudsync");
const configPath = path.join(configDir, "config.json");
export const savetoken = (token) => {
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir);
    }
    const config = { token };
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
};
export const gettoken = () => {
    if (!fs.existsSync(configPath)) {
        return null;
    }
    const raw = fs.readFileSync(configPath).toString();
    const config = JSON.parse(raw);
    return config.token ?? null;
};
export const cleartoken = () => {
    if (fs.existsSync(configPath)) {
        fs.unlinkSync(configPath);
    }
};
//# sourceMappingURL=config.js.map