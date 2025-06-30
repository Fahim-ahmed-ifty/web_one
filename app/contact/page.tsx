'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { submitContactForm } from '../lib/actions';

const ContactPage = () => {
	const { user, isLoading, isAuthenticated } = useAuth();
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError('');

		try {
			const result = await submitContactForm(formData);

			if (result.error) {
				setError(result.error);
			} else if (result.success) {
				setSubmitted(true);
				setFormData({ name: '', email: '', message: '' });
			}
		} catch (err) {
			setError('An unexpected error occurred');
		} finally {
			setIsSubmitting(false);
		}
	};

	// Show loading state
	if (isLoading) {
		return (
			<div className='min-h-screen bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 flex items-center justify-center'>
				<div className='text-white text-xl'>Loading...</div>
			</div>
		);
	}

	// Show login required message
	if (!isAuthenticated) {
		return (
			<div className='min-h-screen bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 py-24 px-6 flex flex-col items-center text-black'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className='max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-10 shadow-lg text-center'
				>
					<h1 className='text-4xl font-bold mb-6 text-center'>
						Login Required
					</h1>
					<p className='mb-8 text-center text-lg opacity-90'>
						You must be logged in to send us a message.
					</p>
					<div className='space-y-4'>
						<Button
							onClick={() => router.push('/login')}
							variant='primary'
							size='md'
							fullWidth
							className='font-semibold text-lg shadow-md'
						>
							Login
						</Button>
						<p className='text-sm opacity-80'>
							Don't have an account?{' '}
							<button
								onClick={() => router.push('/register')}
								className='text-pink-300 hover:text-pink-200 underline'
							>
								Register here
							</button>
						</p>
					</div>
				</motion.div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600  py-24 px-6 flex flex-col items-center text-black'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className='max-w-3xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-10 shadow-lg'
			>
				<h1 className='text-4xl font-bold mb-6 text-center'>
					Get in Touch
				</h1>
				<p className='mb-8 text-center text-lg opacity-90'>
					We'd love to hear from you! Whether it's a question,
					feedback, or a collaboration idea.
				</p>

				{error && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='mb-6 p-4 bg-red-600/20 border border-red-500/50 rounded text-center font-semibold text-red-200'
					>
						{error}
					</motion.div>
				)}

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label
							htmlFor='name'
							className='block mb-2 font-semibold'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							className='w-full rounded-md px-4 py-3 text-gray-900 border border-amber-500 focus:outline-none focus:ring-2 focus:ring-pink-400'
						/>
					</div>

					<div>
						<label
							htmlFor='email'
							className='block mb-2 font-semibold'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							className='w-full rounded-md px-4 py-3 text-gray-900 border border-amber-500 focus:outline-none focus:ring-2 focus:ring-pink-400'
						/>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block mb-2 font-semibold'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							required
							rows={5}
							className='w-full rounded-md px-4 py-3 text-gray-900 resize-none  border border-amber-500 focus:outline-none focus:ring-2 focus:ring-pink-400'
						></textarea>
					</div>

					<Button
						type='submit'
						variant='primary'
						size='md'
						loading={isSubmitting}
						fullWidth
						className='font-semibold text-lg shadow-md'
					>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</Button>
				</form>

				{submitted && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='mt-6 p-4 bg-green-600/20 border border-green-500/50 rounded text-center font-semibold text-black'
					>
						Thank you! Your message has been sent successfully.
					</motion.div>
				)}
			</motion.div>
		</div>
	);
};

export default ContactPage;
