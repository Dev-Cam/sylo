import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ListsContextProvider } from './context/ListContext';
import { AuthContextProvider } from './context/AuthContext';
import { ItemsContextProvider } from './context/ItemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthContextProvider>
		<ListsContextProvider>
			<ItemsContextProvider>
				<App />
			</ItemsContextProvider>
		</ListsContextProvider>
	</AuthContextProvider>
);
