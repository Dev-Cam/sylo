import Header from './components/Header';
import Main from './components/Main';
import './components/styles/app.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Main />
			</BrowserRouter>
		</div>
	);
}

export default App;
