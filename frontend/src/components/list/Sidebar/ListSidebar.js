import ListLink from './ListLink';
import CreateListForm from './CreateListForm';
import { useListsContext } from '../../../hooks/useListsContext';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useEffect } from 'react';
import '../List-styles/sidebar.css';

export default function ListSidebar() {
	const { lists, dispatch } = useListsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchLists = async () => {
			const response = await fetch('/api/lists', {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: 'SET_LISTS', payload: json });
			}
		};
		if (user) {
			fetchLists();
		}
	}, [dispatch, user]);

	console.log(lists);

	return (
		<div className='list-sidebar'>
			<CreateListForm />
			<div>
				{lists && lists.map((list) => <ListLink key={list._id} list={list} />)}
			</div>
		</div>
	);
}
