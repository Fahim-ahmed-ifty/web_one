import Image from 'next/image';
import React from 'react';

type TestimonialCardProps = {
	name: string;
	message: string;
	image: string;
	rating: number;
};

const TestimonialCard = ({
	name,
	message,
	image,
	rating
}: TestimonialCardProps) => {
	return (
		<div className='bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col'>
			<div className='p-6'>
				<div className='flex items-center mb-4'>
					<Image
						src={image}
						alt={name}
						width={40}
						height={40}
						className='rounded-full'
					/>
				</div>
				<h3 className='text-lg font-bold text-gray-800'>{name}</h3>
				<p className='text-gray-600'>{message}</p>
				<div className='flex items-center mt-4'>
					{Array.from({ length: rating }).map((_, index) => (
						<svg
							key={index}
							className='w-5 h-5 text-yellow-500'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M10 1l2 5h5l-4 3 1 5-4-3-4 3 1-5-4-3h5z' />
						</svg>
					))}
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
