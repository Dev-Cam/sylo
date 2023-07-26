import '../styles/ShoppingList/shoppingListTile.css';
import { useShoppingListsContext } from '../../hooks/useShoppingListsContext';
import { formatDistanceToNow } from 'date-fns/esm';
import { Link } from 'react-router-dom';

export default function ShoppingListTile({ shoppingList }) {
	const { dispatch } = useShoppingListsContext();
	const { title, creator, createdAt, _id } = shoppingList;

	const deleteList = async () => {
		const response = await fetch('/api/shoppingLists/' + shoppingList._id, {
			method: 'DELETE',
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: 'DELETE_SHOPPINGLIST', payload: json });
		}
	};

	console.log(shoppingList);
	return (
		<div className='tile'>
			<div className='buttons'>
				<div>
					<h4>{title}</h4>
				</div>
				<div>
					<Link to={_id}>
						<button>View</button>
					</Link>
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
