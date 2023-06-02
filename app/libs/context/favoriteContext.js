'use client';

import { createContext, useReducer } from 'react';

export const FavoriteContext = createContext();

const initialState = {
	favored: false,
	isLoading: false,
	favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FavorIngStart':
			return {
				...state,
				isLoading: true,
			};
		case 'Favoring': {
			const existingItem = state.favorites.find(
				(item) => action.payload.id === item.id
			);
			if (existingItem) {
				// 'remove it from state');
				state.isLoading = false;
				const updatedFavorites = state.favorites.filter(
					(item) => item.id !== action.payload.id
				);
				if (updatedFavorites)
					localStorage.removeItem('favorites', updatedFavorites);

				return { ...state, favorites: updatedFavorites };
			} else {
				// add a league to favorite
				state.isLoading = false;
				const updatedFavorites = state.favorites.concat(action.payload);
				if (updatedFavorites)
					localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
				return { ...state, favorites: updatedFavorites };
			}
		}
		default:
			return state;
	}
};

export const FavoriteProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return (
		<FavoriteContext.Provider value={value}>
			{children}
		</FavoriteContext.Provider>
	);
};
