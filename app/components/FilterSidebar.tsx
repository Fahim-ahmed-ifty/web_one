'use client';
import React, { useEffect, useRef, useState } from 'react';

const FilterSidebar = ({
	selectedCategories,
	onCategoryChange,
	minPrice,
	maxPrice,
	onMinPriceChange,
	onMaxPriceChange
}: {
	selectedCategories: string[];
	onCategoryChange: (category: string) => void;
	minPrice: number;
	maxPrice: number;
	onMinPriceChange: (price: number) => void;
	onMaxPriceChange: (price: number) => void;
}) => {
	const categories = [
		'Bags',
		'Watches',
		'Shoes',
		'Sunglasses',
		'Electronics'
	];

	const sliderRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(
		null
	);

	const handleMouseDown = (
		e: React.MouseEvent,
		type: 'min' | 'max'
	) => {
		setIsDragging(type);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging || !sliderRef.current) return;

		const rect = sliderRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const percentage = Math.max(
			0,
			Math.min(100, (x / rect.width) * 100)
		);
		const value = Math.round((percentage / 100) * 1000);

		if (isDragging === 'min') {
			const newMin = Math.min(value, maxPrice - 50);
			onMinPriceChange(newMin);
		} else {
			const newMax = Math.max(value, minPrice + 50);
			onMaxPriceChange(newMax);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(null);
	};

	useEffect(() => {
		if (isDragging) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
				document.removeEventListener('mouseup', handleMouseUp);
			};
		}
	}, [isDragging, minPrice, maxPrice]);

	const minPercentage = (minPrice / 1000) * 100;
	const maxPercentage = (maxPrice / 1000) * 100;

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
				<h3 className='text-lg font-semibold mb-2'>Price Range</h3>
				<div className='space-y-4'>
					<div className='relative h-6' ref={sliderRef}>
						{/* Track */}
						<div className='absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-200 rounded-full'>
							{/* Selected range */}
							<div
								className='absolute h-2 bg-pink-400 rounded-full'
								style={{
									left: `${minPercentage}%`,
									width: `${maxPercentage - minPercentage}%`
								}}
							/>
						</div>

						{/* Min handle */}
						<div
							className='absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform'
							style={{
								left: `${minPercentage}%`,
								marginLeft: '-8px'
							}}
							onMouseDown={e => handleMouseDown(e, 'min')}
						/>

						{/* Max handle */}
						<div
							className='absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform'
							style={{
								left: `${maxPercentage}%`,
								marginLeft: '-8px'
							}}
							onMouseDown={e => handleMouseDown(e, 'max')}
						/>
					</div>

					<p className='text-sm text-gray-600 text-center'>
						${minPrice} - ${maxPrice}
					</p>
				</div>
			</div>
		</aside>
	);
};

export default FilterSidebar;
