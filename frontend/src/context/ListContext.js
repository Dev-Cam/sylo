import { createContext, useReducer } from 'react';

export const ListsContext = createContext();

export const ListsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_LISTS':
			return {
				lists: action.payload,
			};
		case 'CREATE_LIST':
			return {
				lists: [action.payload, ...state.lists],
			};
		case 'DELETE_LIST':
			return {
				lists: state.lists.filter((list) => list._id !== action.payload._id),
			};
		default:
			return state;
	}
};

export const ListsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ListsReducer, {
		lists: null,
	});

	return (
		<ListsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ListsContext.Provider>
	);
};
