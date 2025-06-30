'use server';

import { prisma } from '../../db/db';
import { getCurrentUser } from '../auth/user';
import {
	ContactInput,
	contactSchema
} from '../zod_validation/contact';

export async function submitContactForm(data: ContactInput) {
	try {
		const user = await getCurrentUser();

		if (!user) {
			return { error: 'You must be logged in to send a message' };
		}

		const validatedData = contactSchema.parse(data);

		const contact = await prisma.contact.create({
			data: {
				...validatedData,
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
