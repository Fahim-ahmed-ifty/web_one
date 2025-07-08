'use client';

import { testimonials } from '@/constants/testimonials';
import { useState } from 'react';
import { featuredProducts } from '../constants/featuredProducts';
import HeroSection from './components/HeroSection';
import NewsletterSignup from './components/NewsletterSignup';
import FeaturedProducts from './components/products/FeaturedProducts';
import PromoBanner from './components/PromoBanner';
import Testimonial from './components/testimonial/Testimonial';
import WhyShopWithUs from './components/WhyShopWithUs';

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
			<NewsletterSignup />
			<PromoBanner />
			<WhyShopWithUs />
			<Testimonial testimonials={testimonials} />
		</div>
	);
};

export default HomePage;
