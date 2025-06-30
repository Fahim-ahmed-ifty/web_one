'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Image
							src='https://images.unsplash.com/photo-1523275335684-37898b6baf30'
							alt='team'
							width={600}
							height={400}
							className='rounded-2xl shadow-lg object-cover'
							priority
						/>
					</motion.div>
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

			{/* Mission & Vision Section */}
			<section className='bg-white py-20 px-6'>
				<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
					<div>
						<h2 className='text-3xl font-bold mb-4 text-indigo-700'>
							Our Mission
						</h2>
						<p className='text-lg text-gray-700 mb-6'>
							To revolutionize online shopping by blending technology,
							creativity, and empathy, delivering seamless and
							delightful experiences for every customer.
						</p>
						<h2 className='text-3xl font-bold mb-4 text-pink-600'>
							Our Vision
						</h2>
						<p className='text-lg text-gray-700'>
							To be the world's most customer-centric and innovative
							digital marketplace, inspiring trust and excitement in
							every interaction.
						</p>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Image
							src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
							alt='mission-vision'
							width={600}
							height={400}
							className='rounded-2xl shadow-lg object-cover'
							priority
						/>
					</motion.div>
				</div>
			</section>

			{/* Team Section */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-3xl font-bold mb-12'>Meet the Team</h2>
					<div className='grid md:grid-cols-3 gap-10'>
						{[
							{
								name: 'Alex Johnson',
								role: 'CEO & Founder',
								img: 'https://randomuser.me/api/portraits/men/32.jpg'
							},
							{
								name: 'Samantha Lee',
								role: 'Lead Designer',
								img: 'https://randomuser.me/api/portraits/women/44.jpg'
							},
							{
								name: 'Michael Chen',
								role: 'Head of Engineering',
								img: 'https://randomuser.me/api/portraits/men/65.jpg'
							}
						].map((member, idx) => (
							<motion.div
								key={member.name}
								whileHover={{ scale: 1.05 }}
								className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
							>
								<Image
									src={member.img}
									alt={member.name}
									width={96}
									height={96}
									className='w-24 h-24 rounded-full mb-4 object-cover border-4 border-pink-200'
									priority={idx === 0}
								/>
								<h3 className='text-xl font-semibold mb-1'>
									{member.name}
								</h3>
								<p className='text-pink-600 font-medium'>
									{member.role}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className='py-20 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-bold mb-12 text-center'>
						Our Journey
					</h2>
					<div className='relative border-l-4 border-pink-400 pl-8'>
						{[
							{
								year: '2022',
								event:
									'Founded NextGen Shop with a vision for smarter shopping.'
							},
							{
								year: '2023',
								event:
									'Launched our first platform and reached 10,000+ users.'
							},
							{
								year: '2024',
								event:
									'Expanded product lines and introduced AI-powered recommendations.'
							}
						].map((item, idx) => (
							<div key={item.year} className='mb-10'>
								<div className='flex items-center mb-2'>
									<div className='w-4 h-4 bg-pink-400 rounded-full mr-4'></div>
									<span className='text-lg font-bold text-pink-600'>
										{item.year}
									</span>
								</div>
								<p className='text-gray-700'>{item.event}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='bg-white py-20 px-6'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-3xl font-bold mb-12'>
						What People Say
					</h2>
					<div className='grid md:grid-cols-2 gap-10'>
						{[
							{
								quote:
									'NextGen Shop made my online shopping experience effortless and fun! Highly recommended.',
								name: 'Emily R.',
								role: 'Customer'
							},
							{
								quote:
									'A truly innovative team that cares about their users. Love the design and speed!',
								name: 'David K.',
								role: 'Partner'
							}
						].map((testimonial, idx) => (
							<motion.div
								key={testimonial.name}
								whileHover={{ scale: 1.03 }}
								className='bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition text-left'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
							>
								<p className='text-lg italic mb-4'>
									"{testimonial.quote}"
								</p>
								<p className='font-semibold text-pink-600'>
									{testimonial.name}
								</p>
								<p className='text-sm text-gray-500'>
									{testimonial.role}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
