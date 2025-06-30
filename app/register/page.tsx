import { redirect } from 'next/navigation';
import { getCurrentUser } from '../lib/actions';
import RegisterForm from './RegisterForm';

// Force dynamic rendering since this page uses cookies
export const dynamic = 'force-dynamic';

export default async function RegisterPage() {
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
							Create Account
						</h1>
						<p className='text-white/80'>
							Join us and start shopping
						</p>
					</div>

					<RegisterForm />

					<div className='mt-6 text-center'>
						<p className='text-white/70'>
							Already have an account?{' '}
							<a
								href='/login'
								className='text-pink-300 hover:text-pink-200 font-medium transition'
							>
								Sign in
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
