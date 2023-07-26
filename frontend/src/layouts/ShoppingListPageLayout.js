import { Outlet } from 'react-router-dom';
export default function ShoppingListPageLayout() {
	return (
		<div>
			<h1>List:</h1>
			<Outlet />
		</div>
	);
}
