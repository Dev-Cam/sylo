import List from './List';
import { styled } from 'styled-components';

const ShoppingListStyles = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;
export default function ShoppingList() {
	return (
		<ShoppingListStyles>
			<div>
				<List />
			</div>
		</ShoppingListStyles>
	);
}
