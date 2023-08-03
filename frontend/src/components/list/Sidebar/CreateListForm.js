import { useState } from 'react';
import { useListsContext } from '../../../hooks/useListsContext';
import { useAuthContext } from '../../../hooks/useAuthContext';
import '../List-styles/createListForm.css';

export default function CreateListForm() {
	const { dispatch } = useListsContext();
	const { user } = useAuthContext();

	const [title, setTitle] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!user) {
			setError('You must be logged in');
			return;
		}

		const list = { title };

		const response = await fetch('/api/lists', {
			method: 'POST',
			body: JSON.stringify(list),
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
			setError(null);
			setEmptyFields([]);
			dispatch({ type: 'CREATE_LIST', payload: json });
		}
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<h3>Your Lists</h3>
				<div>
					<input
						type='text'
						placeholder='Name of new list'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						className={emptyFields.includes('title') ? 'error' : ''}
					></input>
					<button type='submit'>Create</button>
				</div>
				{error && <div className='error'>{error}</div>}
			</form>
		</div>
	);
}
