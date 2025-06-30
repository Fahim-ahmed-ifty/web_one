import { cookies } from 'next/headers';
import { prisma } from '../../db/db';
import {
	LoginInput,
	loginSchema
} from '../zod_validation/authvalidation';
import { verifyPassword } from './password';
import { generateToken } from './token';

export async function loginUser(data: LoginInput) {
	try {
		// Validate input
		const validatedData = loginSchema.parse(data);

		// Find user
		const user = await prisma.user.findUnique({
			where: { email: validatedData.email }
		});

		if (!user) {
			return { error: 'Invalid email or password' };
		}

		// Verify password
		const isValidPassword = await verifyPassword(
			validatedData.password,
			user.password
		);

		if (!isValidPassword) {
			return { error: 'Invalid email or password' };
		}

		// Generate token and set cookie
		const token = generateToken(user.id);
		const cookieStore = await cookies();
		cookieStore.set('auth-token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 7 * 24 * 60 * 60 // 7 days
		});

		return {
			success: true,
			user: {
				id: user.id,
				email: user.email,
				name: user.name,
				createdAt: user.createdAt
			}
		};
	} catch (error) {
		console.error('Login error:', error);
		if (error instanceof Error) {
			return { error: error.message };
		}
		return { error: 'Login failed' };
	}
}
