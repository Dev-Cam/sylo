import { ShoppingListsContext } from '../context/ShoppingListContext';
import { useContext } from 'react';

export const useShoppingListsContext = () => {
	const context = useContext(ShoppingListsContext);

	if (!context) {
		throw Error(
			'useShoppingListsContext must be used inside a ShoppingListsContextProvider'
		);
	}

	return context;
};
