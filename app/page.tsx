'use client';

import FilterSidebar from './components/FilterSidebar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/products/FeaturedProducts';

const page = () => {
	return (
		<div className='space-y-12'>
			<HeroSection />

			<div className='mx-auto px-4 md:px-10 lg:px-18 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4'>
				<FilterSidebar />
				<FeaturedProducts />
			</div>
		</div>
	);
};

export default page;
