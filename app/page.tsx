import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/products/FeaturedProducts';

const page = () => {
	return (
		<div>
			<HeroSection />
			<FeaturedProducts />
		</div>
	);
};

export default page;
