import { Outlet } from 'react-router-dom';
import '../components/styles/rootLayout.css';
import Header from '../components/Header';
export default function RootLayout() {
	return (
		<div className='root-layout'>
			<Header />
			<main className='main-container'>
				<Outlet />
			</main>
		</div>
	);
}
