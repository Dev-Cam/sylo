import { Link } from 'react-router-dom';
import './styles/nav.css';

export default function Nav() {
	return (
		<nav className='nav'>
			<Link to='/'>Sylo</Link>
			<ul>
				<li>
					<Link to='/shoppingList'>Shopping list</Link>
				</li>
				<li>
					<Link to='/chores'>Chores</Link>
				</li>
				<li>
					<Link to='/socialEvents'>Social Events</Link>
				</li>
				<li>
					<Link to='/bills'>Bills</Link>
				</li>
			</ul>
		</nav>
	);
}
