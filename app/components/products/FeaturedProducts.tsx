'use client';

import ProductCard from './ProductCard';

type Product = {
	id: number;
	title: string;
	image: string;
	price: string;
};

type Props = {
	products: Product[];
};

export default function FeaturedProducts({ products }: Props) {
	return (
		<div className='md:ml-12'>
			<h2 className='text-3xl font-bold mb-6 text-gray-800 '>
				Featured Products
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
				{products.map(product => (
					<ProductCard
						key={product.id}
						title={product.title}
						image={product.image}
						price={product.price}
						buttonLabel='Shop Now'
					/>
				))}
			</div>
		</div>
	);
}
