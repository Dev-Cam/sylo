import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingListsContextProvider } from './context/ShoppingListContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthContextProvider>
		<ShoppingListsContextProvider>
			<App />
		</ShoppingListsContextProvider>
	</AuthContextProvider>
);
