import { RiCloseCircleLine } from 'react-icons/ri';
import { useItemsContext } from '../../../hooks/useItemsContext';
import { useAuthContext } from '../../../hooks/useAuthContext';

import '../List-styles/item.css';

export default function Item({ listItem }) {
	const { dispatch } = useItemsContext();
	const { user } = useAuthContext();
	const { title, _id } = listItem;

	const handleDelete = async () => {
		if (!user) {
			return;
		}

		const response = await fetch(`/api/items/${_id}`, {
			method: 'DELETE',
			headers: { Authorization: `Bearer ${user.token}` },
		});

		if (response.ok) {
			dispatch({ type: 'DELETE_ITEM', payload: { _id } });
		}
	};
	return (
		<div className='shopping-item'>
			<div>{title}</div>

			<div className='shopping-list-edit-remove'>
				<RiCloseCircleLine onClick={handleDelete} size={21} />
			</div>
		</div>
	);
}
