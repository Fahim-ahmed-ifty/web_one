'use server';

import { cookies } from 'next/headers';

export async function logoutUser() {
	try {
		const cookieStore = await cookies();
		cookieStore.delete('auth-token');
		return { success: true };
	} catch (error) {
		console.error('Logout error:', error);
		return { error: 'Logout failed' };
	}
}
