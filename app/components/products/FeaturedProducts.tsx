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
		<div className='md:ml-12 mb-16'>
			<h2 className='flex text-2xl lg:text-4xl font-bold mb-6 text-gray-800 justify-center'>
				Featured Products
			</h2>

			<div className='px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{products.map(product => (
					<ProductCard
						key={product.id}
						image={product.image}
						price={product.price}
						buttonLabel='Shop Now'
						{...{ title: product.title }}
					/>
				))}
			</div>
		</div>
	);
}
