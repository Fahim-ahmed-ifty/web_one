'use client';

import { useHeight } from '@/hooks/UseHeight';
import {
	ArrowRight,
	ChevronDown,
	ChevronRight,
	Menu,
	X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import categories from '../../constants/categories';
import Button from './Button';

const SideCategoryNavbar = () => {
	const [open, setOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [expandedCategories, setExpandedCategories] = useState<
		Set<string>
	>(new Set());
	const isScrolled = useHeight(500); // Slightly different threshold than main navbar

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Split categories: first 5 for desktop navbar, rest for sidebar
	const desktopCategories = categories.slice(0, 5);
	const sidebarCategories = categories.slice(5);

	// Toggle category expansion
	const toggleCategory = (categoryTitle: string) => {
		setExpandedCategories(prev => {
			const newSet = new Set(prev);
			if (newSet.has(categoryTitle)) {
				newSet.delete(categoryTitle);
			} else {
				newSet.add(categoryTitle);
			}
			return newSet;
		});
	};

	// Show all subcategories for a category
	const showAllSubcategories = (categoryTitle: string) => {
		setExpandedCategories(prev => new Set([...prev, categoryTitle]));
	};

	return (
		<>
			{/* Desktop full-width navbar */}
			<div
				className={`fixed top-18 left-0 w-full z-40 hidden md:block transition-all duration-300 ${
					isMounted && isScrolled
						? 'bg-white/70 shadow-md backdrop-blur-md border-b border-gray-200/50 '
						: 'bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600'
				}`}
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-center py-3'>
						{/* Categories in the middle */}
						<div className='flex items-center space-x-8'>
							{/* Hamburger menu for desktop */}
							<Button
								onClick={() => setOpen(true)}
								variant='ghost'
								size='sm'
								leftIcon={<Menu />}
								rightIcon={<ChevronDown />}
								className={`transition-all duration-300 font-medium text-sm hover:scale-105 ${
									isMounted && isScrolled
										? 'text-gray-800 hover:text-purple-800'
										: 'text-white hover:text-purple-800'
								}`}
							>
								<span>All Categories</span>
							</Button>
							{desktopCategories.map((cat, index) => (
								<div key={cat.title} className='relative group'>
									<Button
										variant='ghost'
										size='sm'
										rightIcon={<ChevronDown />}
										className={`transition-all duration-300 font-medium text-sm hover:scale-105 ${
											isMounted && isScrolled
												? 'text-gray-800 hover:text-purple-800'
												: 'text-white hover:text-purple-800'
										}`}
									>
										{cat.title}
									</Button>
									{/* Enhanced Dropdown for subcategories */}
									<div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 bg-gray-200/90 backdrop-blur-sm shadow-xl  rounded-2xl  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 border border-gray-100/50 overflow-hidden'>
										{/* Dropdown arrow */}
										<div className='absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 backdrop-blur-2xl rotate-45 border-l border-t border-gray-100/50'></div>

										{/* Header */}
										<div className='bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3'>
											<h3 className='font-semibold text-sm'>
												{cat.title}
											</h3>
											<p className='text-xs opacity-90'>
												Explore our collection
											</p>
										</div>

										{/* Subcategories with scroll */}
										<div className='max-h-64 overflow-y-auto custom-scrollbar'>
											<div className='py-2'>
												{cat.sub.map((sub, subIndex) => (
													<a
														key={sub}
														href='#'
														className='block px-4 py-3 text-sm text-gray-700 hover:text-purple-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-50 transition-all duration-300 border-l-2 border-transparent hover:border-purple-600 group/item'
														style={{
															animationDelay: `${subIndex * 50}ms`
														}}
													>
														<div className='flex items-center justify-between'>
															<span className='group-hover/item:translate-x-1 transition-transform duration-300'>
																{sub}
															</span>
															<ChevronRight className='w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 group-hover/item:translate-x-1' />
														</div>
													</a>
												))}
											</div>
										</div>

										{/* Footer */}
										<div className='bg-gray-50/50 px-4 py-2 border-t border-gray-100/50'>
											<a
												href='#'
												className='text-xs text-purple-800 hover:text-purple-800 font-medium transition-colors duration-300'
											>
												View All {cat.title} →
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Mobile side panel button */}
			<Button
				onClick={() => setOpen(true)}
				variant='ghost'
				size='sm'
				leftIcon={<ArrowRight />}
				className='fixed top-24 lg:top-22 -translate-y-1/2 left-0 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-r-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg md:hidden'
			>
				<span className='sr-only'>Open Categories</span>
			</Button>

			{/* Enhanced Side panel for both mobile and desktop */}
			<div
				className={`fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-2xl shadow-2xl transform transition-all duration-500 ease-out z-50 border-r border-gray-200/50 ${
					open ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				{/* Header with gradient */}
				<div className='bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white p-6'>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-xl font-bold'>All Categories</h3>
							<p className='text-sm opacity-90 mt-1'>
								Browse our complete collection
							</p>
						</div>
						<Button
							onClick={() => setOpen(false)}
							variant='ghost'
							size='sm'
							leftIcon={<X />}
							className='text-white hover:text-pink-200 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/20'
						>
							<span className='sr-only'>Close</span>
						</Button>
					</div>
				</div>

				{/* Categories with enhanced styling */}
				<div className='p-6 space-y-6 overflow-y-auto max-h-screen custom-scrollbar'>
					{categories.map((cat, index) => {
						const isExpanded = expandedCategories.has(cat.title);
						const hasMoreItems = cat.sub.length > 6;

						return (
							<div key={cat.title} className='group'>
								<div
									className='flex items-center justify-between mb-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 cursor-pointer'
									onClick={() => toggleCategory(cat.title)}
								>
									<h4 className='font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300'>
										{cat.title}
									</h4>
									<ChevronRight
										className={`w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-all duration-300 ${
											isExpanded
												? 'rotate-90'
												: 'group-hover:translate-x-1'
										}`}
									/>
								</div>
								<div className='ml-4 space-y-2'>
									{/* Show first 6 items always */}
									{cat.sub.slice(0, 6).map((sub, subIndex) => (
										<div
											key={sub}
											className='text-gray-600 hover:text-pink-600 cursor-pointer text-sm transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group/item'
										>
											<div className='w-1 h-1 bg-gray-300 group-hover/item:bg-pink-500 rounded-full transition-all duration-300'></div>
											<span>{sub}</span>
										</div>
									))}

									{/* Show remaining items when expanded */}
									{isExpanded && hasMoreItems && (
										<div className='space-y-2 mt-3 pt-3 border-t border-gray-100'>
											{cat.sub.slice(6).map((sub, subIndex) => (
												<div
													key={sub}
													className='text-gray-600 hover:text-pink-600 cursor-pointer text-sm transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group/item'
													style={{
														animationDelay: `${subIndex * 50}ms`
													}}
												>
													<div className='w-1 h-1 bg-gray-300 group-hover/item:bg-pink-500 rounded-full transition-all duration-300'></div>
													<span>{sub}</span>
												</div>
											))}
										</div>
									)}

									{/* Show/hide more items button */}
									{hasMoreItems && (
										<Button
											onClick={e => {
												e.stopPropagation();
												if (isExpanded) {
													toggleCategory(cat.title);
												} else {
													showAllSubcategories(cat.title);
												}
											}}
											variant='ghost'
											size='sm'
											leftIcon={
												isExpanded ? (
													<ChevronDown />
												) : (
													<ChevronRight />
												)
											}
											className='text-pink-500 hover:text-pink-600 cursor-pointer transition-colors duration-300 pt-2 flex items-center gap-1 hover:scale-105'
										>
											{isExpanded ? (
												<>Show Less</>
											) : (
												<>+{cat.sub.length - 6} more items</>
											)}
										</Button>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Enhanced Overlay */}
			{open && (
				<div
					className='fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-all duration-300'
					onClick={() => setOpen(false)}
				/>
			)}

			{/* Custom scrollbar styles */}
			<style jsx>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 6px;
				}
				.custom-scrollbar::-webkit-scrollbar-track {
					background: transparent;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: linear-gradient(to bottom, #ec4899, #8b5cf6);
					border-radius: 3px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: linear-gradient(to bottom, #db2777, #7c3aed);
				}
			`}</style>
		</>
	);
};

export default SideCategoryNavbar;
