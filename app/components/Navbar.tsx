'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useHeight } from '../hooks/UseHeight';

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'Shop', href: '/shop' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' }
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isScrolled = useHeight(600);

	return (
		<nav
			className={`fixed left-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/40 shadow-md text-black backdrop-blur-sm'
					: 'bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white'
			}`}
		>
			<div className='max-w-8xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between font-semibold'>
				<a
					href='/'
					className='text-2xl font-extrabold tracking-wide drop-shadow-md'
				>
					NextGen Shop
				</a>

				{/* Desktop Links */}
				<ul className='hidden md:flex space-x-10  transition'>
					{links.map(link => (
						<li key={link.name}>
							<a
								href={link.href}
								className='hover:text-pink-400 transition'
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				{/* Hamburger */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-label='Toggle menu'
					className='md:hidden flex flex-col justify-center items-center w-10 h-10 relative group text-white'
				>
					<motion.span
						animate={
							isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
						}
						transition={{ duration: 0.3 }}
						className='block w-7 h-0.5 bg-white rounded'
					/>
					<motion.span
						animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
						transition={{ duration: 0.2 }}
						className='block w-7 h-0.5 bg-white rounded my-1.5'
					/>
					<motion.span
						animate={
							isOpen ? { rotate: -45, y: -8.5 } : { rotate: 0, y: 0 }
						}
						transition={{ duration: 0.3 }}
						className='block w-7 h-0.5 bg-white rounded'
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
						className='md:hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 px-6 py-6 space-y-5 font-semibold text-white'
					>
						{links.map(link => (
							<li key={link.name}>
								<a
									href={link.href}
									className='block hover:text-pink-400 transition'
									onClick={() => setIsOpen(false)}
								>
									{link.name}
								</a>
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
