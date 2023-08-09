import { useOutlet } from 'react-router-dom';

import ListSidebar from './Sidebar/ListSidebar';
import './List-styles/overview.css';

export default function ListOverview() {
	const outlet = useOutlet();
	return (
		<div className='overview-container'>
			<div className='list-wrapper'>
				<div className='sidebar'>
					<ListSidebar />
				</div>
				<div className='list-content'>
					{outlet || (
						<h2>Create a list or pick up where you left on an old one</h2>
					)}
				</div>
			</div>
		</div>
	);
}
