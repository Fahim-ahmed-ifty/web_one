'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type ProductProps = {
	title: string;
	image: string;
	price: string;
};

export default function ProductCard({
	title,
	image,
	price
}: ProductProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.03 }}
			className='bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300'
		>
			<div className='relative w-full h-64'>
				<Image
					src={image}
					alt={title}
					fill
					className='object-cover'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>
			<div className='p-4 text-center space-y-2'>
				<h3 className='text-lg font-semibold text-gray-800'>
					{title}
				</h3>
				<p className='text-pink-600 text-md font-bold'>{price}</p>
				<button className='mt-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition'>
					View Product
				</button>
			</div>
		</motion.div>
	);
}
