import './components/styles/app.css';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

//Pages
import {
	HomePage,
	BillsPage,
	SocialEventsPage,
	ChoresPage,
	ShoppingListPage,
	NotFoundPage,
} from './pages/index';
import List from './components/shoppingList/List';

// Layouts
import RootLayout from './layouts/RootLayout';
import ShoppingListPageLayout from './layouts/ShoppingListPageLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path='bills' element={<BillsPage />} />
			<Route path='socialEvents' element={<SocialEventsPage />} />
			<Route path='chores' element={<ChoresPage />} />

			<Route path='shoppingList' element={<ShoppingListPageLayout />}>
				<Route index element={<ShoppingListPage />} />
				<Route path=':id' element={<List />}></Route>
			</Route>

			<Route path='*' element={<NotFoundPage />}></Route>
		</Route>
	)
);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
