import { useState, useEffect, useRef } from 'react';
import { useItemsContext } from '../../../hooks/useItemsContext';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useParams } from 'react-router-dom';

export default function AddItemInputForm(props) {
	const { user } = useAuthContext();
	const { dispatch } = useItemsContext();

	const [error, setError] = useState(null);
	const [title, setTitle] = useState('');
	const [emptyFields, setEmptyFields] = useState([]);

	const { id } = useParams();
	const focusRef = useRef(null);

	const list_id = id;

	useEffect(() => {
		focusRef.current.focus();
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!user) {
			setError('You must be logged in');
			return;
		}

		const item = { title, list_id };

		const response = await fetch(
			`${process.env.REACT_APP_API_HOST}/api/items`,
			{
				method: 'POST',
				body: JSON.stringify(item),
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setTitle('');
			setError(null);
			setEmptyFields([]);

			dispatch({ type: 'CREATE_ITEM', payload: json });
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='add-item-styles'>
				<input
					type='text'
					id='addItems'
					name='addItems'
					placeholder=' New item'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					ref={focusRef}
					className={emptyFields.includes('title') ? 'error' : ''}
				/>
				<button type='submit'>Add</button>
			</div>
			{error && <div className='error'>{error}</div>}
		</form>
	);
}
