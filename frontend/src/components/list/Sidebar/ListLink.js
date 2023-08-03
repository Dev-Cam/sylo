import { useListsContext } from '../../../hooks/useListsContext';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { FaClipboardList } from 'react-icons/fa';
import '../List-styles/listLink.css';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function ListLink({ list }) {
	const { dispatch } = useListsContext();
	const { title, _id } = list;
	const { user } = useAuthContext();

	const deleteList = async () => {
		if (!user) {
			return;
		}
		const response = await fetch('/api/lists/' + list._id, {
			method: 'DELETE',
			headers: { Authorization: `Bearer ${user.token}` },
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: 'DELETE_LIST', payload: json });
		}
	};

	return (
		<div className='list-links'>
			<div className='buttons'>
				<div className='row'>
					<Link to={_id} state={title}>
						<h4>
							<FaClipboardList className='list-link-icon' />
							{title}
						</h4>
					</Link>
					<RiCloseCircleLine onClick={deleteList} />
				</div>
			</div>
		</div>
	);
}
