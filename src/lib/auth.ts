import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';
export const {
	handlers: { GET, POST },
	auth,
} = NextAuth({ providers: [Discord] });
