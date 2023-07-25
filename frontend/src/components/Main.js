import { Route, Routes } from 'react-router-dom';
import {
	HomePage,
	BillsPage,
	ChoresPage,
	ShoppingListPage,
	SocialEventsPage,
} from '../pages/index';
import { styled } from 'styled-components';

const Container = styled.div`
	background-color: #feeaa5;
	text-align: center;
	height: 100vh;
`;
export default function Main() {
	return (
		<Container>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/bills' element={<BillsPage />} />
				<Route path='/socialEvents' element={<SocialEventsPage />} />
				<Route path='/chores' element={<ChoresPage />} />
				<Route path='/shoppingList' element={<ShoppingListPage />} />
			</Routes>
		</Container>
	);
}
