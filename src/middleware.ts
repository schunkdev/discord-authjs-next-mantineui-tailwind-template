import { auth } from '@lib/auth';
import { API_AUTH_PREFIX, AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT, PUBLIC_ROUTES } from '@lib/routes';

export default auth((req) => {
	const isLoggedIn = !!req.auth; // !! turns value into a boolean
	console.log('ROUTE: ', req.nextUrl.pathname);
	const { nextUrl } = req;

	const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
	const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
	const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
	if (isApiAuthRoute) return null;

	if (isAuthRoute) {
		if (isLoggedIn) return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		return null;
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL('/auth/login', nextUrl));
	}

	return null;
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
