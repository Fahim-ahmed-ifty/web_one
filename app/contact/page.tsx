'use client';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { submitContactForm } from '../../action/actions';
import Button from '../components/Button';

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
			<div className='min-h-screen bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 flex items-center justify-center z-40'>
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
					className='max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-10 shadow-lg text-center flex flex-col items-center'
				>
					{/* Illustration */}
					<div className='flex justify-center mb-6'>
						<img
							src='/globe.svg'
							alt='Login Required'
							className='w-24 h-24 opacity-80'
						/>
					</div>
					<h1 className='text-4xl font-bold mb-4 text-center'>
						Login Required
					</h1>
					<p className='mb-6 text-center text-lg opacity-90'>
						You must be logged in to send us a message.
					</p>
					{/* Feature List */}
					<ul className='mb-8 text-left mx-auto max-w-md space-y-2 text-base text-black/80'>
						<li className='flex items-center gap-2'>
							<span className='text-pink-400 text-lg'>•</span> Contact
							our support team directly
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-pink-400 text-lg'>•</span> Track
							your previous inquiries
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-pink-400 text-lg'>•</span> Get
							personalized assistance
						</li>
					</ul>
					<div className='space-y-4 w-full'>
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
				{/* Office Locations & E-commerce Info Section */}
				<div className='max-w-3xl w-full mt-12 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-start'>
					{/* Office Locations */}
					<div className='flex-1'>
						<h2 className='text-2xl font-bold mb-4 text-indigo-900'>
							Our Offices
						</h2>
						<ul className='space-y-3 text-black/80'>
							<li>
								<span className='font-semibold'>Headquarters:</span>{' '}
								123 Commerce Ave, New York, NY, USA
							</li>
							<li>
								<span className='font-semibold'>Europe Office:</span>{' '}
								45 Market St, London, UK
							</li>
							<li>
								<span className='font-semibold'>Asia Office:</span> 88
								Ecom Rd, Singapore
							</li>
						</ul>
					</div>
					{/* E-commerce Info */}
					<div className='flex-1'>
						<h2 className='text-2xl font-bold mb-4 text-pink-800'>
							Why Shop With Us?
						</h2>
						<ul className='space-y-3 text-black/80'>
							<li>✅ Fast & Secure Checkout</li>
							<li>✅ Worldwide Shipping</li>
							<li>✅ 24/7 Customer Support</li>
							<li>✅ Easy Returns & Refunds</li>
							<li>✅ Exclusive Member Discounts</li>
						</ul>
					</div>
				</div>
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
