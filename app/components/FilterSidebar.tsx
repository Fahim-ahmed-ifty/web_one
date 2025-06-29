'use client';
import React from 'react';

export default function FilterSidebar({
	selectedCategories,
	onCategoryChange,
	maxPrice,
	onPriceChange
}: {
	selectedCategories: string[];
	onCategoryChange: (category: string) => void;
	maxPrice: number;
	onPriceChange: (price: number) => void;
}) {
	const categories = ['Bags', 'Watches', 'Shoes', 'Sunglasses'];

	return (
		<aside className='w-full md:w-64 p-6 shadow-md space-y-6 border-r-2'>
			<div>
				<h3 className='text-lg font-semibold mb-2'>Categories</h3>
				<ul className='space-y-1'>
					{categories.map(category => (
						<li key={category}>
							<label className='inline-flex items-center space-x-2'>
								<input
									type='checkbox'
									checked={selectedCategories.includes(category)}
									onChange={() => onCategoryChange(category)}
									className='accent-pink-500'
								/>
								<span>{category}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h3 className='text-lg font-semibold mb-2'>Max Price</h3>
				<input
					type='range'
					min='0'
					max='500'
					value={maxPrice}
					onChange={e => onPriceChange(Number(e.target.value))}
					className='w-full accent-pink-500'
				/>
				<p className='text-sm mt-1 text-gray-600'>0 - ${maxPrice}</p>
			</div>
		</aside>
	);
}
