'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

export default function HeroSection() {
	return (
		<section className='min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-white relative overflow-hidden py-12'>
			<div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
				<svg
					className='w-full h-full'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='xMidYMid slice'
					fill='none'
					viewBox='0 0 800 600'
				>
					<circle
						className='animate-pulse-slow'
						cx='150'
						cy='150'
						r='150'
						fill='rgba(255,255,255,0.1)'
					/>
					<circle
						className='animate-pulse-slow delay-1000'
						cx='650'
						cy='450'
						r='200'
						fill='rgba(255,255,255,0.07)'
					/>
					<circle
						className='animate-pulse-slow delay-500'
						cx='400'
						cy='300'
						r='100'
						fill='rgba(255,255,255,0.08)'
					/>
				</svg>
			</div>

			<motion.div
				initial={{ opacity: 0, x: -60 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, type: 'spring' }}
				className='relative z-10 w-full md:w-1/2 max-w-2xl text-center md:text-left space-y-6 sm:space-y-8'
			>
				<h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg'>
					<span className='relative inline-block'>
						Elevate Your Style
						<span className='absolute -bottom-2 left-0 w-full h-2 bg-pink-400 rounded opacity-60 blur-sm'></span>
					</span>{' '}
					<br />
					with{' '}
					<span className='text-pink-400'>Exclusive Collections</span>
				</h1>
				<p className='text-base sm:text-lg md:text-xl opacity-90 leading-relaxed'>
					Discover unique, handpicked products crafted for you.
					Seamless shopping with next-gen speed.
				</p>
				<a
					href='#products'
					className='inline-flex items-center justify-center gap-3 bg-pink-400 hover:bg-pink-500 transition rounded-full px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-lg shadow-pink-400/50 text-white text-lg'
				>
					<FiShoppingCart className='w-5 h-5 sm:w-6 sm:h-6' />
					Shop The Collection
				</a>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 60 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, type: 'spring' }}
				className='relative z-10 mt-10 md:mt-0 w-full md:w-1/2 flex justify-center'
			>
				<div className='relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[500px] lg:w-[460px] lg:h-[580px] xl:w-[520px] xl:h-[640px] rounded-3xl overflow-hidden shadow-2xl'>
					<Image
						src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
						alt='Stylish products display'
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
			</motion.div>
		</section>
	);
}
