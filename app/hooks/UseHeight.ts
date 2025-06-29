import { useEffect, useState } from 'react';

export function useHeight(threshold: number) {
	const [isPastThreshold, setIsPastThreshold] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsPastThreshold(scrollY > threshold);
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);
	return isPastThreshold;
}
