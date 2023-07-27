import { Outlet } from 'react-router-dom';
import '../components/styles/layouts/shoppingListLayout.css';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ShoppingListPageLayout() {
	const { user } = useAuthContext();

	return (
		<div className='shopping-layout'>
			<Outlet user={user} />
		</div>
	);
}
