import React from 'react';

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'outline'
	| 'ghost'
	| 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
	fullWidth?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	className?: string;
	children: React.ReactNode;
}

const baseStyles =
	'inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'bg-pink-500 text-white hover:bg-pink-600',
	secondary: 'bg-purple-600 text-white hover:bg-purple-700',
	outline:
		'bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-50',
	ghost: 'bg-transparent text-black hover:bg-pink-50',
	danger: 'bg-red-500 text-white hover:bg-red-600'
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-base',
	lg: 'px-6 py-3 text-lg'
};

const Spinner = () => (
	<svg
		className='animate-spin h-5 w-5 mr-2 text-current'
		viewBox='0 0 24 24'
	>
		<circle
			className='opacity-25'
			cx='12'
			cy='12'
			r='10'
			stroke='currentColor'
			strokeWidth='4'
			fill='none'
		/>
		<path
			className='opacity-75'
			fill='currentColor'
			d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
		/>
	</svg>
);

const Button = ({
	variant = 'primary',
	size = 'md',
	loading = false,
	fullWidth = false,
	leftIcon,
	rightIcon,
	className = '',
	children,
	disabled,
	...props
}: ButtonProps) => {
	const buttonClassName = [
		baseStyles,
		variantStyles[variant],
		sizeStyles[size],
		fullWidth ? 'w-full' : '',
		className
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			className={buttonClassName}
			disabled={disabled || loading}
			aria-busy={loading}
			aria-disabled={disabled || loading}
			{...props}
		>
			{loading && <Spinner />}
			{leftIcon && <span className='mr-2'>{leftIcon}</span>}
			{children}
			{rightIcon && <span className='ml-2'>{rightIcon}</span>}
		</button>
	);
};
Button.displayName = 'Button';

export default Button;
