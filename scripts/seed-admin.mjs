import { writeFile, mkdir, readFile } from "fs/promises";
import { createHash, randomUUID } from "crypto";
import path from "path";
import { fileURLToPath } from "url";

// Gebruik bcryptjs via dynamic import
const { default: bcrypt } = await import("bcryptjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "..", "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

const ADMIN_EMAIL = "admin@neo-clinics.nl";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin2026!";

await mkdir(DATA_DIR, { recursive: true });

let users = [];
try {
  users = JSON.parse(await readFile(USERS_FILE, "utf-8"));
} catch {}

const existing = users.find((u) => u.email === ADMIN_EMAIL);
if (existing) {
  console.log(`✓ Admin gebruiker bestaat al: ${ADMIN_EMAIL}`);
  process.exit(0);
}

const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
users.push({
  id: randomUUID(),
  name: "Admin",
  email: ADMIN_EMAIL,
  passwordHash,
  role: "admin",
});

await writeFile(USERS_FILE, JSON.stringify(users, null, 2));
console.log(`✓ Admin aangemaakt: ${ADMIN_EMAIL}`);
console.log(`  Wachtwoord: ${ADMIN_PASSWORD}`);
console.log(`  Verander het wachtwoord via ADMIN_PASSWORD env variabele bij eerste gebruik.`);
