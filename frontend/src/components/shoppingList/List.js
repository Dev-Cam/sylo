import { useState } from 'react';
import AddItemInput from './AddItemInput';
import Item from './Item';
import '../styles/ShoppingList/shoppingList.css';

export default function List() {
	const [shoppingItems, setShoppingItems] = useState([]);

	const addShoppingItem = (shoppingItem) => {
		if (!shoppingItem.text || /^\s*$/.test(shoppingItem.text)) {
			return;
		}
		const newShoppingItems = [shoppingItem, ...shoppingItems];
		setShoppingItems(newShoppingItems);
	};

	const completeShoppingItem = (id) => {
		let updatedShoppingItem = shoppingItems.map((item) => {
			if (item.id === id) {
				item.isComplete = !item.isComplete;
			}
			return item;
		});
		setShoppingItems(updatedShoppingItem);
	};
	const editShoppingItem = (shoppingItemId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}
		setShoppingItems((prev) =>
			prev.map((item) => (item.id === shoppingItemId ? newValue : item))
		);
	};

	const removeShoppingItem = (id) => {
		const removeArr = [...shoppingItems].filter(
			(shoppingItem) => shoppingItem.id !== id
		);
		setShoppingItems(removeArr);
	};

	return (
		<div className='shopping-list'>
			<AddItemInput onSubmit={addShoppingItem} />
			<Item
				completeShoppingItem={completeShoppingItem}
				shoppingItems={shoppingItems}
				editShoppingItem={editShoppingItem}
				removeShoppingItem={removeShoppingItem}
			/>
		</div>
	);
}
