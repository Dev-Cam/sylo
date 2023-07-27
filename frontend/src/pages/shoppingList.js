import { useEffect } from 'react';
import { useShoppingListsContext } from '../hooks/useShoppingListsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import ActiveLists from '../components/shoppingList/ActiveLists';
import CreateShoppingList from '../components/shoppingList/CreateShoppingListForm';

export default function ShoppingListPage() {
	const { shoppingLists, dispatch } = useShoppingListsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchShoppingLists = async () => {
			const response = await fetch('/api/shoppinglists', {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: 'SET_SHOPPINGLISTS', payload: json });
			}
		};
		if (user) {
			fetchShoppingLists();
		}
	}, [dispatch, user]);

	return (
		<div>
			<h1>Shopping Lists:</h1>
			<CreateShoppingList />
			{shoppingLists && <ActiveLists shoppingLists={shoppingLists} />}
		</div>
	);
}
