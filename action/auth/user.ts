'use server';

import { cookies } from 'next/headers';
import { prisma } from '../../db/db';
import { verifyToken } from './token';

export async function getCurrentUser() {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get('auth-token')?.value;

		if (!token) {
			return null;
		}

		const decoded = verifyToken(token);

		if (!decoded) {
			return null;
		}

		const user = await prisma.user.findUnique({
			where: { id: decoded.userId },
			select: {
				id: true,
				email: true,
				name: true,
				createdAt: true
			}
		});

		return user;
	} catch (error) {
		console.error('Get current user error:', error);
		return null;
	}
}
