'use server';

import { prisma } from '../db/db';

import { loginUser } from './auth/login';
import { logoutUser } from './auth/logout';
import { registerUser } from './auth/register';
import { getCurrentUser } from './auth/user';
import { submitContactForm } from './contact/actions';

export {
	getCurrentUser,
	loginUser,
	logoutUser,
	registerUser,
	submitContactForm
};
