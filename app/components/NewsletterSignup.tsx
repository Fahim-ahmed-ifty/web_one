import React, { useState } from 'react';
import Button from './Button';

const NewsletterSignup = () => {
	const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;
		setSubscribed(true);
		setEmail('');
	};
	return (
		<div className='bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg max-w-5xl mx-auto text-center space-y-4 sm:space-y-6'>
			<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
				Get 10% Off Your First Order
			</h2>
			<p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
				Subscribe to our newsletter for exclusive deals and updates
			</p>
			{!subscribed ? (
				<form
					onSubmit={handleSubmit}
					className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-md sm:max-w-lg mx-auto'
				>
					<input
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Enter your email'
						className='px-4 py-3 sm:py-4 w-full sm:w-80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition text-sm sm:text-base'
						required
					/>
					<Button
						type='submit'
						variant='black'
						size='xl'
						fullWidth={false}
						className='w-full sm:w-auto rounded-full'
					>
						Subscribe
					</Button>
				</form>
			) : (
				<p className='text-green-600 font-medium text-sm sm:text-base md:text-lg'>
					You're subscribed! 🎉
				</p>
			)}
		</div>
	);
};

export default NewsletterSignup;
