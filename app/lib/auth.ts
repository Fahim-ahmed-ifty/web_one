import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

// Validation schemas
export const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z
		.string()
		.min(6, 'Password must be at least 6 characters')
});

export const registerSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	password: z
		.string()
		.min(6, 'Password must be at least 6 characters')
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

// Password utilities
export async function hashPassword(
	password: string
): Promise<string> {
	const saltRounds = 12;
	return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(
	password: string,
	hashedPassword: string
): Promise<boolean> {
	return bcrypt.compare(password, hashedPassword);
}

// JWT utilities
export function generateToken(userId: string): string {
	const secret = process.env.JWT_SECRET || 'fallback-secret';
	return jwt.sign({ userId }, secret, { expiresIn: '7d' });
}

export function verifyToken(
	token: string
): { userId: string } | null {
	try {
		const secret = process.env.JWT_SECRET || 'fallback-secret';
		const decoded = jwt.verify(token, secret) as { userId: string };
		return decoded;
	} catch (error) {
		return null;
	}
}

// Cookie utilities
export function setAuthCookie(token: string): string {
	return `auth-token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`;
}

export function clearAuthCookie(): string {
	return 'auth-token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0';
}
