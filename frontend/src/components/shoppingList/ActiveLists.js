import ShoppingListTile from './ShoppingListTile';
import '../styles/ShoppingList/shoppingListTile.css';

export default function ActiveLists({ shoppingLists }) {
	console.log(shoppingLists);
	return (
		<div className='active-lists'>
			<h3>Active Lists:</h3>
			<div className='shopping-tile-container'>
				{shoppingLists.map((shoppingList) => (
					<ShoppingListTile
						key={shoppingList._id}
						shoppingList={shoppingList}
					/>
				))}
			</div>
		</div>
	);
}
