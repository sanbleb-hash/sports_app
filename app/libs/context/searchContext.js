'use client';

import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [isSearch, setIsSearch] = useState(false);
	const [togglemenu, setToggleMenu] = useState(false);
	const dispatch = (prevValue) => setIsSearch(!prevValue);
	const handleTogglement = (prevValue) => setToggleMenu(!prevValue);

	const value = {
		isSearch,
		dispatch,
		togglemenu,
		handleTogglement,
	};
	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};
