'use client';
import React, { useState } from 'react';

export default function FilterSidebar() {
	const [price, setPrice] = useState([0, 1000]);
	const categories = ['Bags', 'Watches', 'Shoes', 'Sunglasses'];

	return (
		<aside className='w-full md:w-64 p-6 shadow-md space-y-6 border-r-2'>
			<div>
				<h3 className='text-lg font-semibold mb-2'>Categories</h3>
				<ul className='space-y-1'>
					{categories.map(category => (
						<li key={category}>
							<label className='inline-flex items-center space-x-2'>
								<input type='checkbox' className='accent-pink-500' />
								<span>{category}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h3 className='text-lg font-semibold mb-2'>Price Range</h3>
				<input
					type='range'
					min='0'
					max='500'
					value={price[1]}
					onChange={e => setPrice([0, Number(e.target.value)])}
					className='w-full accent-pink-500'
				/>
				<p className='text-sm mt-1 text-gray-600'>
					${price[0]} - ${price[1]}
				</p>
			</div>
		</aside>
	);
}
