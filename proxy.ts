import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

const protectedPrefix = "/admin";
const loginPage = "/admin/login";

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (!path.startsWith(protectedPrefix) || path === loginPage) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get("authjs.session-token") ?? req.cookies.get("__Secure-authjs.session-token");
  const session = cookie ? await decrypt(cookie.value) : null;

  if (!session?.user) {
    return NextResponse.redirect(new URL(loginPage, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
