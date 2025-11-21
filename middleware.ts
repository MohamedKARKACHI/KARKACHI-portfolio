import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request,
  })

  // Check if user is logged in via cookie
  const isLoggedIn = request.cookies.get("isAdminLoggedIn")?.value === "true"

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith("/admin") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Redirect to admin if already logged in and trying to access login
  if (request.nextUrl.pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return response
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
}
