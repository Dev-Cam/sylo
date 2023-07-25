import '../styles/ShoppingList/shoppingListTile.css';
import { useShoppingListsContext } from '../../hooks/useShoppingListsContext';
import { formatDistanceToNow } from 'date-fns/esm';

export default function ShoppingListTile({ shoppingList }) {
	const { dispatch } = useShoppingListsContext();
	const { title, creator, createdAt } = shoppingList;

	const deleteList = async () => {
		const response = await fetch('/api/shoppingLists/' + shoppingList._id, {
			method: 'DELETE',
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: 'DELETE_SHOPPINGLIST', payload: json });
		}
	};

	return (
		<div className='tile'>
			<div className='buttons'>
				<div>
					<h4>{title}</h4>
				</div>
				<div>
					<button>View</button>
					<button onClick={deleteList}>Delete</button>
				</div>
				<div>
					<button>Complete</button>
				</div>
				<p>{creator}</p>
				<p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
			</div>
		</div>
	);
}
