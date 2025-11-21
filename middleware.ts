import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // For now, allow all access to admin pages
  // Authentication will be handled client-side
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
}
