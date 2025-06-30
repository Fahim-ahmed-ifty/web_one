'use server';

import { cookies } from 'next/headers';
import {
	generateToken,
	hashPassword,
	loginSchema,
	registerSchema,
	verifyPassword,
	type LoginInput,
	type RegisterInput
} from './auth';
import { prisma } from './db';

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

export async function getCurrentUser() {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get('auth-token')?.value;

		if (!token) {
			return null;
		}

		// Verify token and get user
		const { verifyToken } = await import('./auth');
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

export async function submitContactForm(data: {
	name: string;
	email: string;
	message: string;
}) {
	try {
		// Get current user
		const user = await getCurrentUser();

		if (!user) {
			return { error: 'You must be logged in to send a message' };
		}

		// Validate input
		if (!data.name || !data.email || !data.message) {
			return { error: 'All fields are required' };
		}

		if (data.name.length < 2) {
			return { error: 'Name must be at least 2 characters' };
		}

		if (data.message.length < 10) {
			return { error: 'Message must be at least 10 characters' };
		}

		// Create contact record
		const contact = await prisma.contact.create({
			data: {
				name: data.name,
				email: data.email,
				message: data.message,
				userId: user.id
			}
		});

		return { success: true, contact };
	} catch (error) {
		console.error('Contact submission error:', error);
		if (error instanceof Error) {
			return { error: error.message };
		}
		return { error: 'Failed to send message' };
	}
}
