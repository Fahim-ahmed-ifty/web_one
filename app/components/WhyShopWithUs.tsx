'use client';
import { whyShopFeatures } from '@/constants/whyShopFeatures';
import { motion } from 'framer-motion';
import {
	Award,
	Clock,
	CreditCard,
	Headphones,
	Shield,
	Star,
	Truck,
	Zap
} from 'lucide-react';
import React from 'react';

const WhyShopWithUs = () => {
	// Icon mapping
	const iconMap = {
		Truck: <Truck className='w-8 h-8' />,
		Shield: <Shield className='w-8 h-8' />,
		Headphones: <Headphones className='w-8 h-8' />,
		Award: <Award className='w-8 h-8' />,
		CreditCard: <CreditCard className='w-8 h-8' />,
		Zap: <Zap className='w-8 h-8' />
	};

	// Map features with icons
	const features = whyShopFeatures.map(feature => ({
		...feature,
		icon: iconMap[feature.iconName as keyof typeof iconMap]
	}));

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				type: 'spring' as const
			}
		}
	};

	return (
		<section className='relative py-16 md:py-24 lg:py-32 overflow-hidden'>
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16 md:mb-20'
				>
					<div className='inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6'>
						<Star className='w-4 h-4' />
						Why Choose Us
					</div>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						Why Shop With{' '}
						<span className='bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
							NextGen Shop
						</span>
					</h2>
					<p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Experience the future of online shopping with our
						cutting-edge platform, premium products, and exceptional
						service that sets us apart from the rest.
					</p>
				</motion.div>

				{/* Features Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
				>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className='group relative'
						>
							<div className='relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'>
								{/* Icon with gradient background */}
								<div
									className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									{feature.icon}
								</div>

								{/* Content */}
								<h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors'>
									{feature.title}
								</h3>
								<p className='text-gray-600 leading-relaxed'>
									{feature.description}
								</p>

								{/* Hover effect overlay */}
								<div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			<style jsx>{`
				@keyframes pulse-slow {
					0%,
					100% {
						opacity: 0.3;
						transform: scale(1);
					}
					50% {
						opacity: 0.6;
						transform: scale(1.05);
					}
				}
				.animate-pulse-slow {
					animation: pulse-slow 4s ease-in-out infinite;
				}
				.delay-500 {
					animation-delay: 0.5s;
				}
				.delay-1000 {
					animation-delay: 1s;
				}
			`}</style>
		</section>
	);
};

export default WhyShopWithUs;
