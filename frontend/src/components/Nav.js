import { Link } from 'react-router-dom';
import './styles/nav.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Nav() {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		logout();
	};

	return (
		<nav className='nav'>
			<Link to='/'>Sylo</Link>

			{user && (
				<div className='nav-links'>
					<Link to='/shoppingList'>Shopping list</Link>
					<Link to='/chores'>Chores</Link>
					<Link to='/socialEvents'>Social Events</Link>
					<Link to='/bills'>Bills</Link>
					<Link onClick={handleClick}>Log Out</Link>
				</div>
			)}
			{!user && (
				<div className='nav-links'>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>Signup</Link>
				</div>
			)}
		</nav>
	);
}
