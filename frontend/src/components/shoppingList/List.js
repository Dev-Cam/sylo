import { useState } from 'react';
import AddItemInputForm from './AddItemInputForm';
import Item from './Item';
import '../styles/ShoppingList/shoppingList.css';
import { useLocation } from 'react-router-dom';

export default function List() {
	const location = useLocation();
	const title = location.state;
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
			<h2>Shopping list: {title}</h2>
			<AddItemInputForm onSubmit={addShoppingItem} />
			<Item
				completeShoppingItem={completeShoppingItem}
				shoppingItems={shoppingItems}
				editShoppingItem={editShoppingItem}
				removeShoppingItem={removeShoppingItem}
			/>
			<button type='submit'>Save</button>
		</div>
	);
}
