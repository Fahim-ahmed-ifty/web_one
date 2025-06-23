import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

export default function HeroSection() {
	return (
		<section className='min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 px-6 md:px-20 lg:px-32 text-white relative overflow-hidden'>
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

			<div className='relative z-10 max-w-xl md:max-w-md lg:max-w-lg text-center md:text-left space-y-8'>
				<h1 className='text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg'>
					<span className='relative inline-block'>
						Elevate Your Style
						<span className='absolute -bottom-3 left-0 w-full h-2 bg-pink-400 rounded opacity-60 blur-sm'></span>
					</span>{' '}
					<br />
					with{' '}
					<span className='text-pink-400'>Exclusive Collections</span>
				</h1>
				<p className='text-lg md:text-xl opacity-90 leading-relaxed'>
					Discover unique, handpicked products crafted for you.
					Seamless shopping with next-gen speed.
				</p>
				<a
					href='#products'
					className='inline-flex items-center gap-3 bg-pink-400 hover:bg-pink-500 transition rounded-full px-8 py-4 font-semibold shadow-lg shadow-pink-400/50 text-white text-lg'
				>
					<FiShoppingCart className='w-6 h-6' />
					Shop The Collection
				</a>
			</div>

			{/* Image */}
			<div className='relative z-10 mt-12 md:mt-0 md:ml-16 w-full max-w-lg flex justify-center'>
				<img
					src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
					alt='Stylish products display'
					className='rounded-3xl shadow-2xl w-full h-auto object-cover'
					loading='lazy'
					decoding='async'
				/>
			</div>
		</section>
	);
}
