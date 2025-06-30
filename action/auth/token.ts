import jwt from 'jsonwebtoken';

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
