import { Outlet } from 'react-router-dom';

import ListSidebar from './Sidebar/ListSidebar';
import './List-styles/overview.css';

export default function ListOverview() {
	return (
		<div className='overview-container'>
			<div className='list-wrapper'>
				<div className='sidebar'>
					<ListSidebar />
				</div>
				<div className='list-content'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
