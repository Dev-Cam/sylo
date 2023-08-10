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
				<NavLink to='/'>Sylo</NavLink>

				{user && (
					<div className='nav-links'>
						<NavLink to='/list'>Lists</NavLink>
						<NavLink onClick={handleClick}>Log Out</NavLink>
					</div>
				)}
				{!user && (
					<div className='nav-links'>
						<NavLink to='/login'>Login</NavLink>
						<NavLink to='/signup'>Signup</NavLink>
					</div>
				)}
			</div>
		</nav>
	);
}
