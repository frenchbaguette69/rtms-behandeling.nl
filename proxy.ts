import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth(function proxy(req) {
  const { nextUrl, auth: session } = req as typeof req & { auth: { user?: unknown } | null };
  const isLoggedIn = !!session?.user;
  const isLoginPage = nextUrl.pathname === "/admin/login";

  if (!isLoggedIn && !isLoginPage) {
    return Response.redirect(new URL("/admin/login", nextUrl));
  }

  if (isLoggedIn && isLoginPage) {
    return Response.redirect(new URL("/admin", nextUrl));
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};
