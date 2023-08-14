import { useListsContext } from '../../../hooks/useListsContext';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useItemsContext } from '../../../hooks/useItemsContext';
import { FaClipboardList } from 'react-icons/fa';
import '../List-styles/listLink.css';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function ListLink({ list }) {
	const redirect = useNavigate();
	const { dispatch } = useListsContext();
	const { dispatch: itemDispatch } = useItemsContext();
	const { title, _id } = list;
	const { user } = useAuthContext();
	const { id: pageId } = useParams();

	const deleteList = async () => {
		if (!user) {
			return;
		}
		const response = await fetch(
			`${process.env.REACT_APP_API_HOST}/api/lists/` + list._id,
			{
				method: 'DELETE',
				headers: { Authorization: `Bearer ${user.token}` },
			}
		);

		if (response.ok) {
			dispatch({ type: 'DELETE_LIST', payload: { _id } });
			itemDispatch({ type: 'DELETE_ITEMS_BY_LIST_ID', payload: { _id } });

			if (_id === pageId) {
				return redirect('/list');
			}
		}
	};

	return (
		<div className='list-links'>
			<div className='buttons'>
				<div className='row'>
					<Link to={_id} state={title}>
						<p>
							<FaClipboardList className='list-link-icon' />
							{title}
						</p>
					</Link>
					<div className='list-link-icon'>
						<RiCloseCircleLine onClick={deleteList} />
					</div>
				</div>
			</div>
		</div>
	);
}
