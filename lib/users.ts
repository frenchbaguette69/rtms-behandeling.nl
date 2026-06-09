import fs from "fs/promises";
import path from "path";

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "admin";
}

const USERS_FILE = path.join(process.cwd(), "data", "users.json");

export async function getUsers(): Promise<User[]> {
  try {
    const raw = await fs.readFile(USERS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveUsers(users: User[]): Promise<void> {
  await fs.mkdir(path.dirname(USERS_FILE), { recursive: true });
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}
