'use client';

import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/products/ProductCard';
import { products } from '../lib/shopProducts';

const ShopPage = () => {
	const [selectedCategories, setSelectedCategories] = useState<
		string[]
	>([]);
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(1000);

	const handleCategoryChange = (category: string) => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(c => c !== category)
				: [...prev, category]
		);
	};

	const filteredProducts = products.filter(product => {
		const matchCategory =
			selectedCategories.length === 0 ||
			selectedCategories.includes(product.category);
		const matchPrice =
			product.price >= minPrice && product.price <= maxPrice;
		return matchCategory && matchPrice;
	});

	return (
		<div className='flex min-h-screen px-4 md:px-12 py-10 gap-6 bg-gray-100'>
			<FilterSidebar
				selectedCategories={selectedCategories}
				onCategoryChange={handleCategoryChange}
				minPrice={minPrice}
				maxPrice={maxPrice}
				onMinPriceChange={setMinPrice}
				onMaxPriceChange={setMaxPrice}
			/>
			<div className='flex-1'>
				<h2 className='text-3xl font-bold mb-6 text-gray-800'>
					Shop Our Products
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
					{filteredProducts.map(product => (
						<ProductCard
							key={product.id}
							title={product.name}
							image={product.image}
							price={`$${product.price}`}
							buttonLabel='Add to Cart'
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ShopPage;
