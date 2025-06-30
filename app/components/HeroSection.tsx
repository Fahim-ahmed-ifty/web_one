'use client';
import { motion } from 'framer-motion';
import {
	Headphones,
	ShoppingCart,
	Star,
	StarOff,
	Truck
} from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type StarRatingProps = {
	rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(
				<Star key={i} className='text-yellow-400 w-5 h-5 inline' />
			);
		} else {
			stars.push(
				<StarOff key={i} className='text-yellow-400 w-5 h-5 inline' />
			);
		}
	}
	return <div className='flex gap-1'>{stars}</div>;
};

const HeroSection = () => {
	const [timeLeft, setTimeLeft] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => (prev > 0 ? prev - 1000 : 0));
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formatTime = (ms: number) => {
		const seconds = Math.floor(ms / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		return `${days}d ${hours % 24}h ${minutes % 60}m ${
			seconds % 60
		}s`;
	};

	return (
		<section className='min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-white relative overflow-hidden py-12'>
			<div className='absolute top-0 left-0 w-full min-h-screen pointer-events-none'>
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
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg'>
					<span className='relative inline-block'>
						Elevate Your Style
						<span className='absolute -bottom-2 left-0 w-full h-2 bg-pink-400 rounded opacity-60 blur-sm'></span>
					</span>{' '}
					<br />
					with{' '}
					<span className='text-pink-400'>Exclusive Collections</span>
				</h1>
				<div className='flex justify-center lg:justify-start'>
					<StarRating rating={4} />
				</div>

				<p className='text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-md mx-auto md:mx-0'>
					Discover unique, handpicked products crafted for you.
					Seamless shopping with next-gen speed.
				</p>
				<div className='flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-4 max-w-md mx-auto md:mx-0'>
					<a
						href='/shop'
						className='inline-flex items-center justify-center gap-3 bg-pink-400 hover:bg-pink-500 transition rounded-full px-8 sm:px-14 lg:px-20 py-3 sm:py-4 font-semibold shadow-lg shadow-pink-400/50 text-white text-base sm:text-lg lg:text-xl whitespace-nowrap'
					>
						<ShoppingCart className='w-5 h-5 sm:w-6 sm:h-6' />
						Shop The Collection
					</a>
					<div className='bg-pink-600/70 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase whitespace-nowrap'>
						Limited Time Offer: {formatTime(timeLeft)}
					</div>
				</div>

				<div className='flex flex-col sm:flex-row gap-6 mt-8 text-xs sm:text-sm opacity-80 max-w-md mx-auto md:mx-0'>
					<div className='flex items-center gap-2 justify-center sm:justify-start'>
						<Truck className='w-4 h-4 sm:w-5 sm:h-5' />
						Free Shipping
					</div>
					<div className='flex items-center gap-2 justify-center sm:justify-start'>
						<Headphones className='w-4 h-4 sm:w-5 sm:h-5' />
						24/7 Support
					</div>
					<div className='flex items-center gap-2 justify-center sm:justify-start'>
						<Star className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-400' />
						Premium Quality
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 60 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, type: 'spring' }}
				className='relative z-10 mt-10 md:mt-0 w-full md:w-1/2 flex justify-center'
			>
				<div className='relative w-[260px] h-[350px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] lg:w-[440px] lg:h-[580px] xl:w-[500px] xl:h-[640px] rounded-3xl overflow-hidden shadow-2xl glow-shadow-animation'>
					<div className='absolute top-4 right-4 bg-pink-500 text-white text-xs sm:text-sm font-bold uppercase px-3 py-1 rounded-full shadow-lg z-20'>
						New
					</div>
					<Image
						src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
						alt='Stylish products display'
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
			</motion.div>

			<style jsx>{`
				@keyframes glow {
					0%,
					100% {
						box-shadow: 0 0 10px 4px rgba(255, 105, 180, 0.5);
					}
					50% {
						box-shadow: 0 0 20px 8px rgba(255, 105, 180, 0.8);
					}
				}
				.glow-shadow-animation {
					animation: glow 3s ease-in-out infinite;
				}
			`}</style>
		</section>
	);
};

export default HeroSection;
