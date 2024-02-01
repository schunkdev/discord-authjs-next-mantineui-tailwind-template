/**
 * An Array of routes that are public.
 * @type {string[]}
 */
export const PUBLIC_ROUTES = ['/', '/public'];

export const AUTH_ROUTES = ['/auth/login', '/auth/register', '/auth/error'];

/**
 * The prefix for all authenticate API routes.
 */
export const API_AUTH_PREFIX = '/api/auth';

/**
 * Default redirect path after login.
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';
