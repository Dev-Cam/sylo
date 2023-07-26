import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../styles/ShoppingList/shoppingItem.css';
import AddItemInputForm from './AddItemInputForm';

export default function Item({
	shoppingItems,
	removeShoppingItem,
	editShoppingItem,
	completeShoppingItem,
}) {
	const [edit, setEdit] = useState({
		id: null,
		value: '',
	});

	const [isComplete, setIsComplete] = useState(true);

	const submitUpdate = (value) => {
		editShoppingItem(edit.id, value);
		setEdit({
			id: null,
			value: '',
		});
	};

	if (edit.id) {
		return <AddItemInputForm edit={edit} onSubmit={submitUpdate} />;
	}

	return shoppingItems.map((shoppingItem, index) => (
		<div className='shopping-item' key={index}>
			<div
				className={
					shoppingItem.isComplete ? 'check-listItem complete' : 'check-listItem'
				}
			>
				<div
					onClick={() => completeShoppingItem(shoppingItem.id)}
					key={shoppingItem.id}
				>
					{shoppingItem.text}
				</div>
			</div>
			<div className='shopping-list-edit-remove'>
				<RiCloseCircleLine
					size={21}
					onClick={() => removeShoppingItem(shoppingItem.id)}
				/>
				<TiEdit
					size={21}
					onClick={() =>
						setEdit({ id: shoppingItem.id, value: shoppingItem.text })
					}
				/>
			</div>
		</div>
	));
}
