import { useAuthContext } from './useAuthContext';
import { useListsContext } from './useListsContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: shoppingListDispatch } = useListsContext();
	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user');

		//dispatch logout action
		dispatch({ type: 'LOGOUT' });
		shoppingListDispatch({ type: 'SET_SHOPPINGLISTS', payload: null });
	};

	return { logout };
};
