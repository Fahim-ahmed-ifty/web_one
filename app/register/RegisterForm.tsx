'use client';

import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerUser } from '../../action/actions';
import Button from '../components/Button';

export default function RegisterForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	});
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			const result = await registerUser(formData);

			if (result.error) {
				setError(result.error);
			} else if (result.success) {
				// Force a page refresh to update the navbar
				window.location.href = '/';
			}
		} catch (err) {
			setError('An unexpected error occurred');
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-6'>
			{error && (
				<div className='bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-200 text-sm'>
					{error}
				</div>
			)}

			<div className='space-y-2'>
				<label
					htmlFor='name'
					className='block text-sm font-medium text-white/90'
				>
					Full Name
				</label>
				<div className='relative'>
					<User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5' />
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
						className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition'
						placeholder='Enter your full name'
					/>
				</div>
			</div>

			<div className='space-y-2'>
				<label
					htmlFor='email'
					className='block text-sm font-medium text-white/90'
				>
					Email
				</label>
				<div className='relative'>
					<Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5' />
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
						className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition'
						placeholder='Enter your email'
					/>
				</div>
			</div>

			<div className='space-y-2'>
				<label
					htmlFor='password'
					className='block text-sm font-medium text-white/90'
				>
					Password
				</label>
				<div className='relative'>
					<Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5' />
					<input
						type={showPassword ? 'text' : 'password'}
						id='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						required
						minLength={6}
						className='w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition'
						placeholder='Create a password (min 6 characters)'
					/>
					<Button
						type='button'
						variant='ghost'
						size='sm'
						className='absolute right-3 top-1/2 transform -translate-y-1/2'
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<EyeOff className='w-5 h-5' />
						) : (
							<Eye className='w-5 h-5' />
						)}
					</Button>
				</div>
			</div>

			<Button
				type='submit'
				variant='primary'
				size='md'
				loading={isLoading}
				fullWidth
				className='font-medium rounded-lg'
			>
				{isLoading ? 'Creating account...' : 'Create Account'}
			</Button>
		</form>
	);
}
