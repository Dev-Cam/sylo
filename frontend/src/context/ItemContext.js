import { createContext, useReducer } from 'react';

export const ItemsContext = createContext();

export const ItemsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ITEMS':
			return {
				items: action.payload,
			};
		case 'CREATE_ITEM':
			return {
				items: [action.payload, ...state.items],
			};
		case 'DELETE_ITEM':
			return {
				items: state.items.filter((item) => item._id !== action.payload._id),
			};
		default:
			return state;
	}
};

export const ItemsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ItemsReducer, {
		lists: null,
	});

	return (
		<ItemsContext.Provider value={{ ...state, dispatch }}>
			{console.log(state, dispatch)}
			{children}
		</ItemsContext.Provider>
	);
};
