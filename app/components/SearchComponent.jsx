'use client';

import React, { useState } from 'react';

const SearchComponent = () => {
	const [searchText, setSearchText] = useState();
	return (
		<form className='search w-full md:max-w-[350px] min-h-[80%] bg-black rounded-md flex items-center justify-between px-4 py-1 '>
			<input
				type='search'
				name='searchText'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				className=' bg-gray-900 py-2 h-full focus:ring-0 focus-within:ring-0 focus-within:border-0 focus:border-gray-600 placeholder:bg-slate-300 caret-slate-200 pl-3 w-[80%] rounded-md'
			/>
			<button className='btn border border-gray-500 text-sm px-3 py-1 text-slate-300'>
				search
			</button>
		</form>
	);
};

export default SearchComponent;
