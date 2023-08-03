import { Link, NavLink } from 'react-router-dom';
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
			<div className='link-wrapper'>
				<Link to='/'>Sylo</Link>

				{user && (
					<div className='nav-links'>
						<NavLink to='/list'>Lists</NavLink>
						<Link onClick={handleClick}>Log Out</Link>
					</div>
				)}
				{!user && (
					<div className='nav-links'>
						<Link to='/login'>Login</Link>
						<Link to='/signup'>Signup</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
