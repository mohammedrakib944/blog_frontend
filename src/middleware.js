import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default middleware = async (req) => {
  let jwtToken = req.cookies.get("access_token");

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    // If there is no jwtToken token on cookie return to login page
    if (jwtToken === undefined) {
      return NextResponse.rewrite(new URL("/admin", req.url));
    }
    try {
      const secret = new TextEncoder().encode("rakib@^secret#key");
      await jwtVerify(jwtToken.value, secret);
      return NextResponse.next();
    } catch (error) {
      console.log("Token varification failed: ", error);
      return NextResponse.rewrite(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
};
