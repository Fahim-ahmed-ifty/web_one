import {
	Award,
	Clock,
	CreditCard,
	Headphones,
	Shield,
	Star,
	Truck,
	Zap
} from 'lucide-react';

export interface ShopFeature {
	iconName: string;
	title: string;
	description: string;
	color: string;
}

export const whyShopFeatures: ShopFeature[] = [
	{
		iconName: 'Truck',
		title: 'Free Fast Shipping',
		description:
			'Free shipping on all orders over $50 with 2-3 day delivery',
		color: 'from-blue-500 to-cyan-500'
	},
	{
		iconName: 'Shield',
		title: 'Secure Shopping',
		description:
			'256-bit SSL encryption keeps your data safe and secure',
		color: 'from-green-500 to-emerald-500'
	},
	{
		iconName: 'Headphones',
		title: '24/7 Support',
		description:
			'Round-the-clock customer support to help you anytime',
		color: 'from-purple-500 to-pink-500'
	},
	{
		iconName: 'Award',
		title: 'Premium Quality',
		description:
			'Curated products from top brands and artisans worldwide',
		color: 'from-yellow-500 to-orange-500'
	},
	{
		iconName: 'CreditCard',
		title: 'Easy Returns',
		description:
			'30-day hassle-free returns with full refund guarantee',
		color: 'from-red-500 to-pink-500'
	},
	{
		iconName: 'Zap',
		title: 'Lightning Fast',
		description:
			'Next-gen technology ensures instant checkout and updates',
		color: 'from-indigo-500 to-purple-500'
	}
];
