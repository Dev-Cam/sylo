import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import {
	HomePage,
	LoginPage,
	SignupPage,
	ListPage,
	SelectedListPage,
} from '../pages/index';
import './styles/main.css';

export default function Main() {
	const { user } = useAuthContext();
	return (
		<div className='main-container'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route
					path='/list'
					element={user ? <ListPage /> : <Navigate to='/login' />}
				>
					<Route path=':id' element={<SelectedListPage />} />
				</Route>
				<Route
					path='/login'
					element={!user ? <LoginPage /> : <Navigate to='/' />}
				/>
				<Route
					path='/signup'
					element={!user ? <SignupPage /> : <Navigate to='/' />}
				/>
			</Routes>
		</div>
	);
}
