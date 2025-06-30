'use client';
import { motion } from 'framer-motion';

const AboutPage = () => {
	return (
		<div className='text-gray-800'>
			<section className='relative bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-white py-24 px-6'>
				<div className='max-w-6xl mx-auto text-center'>
					<h1 className='text-4xl md:text-6xl font-bold'>
						About NextGen Shop
					</h1>
					<p className='mt-6 text-lg md:text-xl max-w-2xl mx-auto'>
						Innovating the way you shop with design, speed and
						emotion.
					</p>
				</div>
			</section>

			<section className='max-w-6xl mx-auto px-6 py-16'>
				<div className='grid md:grid-cols-2 gap-10 items-center'>
					<motion.img
						src='https://images.unsplash.com/photo-1523275335684-37898b6baf30'
						alt='team'
						className='rounded-2xl shadow-lg'
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					/>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className='text-3xl font-bold mb-4'>Who We Are</h2>
						<p className='text-lg leading-relaxed'>
							We're a passionate team of dreamers, designers, and
							developers. From building seamless digital experiences
							to curating the latest trends — we're here to elevate
							your everyday shopping journey.
						</p>
					</motion.div>
				</div>
			</section>

			<section className='bg-gray-50 py-20 px-6'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-3xl font-bold mb-12'>
						Our Core Values
					</h2>
					<div className='grid md:grid-cols-3 gap-10'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition'
						>
							<h3 className='text-xl font-semibold mb-3 text-pink-500'>
								Innovation
							</h3>
							<p>
								We never settle. We challenge limits and bring fresh
								ideas to life in every pixel.
							</p>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition'
						>
							<h3 className='text-xl font-semibold mb-3 text-purple-500'>
								Empathy
							</h3>
							<p>
								Customers come first — always. Every decision is made
								with people in mind.
							</p>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition'
						>
							<h3 className='text-xl font-semibold mb-3 text-indigo-500'>
								Excellence
							</h3>
							<p>
								We sweat the small stuff. Every detail matters and
								quality is non-negotiable.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			<section className='py-20 px-6 text-center bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 text-white'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>
					Join Us on the Journey
				</h2>
				<p className='text-lg max-w-xl mx-auto mb-6'>
					Whether you're a customer or collaborator, we'd love to have
					you on board.
				</p>
				<a
					href='/contact'
					className='inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition'
				>
					Get in Touch
				</a>
			</section>
		</div>
	);
};

export default AboutPage;
