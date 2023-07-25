import { useEffect } from 'react';
import { useShoppingListsContext } from '../hooks/useShoppingListsContext';

import CreateShoppingList from '../components/shoppingList/CreateShoppingListForm';
import ShoppingListTile from '../components/shoppingList/ShoppingListTile';

export default function ShoppingListPage() {
	const { shoppingLists, dispatch } = useShoppingListsContext();

	useEffect(() => {
		const fetchShoppingLists = async () => {
			const response = await fetch('/api/shoppinglists');
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: 'SET_SHOPPINGLISTS', payload: json });
			}
		};
		fetchShoppingLists();
	}, [dispatch]);

	return (
		<div>
			<h1>Shopping Lists</h1>
			<CreateShoppingList />
			<div className='shopping-tiles'>
				{shoppingLists &&
					shoppingLists.map((shoppingList) => (
						<ShoppingListTile
							key={shoppingList._id}
							shoppingList={shoppingList}
						/>
					))}
			</div>
		</div>
	);
}
