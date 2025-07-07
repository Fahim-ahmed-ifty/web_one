import React from 'react';
import Button from './Button';

const PromoBanner = () => {
	return (
		<div className='bg-gradient-to-r from-yellow-100 to-pink-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg  max-w-5xl mx-auto text-center'>
			<h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight'>
				🎉 Summer Sale is Live! Up to 50% Off on Selected Items
			</h2>
			<p className='text-sm sm:text-base md:text-lg text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto'>
				Limited time only. Don't miss out on these amazing deals!
			</p>
			<div className='mt-4 sm:mt-6'>
				<Button
					variant='primary'
					size='xl'
					className='text-sm sm:text-base rounded-full'
				>
					Grab the Deals
				</Button>
			</div>
		</div>
	);
};

export default PromoBanner;
