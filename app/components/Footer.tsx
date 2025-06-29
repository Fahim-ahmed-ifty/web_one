import {
	ArrowRight,
	Facebook,
	Heart,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter
} from 'lucide-react';
import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white'>
			{/* Main Footer Content */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-extrabold tracking-wide drop-shadow-md'>
							NextGen Shop
						</h3>
						<p className='text-sm opacity-90 leading-relaxed'>
							Elevate your style with our exclusive collections.
							Discover unique, handpicked products crafted for you.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='hover:text-pink-400 transition-colors duration-300'
							>
								<Facebook className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='hover:text-pink-400 transition-colors duration-300'
							>
								<Instagram className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='hover:text-pink-400 transition-colors duration-300'
							>
								<Twitter className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className='space-y-4'>
						<h4 className='text-lg font-semibold'>Quick Links</h4>
						<ul className='space-y-2'>
							<li>
								<a
									href='/'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='/shop'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									Shop
								</a>
							</li>
							<li>
								<a
									href='/about'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href='/contact'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div className='space-y-4'>
						<h4 className='text-lg font-semibold'>
							Customer Service
						</h4>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									Shipping Info
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									Returns & Exchanges
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									Size Guide
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm opacity-90 hover:text-pink-400 transition-colors duration-300'
								>
									FAQ
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter & Contact */}
					<div className='space-y-4'>
						<h4 className='text-lg font-semibold'>Stay Updated</h4>
						<p className='text-sm opacity-90'>
							Subscribe to our newsletter for exclusive offers and
							updates.
						</p>
						<div className='flex'>
							<input
								type='email'
								placeholder='Enter your email'
								className='flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-pink-400 placeholder-white/60'
							/>
							<button className='px-4 py-2 bg-pink-400 hover:bg-pink-500 transition-colors duration-300 rounded-r-lg'>
								<ArrowRight className='w-4 h-4' />
							</button>
						</div>

						{/* Contact Info */}
						<div className='space-y-2 pt-4'>
							<div className='flex items-center space-x-2 text-sm opacity-90'>
								<Mail className='w-4 h-4' />
								<span>support@nextgenshop.com</span>
							</div>
							<div className='flex items-center space-x-2 text-sm opacity-90'>
								<Phone className='w-4 h-4' />
								<span>+1 (555) 123-4567</span>
							</div>
							<div className='flex items-center space-x-2 text-sm opacity-90'>
								<MapPin className='w-4 h-4' />
								<span>123 Fashion St, Style City</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='border-t border-white/20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
					<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
						<div className='text-sm opacity-80 text-center md:text-left'>
							© {currentYear} NextGen Shop. All rights reserved.
						</div>
						<div className='flex items-center space-x-6 text-sm opacity-80'>
							<a
								href='#'
								className='hover:text-pink-400 transition-colors duration-300'
							>
								Privacy Policy
							</a>
							<a
								href='#'
								className='hover:text-pink-400 transition-colors duration-300'
							>
								Terms of Service
							</a>
							<a
								href='#'
								className='hover:text-pink-400 transition-colors duration-300'
							>
								Cookie Policy
							</a>
						</div>
					</div>
					<div className='text-center mt-4 text-xs opacity-60'>
						Made with{' '}
						<Heart className='w-3 h-3 inline text-pink-400' /> for
						fashion enthusiasts
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
