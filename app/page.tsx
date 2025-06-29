'use client';

import { useState } from 'react';
import FilterSidebar from './components/FilterSidebar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/products/FeaturedProducts';
import { featuredProducts } from './lib/featuredProducts';

export default function HomePage() {
	const [selectedCategories, setSelectedCategories] = useState<
		string[]
	>([]);
	const [maxPrice, setMaxPrice] = useState<number>(500);

	const handleCategoryChange = (category: string) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(prev => prev.filter(c => c !== category));
		} else {
			setSelectedCategories(prev => [...prev, category]);
		}
	};

	// Optional: if you want to add categories to your featured products
	const filteredProducts = featuredProducts.filter(product => {
		const numericPrice = parseFloat(product.price.replace('$', ''));
		const matchesPrice = numericPrice <= maxPrice;

		const matchesCategory =
			selectedCategories.length === 0 ||
			selectedCategories.some(cat =>
				product.title.toLowerCase().includes(cat.toLowerCase())
			);

		return matchesPrice && matchesCategory;
	});

	return (
		<div className='space-y-12'>
			<HeroSection />

			<div className='mx-auto px-4 md:px-10 lg:px-18 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4'>
				<FilterSidebar
					selectedCategories={selectedCategories}
					onCategoryChange={handleCategoryChange}
					maxPrice={maxPrice}
					onPriceChange={setMaxPrice}
				/>
				<FeaturedProducts products={filteredProducts} />
			</div>
		</div>
	);
}
