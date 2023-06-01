'use client';

import { createContext, useReducer } from 'react';

export const FavoriteContext = createContext();

const initialState = {
	favored: false,
	isLoading: false,
	favorites: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FavorIngStart':
			return {
				...state,
				isLoading: true,
			};
		case 'Favoring': {
			const newFavorite = action.payload;

			const existingFavorite = state.favorites.find((f) => f === newFavorite);
			if (existingFavorite) {
				state.favored = false;
				state.favorites.pop((f) => f === existingFavorite);
				return { ...state };
			} else {
				state.favored = true;
				const favorites = existingFavorite
					? state.favirites.map((item) =>
							item === existingFavorite ? newItem : item
					  )
					: [...state.favorites, newFavorite];
				return { ...state, favored: true, favorites };
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
