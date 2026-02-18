import "dotenv/config";
type User = {
    username: string;
    password: string;
};
export declare const connectDB: () => Promise<void>;
export declare const getUsers: () => Promise<User[]>;
export declare const addUser: (user: User) => Promise<void>;
export declare const findUser: (username: string) => Promise<import("mongodb").WithId<User> | null>;
export {};
//# sourceMappingURL=db.d.ts.map