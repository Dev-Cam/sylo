import { useState } from 'react';
import '../styles/ShoppingList/createShoppingListForm.css';
import { useShoppingListsContext } from '../../hooks/useShoppingListsContext';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function CreateShoppingList() {
	const { dispatch } = useShoppingListsContext();
	const { user } = useAuthContext();

	console.log(user);

	const [title, setTitle] = useState('');
	const [creator, setCreator] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!user) {
			setError('You must be logged in');
			return;
		}

		const shoppingList = { title, creator };

		const response = await fetch('/api/shoppingLists', {
			method: 'POST',
			body: JSON.stringify(shoppingList),
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setTitle('');
			setCreator('');
			setError(null);
			setEmptyFields([]);
			console.log('New shopping list added', json);
			dispatch({ type: 'CREATE_SHOPPINGLIST', payload: json });
		}
	};

	return (
		<div className='container'>
			<h3>Create a New Shopping List</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						placeholder='Name of list'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						className={emptyFields.includes('title') ? 'error' : ''}
					></input>
				</div>
				<div>
					<input
						type='text'
						placeholder='Creator'
						onChange={(e) => setCreator(e.target.value)}
						value={creator}
						className={emptyFields.includes('creator') ? 'error' : ''}
					></input>
				</div>
				<button type='submit'>Create New Shopping List</button>
				{error && <div className='error'>{error}</div>}
			</form>
		</div>
	);
}
