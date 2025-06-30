import { redirect } from 'next/navigation';
import { getCurrentUser } from '../lib/actions';
import LoginForm from './LoginForm';

export default async function LoginPage() {
	const user = await getCurrentUser();

	if (user) {
		redirect('/');
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center px-4'>
			<div className='w-full max-w-md'>
				<div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20'>
					<div className='text-center mb-8'>
						<h1 className='text-3xl font-bold text-white mb-2'>
							Welcome Back
						</h1>
						<p className='text-white/80'>Sign in to your account</p>
					</div>

					<LoginForm />

					<div className='mt-6 text-center'>
						<p className='text-white/70'>
							Don't have an account?{' '}
							<a
								href='/register'
								className='text-pink-300 hover:text-pink-200 font-medium transition'
							>
								Sign up
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
