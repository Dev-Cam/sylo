import ListLink from './ListLink';
import CreateListForm from './CreateListForm';
import { useListsContext } from '../../../hooks/useListsContext';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../List-styles/list.css';

export default function ListSidebar({ openSidebar, open }) {
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

	return (
		<div className={open ? '' : 'hideSidebar'}>
			<div className='arrow' onClick={openSidebar}>
				{open ? (
					<AiOutlineArrowLeft size={20} />
				) : (
					<AiOutlineArrowRight size={20} />
				)}
			</div>
			<div className={open ? 'visible' : 'hidden'}>
				<CreateListForm />
				<div className='user-lists'>
					{lists &&
						lists.map((list) => <ListLink key={list._id} list={list} />)}
				</div>
			</div>
		</div>
	);
}
