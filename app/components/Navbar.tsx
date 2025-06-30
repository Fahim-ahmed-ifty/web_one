'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useHeight } from '../hooks/UseHeight';
import { useAuth } from '../hooks/useAuth';
import { logoutUser } from '../lib/actions';

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'Shop', href: '/shop' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' }
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, isLoading, refreshUser } = useAuth();
	const isScrolled = useHeight(600);
	const router = useRouter();

	const handleLogout = async () => {
		try {
			const result = await logoutUser();
			if (result.success) {
				setIsOpen(false);
				refreshUser();
				router.push('/');
				router.refresh();
			}
		} catch (error) {
			console.error('Logout error:', error);
		}
	};

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
				<div className='hidden md:flex items-center space-x-10'>
					<ul className='flex space-x-10 transition'>
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

					{/* Desktop Auth Buttons */}
					<div className='flex items-center space-x-4 ml-8'>
						{!isLoading && (
							<>
								{user ? (
									<div className='flex items-center space-x-3'>
										<div className='flex items-center space-x-2'>
											<User className='w-5 h-5' />
											<span className='text-sm'>
												{user.name || user.email}
											</span>
										</div>
										<button
											onClick={handleLogout}
											className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
												isScrolled
													? 'text-gray-700 hover:text-black border border-gray-300 hover:border-gray-500'
													: 'text-white hover:text-pink-200 border border-white/30 hover:border-white/50'
											}`}
										>
											<LogOut className='w-4 h-4' />
											<span>Logout</span>
										</button>
									</div>
								) : (
									<>
										<a
											href='/login'
											className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
												isScrolled
													? 'text-gray-700 hover:text-black border border-gray-300 hover:border-gray-500'
													: 'text-white hover:text-pink-200 border border-white/30 hover:border-white/50'
											}`}
										>
											Login
										</a>
										<a
											href='/register'
											className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
												isScrolled
													? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
													: 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
											}`}
										>
											Register
										</a>
									</>
								)}
							</>
						)}
					</div>
				</div>

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
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
						className='md:hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 px-6 py-6 space-y-5 font-semibold text-white'
					>
						<ul className='space-y-5'>
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
						</ul>

						{/* Mobile Auth Buttons */}
						<div className='pt-4 border-t border-white/20 space-y-3'>
							{!isLoading && (
								<>
									{user ? (
										<>
											<div className='flex items-center space-x-2 py-2'>
												<User className='w-5 h-5' />
												<span className='text-sm'>
													{user.name || user.email}
												</span>
											</div>
											<button
												onClick={() => {
													handleLogout();
													setIsOpen(false);
												}}
												className='w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 border border-white/30 hover:border-white/50'
											>
												<LogOut className='w-4 h-4' />
												<span>Logout</span>
											</button>
										</>
									) : (
										<>
											<a
												href='/login'
												className='block w-full text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 border border-white/30 hover:border-white/50'
												onClick={() => setIsOpen(false)}
											>
												Login
											</a>
											<a
												href='/register'
												className='block w-full text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30'
												onClick={() => setIsOpen(false)}
											>
												Register
											</a>
										</>
									)}
								</>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
