import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const verified = req.cookies.get("mdf_verified")?.value === "true";
  const { pathname } = req.nextUrl;

  // Allow Next internals, API routes, and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Allow the age gate itself
  if (pathname === "/age") {
    // If already verified, never show /age again
    if (verified) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // Block everything else if not verified
  if (!verified) {
    return NextResponse.redirect(new URL("/age", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
