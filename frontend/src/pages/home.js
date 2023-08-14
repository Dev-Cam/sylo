import '../components/styles/home.css';
import { useAuthContext } from '../hooks/useAuthContext';

export default function HomePage() {
	const { user } = useAuthContext();

	return (
		<div className='home-container'>
			{!user ? (
				<div>
					<div className='heading'>
						<h1>Hello and welcome to Sylo</h1>
						<h3>A place where you can Sort Your Life Out</h3>
					</div>
					<div className='content'>
						<p>
							Here you will create multiple lists and be able to cross things
							out as you go, feeling the sense of accomplishment only met by
							striking something off a list.
						</p>
					</div>
					<div className='content'>
						<p>Go ahead, create an account and just Sylo!</p>
					</div>
				</div>
			) : (
				<div>
					<div className='heading'>
						<h1>Thanks for joining us</h1>
						<h3>Lets get you sorted hey</h3>
					</div>
					<div className='content'>
						<p>Click the list button in the nav to get organising.</p>
					</div>
				</div>
			)}
		</div>
	);
}
