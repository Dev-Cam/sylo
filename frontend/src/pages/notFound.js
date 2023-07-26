import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<div>
			<h1>Page not found!!</h1>
			<p>
				Go to the <Link to='/'>Homepage</Link>
			</p>
		</div>
	);
}
