import NextAuth from 'next-auth';

import { authConfig } from '@/lib';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|/auth/signin|_next/static|_next/image|.*\\.png$).*)'],
};
