import { cookies } from 'next/headers';
import { prisma } from '../../db/db';
import {
	RegisterInput,
	registerSchema
} from '../zod_validation/authvalidation';
import { hashPassword } from './password';
import { generateToken } from './token';

export async function registerUser(data: RegisterInput) {
	try {
		// Validate input
		const validatedData = registerSchema.parse(data);

		// Check if user already exists
		const existingUser = await prisma.user.findUnique({
			where: { email: validatedData.email }
		});

		if (existingUser) {
			return { error: 'User with this email already exists' };
		}

		// Hash password
		const hashedPassword = await hashPassword(validatedData.password);

		// Create user
		const user = await prisma.user.create({
			data: {
				email: validatedData.email,
				password: hashedPassword,
				name: validatedData.name
			},
			select: {
				id: true,
				email: true,
				name: true,
				createdAt: true
			}
		});

		// Generate token and set cookie
		const token = generateToken(user.id);
		const cookieStore = await cookies();
		cookieStore.set('auth-token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 7 * 24 * 60 * 60 // 7 days
		});

		return { success: true, user };
	} catch (error) {
		console.error('Registration error:', error);
		if (error instanceof Error) {
			return { error: error.message };
		}
		return { error: 'Registration failed' };
	}
}
