import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/auth") || token) {
    console.log("Token Found.");
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    console.log("Redirecting to Login");
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/((?!_next|api/auth|static|favicon.ico).*)"],
};
