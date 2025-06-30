import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from './components/Footer';
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

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<SideCategoryNavbar />
				<div className='pt-16 md:pt-20'>{children}</div>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
