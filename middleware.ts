import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET });

  if (!token) return NextResponse.redirect(new URL('/login', req.url));
}
export const config = {
  matcher: ['/', '/profile', '/stats', '/playlist'],
};
