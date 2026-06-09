import { jwtVerify } from "jose";

export async function decrypt(token: string): Promise<{ user?: { email?: string } } | null> {
  try {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET ?? "dev-secret-change-in-production");
    const { payload } = await jwtVerify(token, secret);
    return payload as { user?: { email?: string } };
  } catch {
    return null;
  }
}
