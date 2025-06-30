'use client';

import { useState } from 'react';
import { featuredProducts } from '../constants/featuredProducts';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/products/FeaturedProducts';

const HomePage = () => {
	const [selectedCategories] = useState<string[]>([]);

	// Optional: if you want to add categories to your featured products
	const filteredProducts = featuredProducts.filter(product => {
		const matchesCategory =
			selectedCategories.length === 0 ||
			selectedCategories.includes(product.category);

		return matchesCategory;
	});

	return (
		<div className='space-y-12 pb-16'>
			<HeroSection />
			<FeaturedProducts products={filteredProducts} />
		</div>
	);
};

export default HomePage;
