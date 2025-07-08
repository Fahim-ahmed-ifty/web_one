'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type TestimonialCardProps = {
	name: string;
	message: string;
	image: string;
	rating: number;
};

const TestimonialCard = ({
	name,
	message,
	image,
	rating
}: TestimonialCardProps) => {
	return (
		<motion.div
			whileHover={{ scale: 1.02, y: -5 }}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: 'spring' }}
			className='relative group'
		>
			{/* Background gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300'></div>

			{/* Glow effect */}
			<div className='absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

			<div className='relative p-8 space-y-6'>
				{/* Quote icon */}
				<div className='absolute top-6 right-6'>
					<Quote className='w-8 h-8 text-pink-400/30' />
				</div>

				{/* Avatar and name section */}
				<div className='flex items-center space-x-4'>
					<div className='relative'>
						<div className='w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-0.5'>
							<div className='w-full h-full rounded-full overflow-hidden'>
								<Image
									src={image}
									alt={name}
									fill
									className='object-cover rounded-lg'
									sizes='64px'
								/>
							</div>
						</div>
						{/* Status indicator */}
						<div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white'></div>
					</div>

					<div className='flex-1'>
						<h3 className='text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors'>
							{name}
						</h3>
						<div className='flex items-center space-x-1 mt-1'>
							{Array.from({ length: 5 }).map((_, index) => (
								<Star
									key={index}
									className={`w-4 h-4 ${
										index < rating
											? 'text-yellow-400 fill-current'
											: 'text-gray-300'
									}`}
								/>
							))}
							<span className='ml-2 text-sm text-gray-500'>
								({rating}/5)
							</span>
						</div>
					</div>
				</div>

				{/* Message */}
				<div className='relative'>
					<p className='text-gray-600 leading-relaxed text-lg italic'>
						"{message}"
					</p>

					{/* Decorative line */}
					<div className='mt-4 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full'></div>
				</div>

				{/* Verified badge */}
				<div className='flex items-center space-x-2 text-sm text-gray-500'>
					<div className='w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center'>
						<svg className='w-2.5 h-2.5 text-white' fill='currentColor' viewBox='0 0 20 20'>
							<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
						</svg>
					</div>
					<span>Verified Customer</span>
				</div>
			</div>
		</motion.div>
	);
};

export default TestimonialCard;
