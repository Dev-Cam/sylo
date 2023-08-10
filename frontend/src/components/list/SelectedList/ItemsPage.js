import { useEffect } from 'react';
import AddItemInputForm from './AddItemInputForm';
import Item from './Item';
import { useLocation, useParams } from 'react-router-dom';
import { useItemsContext } from '../../../hooks/useItemsContext';
import { useAuthContext } from '../../../hooks/useAuthContext';

import '../List-styles/list.css';

export default function ItemsPage() {
	const { items, dispatch } = useItemsContext();
	const { user } = useAuthContext();
	const location = useLocation();
	const title = location.state;
	const { id } = useParams();

	useEffect(() => {
		const fetchItems = async () => {
			const response = await fetch(`/api/items?listId=${id}`, {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: 'SET_ITEMS', payload: json });
			}
		};
		if (user) {
			fetchItems();
		}
	}, [dispatch, user, id]);

	return (
		<div>
			<h3>{title}</h3>
			<AddItemInputForm />
			{items.length > 0 && (
				<div className='list-items'>
					{items &&
						items.map((item) => <Item key={item._id} listItem={item} />)}
				</div>
			)}

			<button className='save-button' type='submit'>
				Save
			</button>
		</div>
	);
}
