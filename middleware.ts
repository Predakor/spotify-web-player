import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET });

  if (!token) return NextResponse.redirect(new URL('/login', req.url));
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|about).*)'],
};
