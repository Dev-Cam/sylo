import { Outlet } from 'react-router-dom';
import '../components/styles/layouts/shoppingListLayout.css';

export default function ShoppingListPageLayout() {
	return (
		<div className='shopping-layout'>
			<Outlet />
		</div>
	);
}
