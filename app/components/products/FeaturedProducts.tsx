import { products } from '@/app/lib/product';
import React from 'react';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
	return (
		<section className='bg-gray-50 py-20 px-6 md:px-20'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-4'>
						Featured Picks
					</h2>
					<p className='text-gray-600 text-lg max-w-2xl mx-auto'>
						Discover top trending products curated just for you
					</p>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{products.map(product => (
						<ProductCard
							key={product.id}
							title={product.title}
							image={product.image}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
