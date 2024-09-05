import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  return null;
}

export const config = {
  matcher: "/admin",
};
