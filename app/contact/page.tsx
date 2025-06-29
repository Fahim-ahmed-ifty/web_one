'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [submitted, setSubmitted] = useState(false);

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSubmitted(true);
		// Normally here you would handle form submission to backend or email service
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
					We’d love to hear from you! Whether it’s a question,
					feedback, or a collaboration idea.
				</p>

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

					<button
						type='submit'
						className='w-full bg-pink-500 hover:bg-pink-600 transition rounded-full py-3 text-white font-semibold text-lg shadow-md cursor-pointer'
					>
						Send Message
					</button>
				</form>

				{submitted && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='mt-6 p-4 bg-pink-600 rounded text-center font-semibold'
					>
						Thank you, Ifty! Your message has been sent.
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}
