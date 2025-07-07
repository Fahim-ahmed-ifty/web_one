import React from 'react';
import TestimonialCard from './TestimonialCard';

type TestimonialProps = {
	name: string;
	message: string;
	image: string;
	rating: number;
};

type Props = {
	testimonials: TestimonialProps[];
};

const Testimonial = ({ testimonials }: Props) => {
	return (
		<div className='md:m-12'>
			<h2 className='flex text-2xl lg:text-4xl font-bold mb-6 text-gray-800 justify-center'>
				Testimonials
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{testimonials.map(testimonial => (
					<TestimonialCard key={testimonial.name} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default Testimonial;
