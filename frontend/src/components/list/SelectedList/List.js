import { useEffect } from 'react';
import AddItemInputForm from './AddItemInputForm';
import Item from './Item';
import { useLocation, useParams } from 'react-router-dom';
import { useItemsContext } from '../../../hooks/useItemsContext';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useListsContext } from '../../../hooks/useListsContext';

import '../List-styles/list.css';

export default function List() {
	const { items, dispatch } = useItemsContext();
	const { user } = useAuthContext();
	const location = useLocation();
	const title = location.state;
	const { id } = useParams();

	useEffect(() => {
		const fetchLists = async () => {
			const response = await fetch(`/api/items`, {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();
			console.log('json');

			console.log('JSON', json);

			if (response.ok) {
				dispatch({ type: 'SET_ITEMS', payload: json });
			}
		};
		if (user) {
			fetchLists();
		}
	}, [dispatch, user]);

	return (
		<div>
			<h3>{title}</h3>
			<AddItemInputForm />
			<div>
				{/* {items && items.map((item) => <Item key={item._id} listItem={item} />)} */}
			</div>

			<button className='save-button' type='submit'>
				Save
			</button>
		</div>
	);
}

// const addShoppingItem = (item) => {
// 	if (!item.text || /^\s*$/.test(item.text)) {
// 		return;
// 	}
// 	const newItems = [item, ...items];
// 	setItems(newItems);
// };

// const completeItem = (id) => {
// 	let updatedItem = items.map((item) => {`
// 		if (item.id === id) {
// 			item.isComplete = !item.isComplete;
// 		}
// 		return item;
// 	});
// 	setItems(updatedItem);
// };
// const editItem = (itemId, newValue) => {
// 	if (!newValue.text || /^\s*$/.test(newValue.text)) {
// 		return;
// 	}
// 	setItems((prev) =>
// 		prev.map((item) => (item.id === itemId ? newValue : item))
// 	);
// };

// const removeItem = (id) => {
// 	const removeArr = [...items].filter(
// 		(shoppingItem) => shoppingItem.id !== id
// 	);
// 	setItems(removeArr);
// };
