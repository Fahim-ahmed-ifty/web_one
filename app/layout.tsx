import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from './components/Navbar';
import SideCategoryNavbar from './components/SideCategoryNavbar';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'NextGen Shop',
	description: 'Developed by Fahim Ahmed Ifty'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<SideCategoryNavbar />
				<div className='pt-16'>{children}</div>
				<div className='h-[40rem]'></div>
			</body>
		</html>
	);
}
