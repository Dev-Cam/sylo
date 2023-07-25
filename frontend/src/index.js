import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingListsContextProvider } from './context/ShoppingListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ShoppingListsContextProvider>
		<App />
	</ShoppingListsContextProvider>
);
