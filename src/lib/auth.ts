import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from './environment';
export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	theme: { brandColor: '#78c2ad' },
	providers: [Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_CLIENT_SECRET })],
	callbacks: {
		async jwt({ token }) {
			console.log('JWT: ', token);
		},
		async signIn({ user, account, profile, email, credentials }) {
			console.log('SIGNIN: ', user, account, profile, email, credentials);
			/**
			 * SIGNIN:  {
  id: '267614892821970945',
  name: 'chillihero',
  email: 'niki.2013cool@gmail.com',
  image: 'https://cdn.discordapp.com/avatars/267614892821970945/bc529d58bf37e4d55de26d7883660dfc.png'
} {
  token_type: 'bearer',
  access_token: '',
  expires_in: 604800,
  refresh_token: '',
  scope: 'email guilds.members.read guilds applications.commands.permissions.update identify',
  expires_at: 1707346863,
  provider: 'discord',
  type: 'oauth',
  providerAccountId: '267614892821970945'
} {
  id: '267614892821970945',
  username: 'chillihero',
  avatar: 'bc529d58bf37e4d55de26d7883660dfc',
  discriminator: '0',
  public_flags: 4194560,
  premium_type: 2,
  flags: 4194560,
  banner: '128d1ab7e0a29fb9e5d253d33b82428e',
  accent_color: 7914157,
  global_name: null,
  avatar_decoration_data: null,
  banner_color: '#78c2ad',
  mfa_enabled: true,
  locale: 'en-US',
  email: 'niki.2013cool@gmail.com',
  verified: true,
  image_url: 'https://cdn.discordapp.com/avatars/267614892821970945/bc529d58bf37e4d55de26d7883660dfc.png'
} undefined undefined
			 */
			return true;
		},
		async session({ session }) {
			console.log('SESSION: ', session);
			return session;
		},
	},
	pages: {
		error: '/auth/error',
	},
	session: {
		strategy: 'jwt',
	},
});
