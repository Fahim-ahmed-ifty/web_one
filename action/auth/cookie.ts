export function setAuthCookie(token: string): string {
	return `auth-token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`;
}

export function clearAuthCookie(): string {
	return 'auth-token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0';
}
