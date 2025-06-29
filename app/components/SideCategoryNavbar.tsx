'use client';

import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { useHeight } from '../hooks/UseHeight';
import categories from '../lib/categories';

export default function SideCategoryNavbar() {
	const [open, setOpen] = useState(false);
	const isScrolled = useHeight(600);

	// Show categories in main navbar when not scrolled (desktop only)
	if (!isScrolled) {
		return (
			<>
				{/* Desktop full-width navbar */}
				<div className='fixed top-16 left-0 w-full bg-gradient-to-r from-indigo-900/80 via-purple-800/80 to-pink-700/80 backdrop-blur-sm border-b border-white/20 z-40 hidden md:block'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex items-center justify-center py-3'>
							{/* Categories in the middle */}
							<div className='flex items-center space-x-8'>
								{categories.map((cat, index) => (
									<div key={cat.title} className='relative group'>
										<button className='text-white hover:text-pink-400 transition-colors duration-300 font-medium text-sm'>
											{cat.title}
										</button>
										{/* Dropdown for subcategories */}
										<div className='absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
											<div className='py-2'>
												{cat.sub.map(sub => (
													<a
														key={sub}
														href='#'
														className='block px-4 py-2 text-sm text-gray-800 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200'
													>
														{sub}
													</a>
												))}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Mobile side panel button */}
				<button
					onClick={() => setOpen(true)}
					className='fixed top-24 lg:top-22 -translate-y-1/2 left-0 z-50 bg-pink-500 text-white px-4 py-2 rounded-r-xl flex items-center gap-2 transition hover:bg-pink-600 md:hidden'
				>
					<ChevronRight className='w-4 h-4' />
					<span className='text-sm font-semibold tracking-wide'>
						Categories
					</span>
				</button>

				{/* Side panel for mobile */}
				<div
					className={`fixed top-0 left-0 h-full w-72 bg-white/55 backdrop-blur-2xl shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
						open ? 'translate-x-0' : '-translate-x-full'
					}`}
				>
					<div className='flex items-center justify-between p-4 border-b'>
						<h3 className='text-lg font-bold'>All Categories</h3>
						<button
							onClick={() => setOpen(false)}
							className='text-black hover:text-pink-500 transition'
						>
							<X className='w-6 h-6' />
						</button>
					</div>

					<div className='p-4 space-y-6 overflow-y-auto max-h-screen'>
						{categories.map(cat => (
							<div key={cat.title}>
								<h4 className='font-semibold text-black mb-2'>
									{cat.title}
								</h4>
								<ul className='space-y-1 ml-4'>
									{cat.sub.map(sub => (
										<li
											key={sub}
											className='text-black hover:text-pink-600 cursor-pointer text-sm transition'
										>
											{sub}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Mobile overlay */}
				{open && (
					<div
						className='fixed inset-0 bg-black/30 z-30 md:hidden'
						onClick={() => setOpen(false)}
					/>
				)}
			</>
		);
	}

	// Show side panel button when scrolled (both mobile and desktop)
	return (
		<>
			{!open && (
				<button
					onClick={() => setOpen(true)}
					className='fixed top-24 lg:top-22 -translate-y-1/2 left-0 z-50 bg-pink-500 text-white px-4 py-2 rounded-r-xl flex items-center gap-2 transition hover:bg-pink-600'
				>
					<ChevronRight className='w-4 h-4' />
					<span className='text-sm font-semibold tracking-wide'>
						Categories
					</span>
				</button>
			)}

			<div
				className={`fixed top-0 left-0 h-full w-72 bg-white/55 backdrop-blur-2xl shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
					open ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between p-4 border-b'>
					<h3 className='text-lg font-bold'>All Categories</h3>
					<button
						onClick={() => setOpen(false)}
						className='text-black hover:text-pink-500 transition'
					>
						<X className='w-6 h-6' />
					</button>
				</div>

				<div className='p-4 space-y-6 overflow-y-auto max-h-screen'>
					{categories.map(cat => (
						<div key={cat.title}>
							<h4 className='font-semibold text-black mb-2'>
								{cat.title}
							</h4>
							<ul className='space-y-1 ml-4'>
								{cat.sub.map(sub => (
									<li
										key={sub}
										className='text-black hover:text-pink-600 cursor-pointer text-sm transition'
									>
										{sub}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{open && (
				<div
					className='fixed inset-0 bg-black/30 z-30'
					onClick={() => setOpen(false)}
				/>
			)}
		</>
	);
}
