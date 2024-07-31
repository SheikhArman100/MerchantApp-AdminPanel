// middleware
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url));

  const cookie = request.cookies.get('MerchantJwt')?.value;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `MerchantJwt=${cookie}`,
      },
    },
  );

  // //not authorized
  if (!response.ok) {
    return NextResponse.redirect(new URL(`/auth/signin`, request.url));
  }

  //authorized
  const user = await response.json();
  // console.log(user);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/auth/signup'],
};
