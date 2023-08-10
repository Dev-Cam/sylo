import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useOutlet } from 'react-router-dom';

import ListSidebar from './Sidebar/ListSidebar';
import './List-styles/overview.css';
import { useEffect, useState } from 'react';

export default function ListOverview() {
	const outlet = useOutlet();
	const { width } = useWindowDimensions();
	const [open, setOpen] = useState(true);

	useEffect(() => {
		if (width > 450) {
			setOpen(true);
		}
	}, [width]);

	const openSidebar = () => {
		setOpen(!open);
	};

	return (
		<div className='overview-container'>
			<div className='list-wrapper'>
				<div className={open ? 'sidebar' : 'hideSidebar'}>
					<ListSidebar openSidebar={openSidebar} open={open} />
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
