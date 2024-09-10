import { NextRequest, NextResponse } from "next/server";
import { getLoggedInUser } from "./lib/actions/admin.actions";

export default async function middleware(request: NextRequest) {
  try {
    // Retrieve the authenticated user's account
    const user = await getLoggedInUser();
    if (!user) {
      throw new Error("Invalid session");
    }
    // If authenticated, continue to the requested page
    return NextResponse.next();
  } catch (error) {
    console.error("Authentication error:", error);
    // Redirect to login if session is invalid
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/admin",
};
