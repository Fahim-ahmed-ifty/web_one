'use client';

import { useCallback, useEffect, useState } from 'react';
import { getCurrentUser } from '../lib/actions';

export function useAuth() {
	const [user, setUser] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchUser = useCallback(async () => {
		try {
			const userData = await getCurrentUser();
			setUser(userData);
		} catch (error) {
			console.error('Error fetching user:', error);
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const refreshUser = useCallback(() => {
		setIsLoading(true);
		fetchUser();
	}, [fetchUser]);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return { user, isLoading, isAuthenticated: !!user, refreshUser };
}
