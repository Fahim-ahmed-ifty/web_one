'use client';

import { ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import categories from '../lib/categories';

export default function SideCategoryNavbar() {
	const [open, setOpen] = useState(false);

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
