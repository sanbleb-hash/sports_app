'use client';

import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { SearchContext } from '../libs/context/searchContext';

const SearchComponent = () => {
	const [searchText, setSearchText] = useState();

	const { dispatch, isSearch } = useContext(SearchContext);
	return (
		<div className=' relative flex items-center justify-center min-h-[50px] w-full   mx-auto   bg-gray-600 mt-4 md:p-5  bg-transparent backdrop-blur-md animate-fadeUp'>
			<form className='search w-full md:max-w-[350px] min-h-[80%] bg-black rounded-md flex items-center justify-between px-4 py-1 '>
				<input
					type='search'
					name='searchText'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					className=' bg-gray-900 py-2 h-full focus:ring-0 focus:border-b
               focus-within:border-0 focus:border-gray-500 placeholder:bg-slate-300 caret-slate-200 pl-3 w-[80%] rounded-md outline-none focus:outline-none'
				/>
				<button className='btn border border-gray-500 text-sm px-3 py-1 text-slate-300'>
					search
				</button>
			</form>
			<FaTimes
				className=' hidden lg:inline-block absolute hover:scale-110 hover:opacity-75 transition-all top-4  md:right-12 right-6 cursor-pointer '
				onClick={() => dispatch(isSearch)}
			/>
		</div>
	);
};

export default SearchComponent;
