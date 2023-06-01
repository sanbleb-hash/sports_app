import React, { useContext } from 'react';
import CategoriesList from './categoriesList';
import { FaTimes } from 'react-icons/fa';
import SearchComponent from './SearchComponent';
import { SearchContext } from '../libs/context/searchContext';

const Sidemenu = () => {
	const { isSearch, togglemenu, handleTogglement } = useContext(SearchContext);
	return (
		<nav
			aria-label='secondary navigaton'
			className=' relative flex min-h-[50px] w-full  h-full mx-auto items-center justify-between bg-gray-600 mt-2 animate-fadeUp'
		>
			<ul className=' flex items-center justify-center  w-[90vw] md:w-[80vw] mx-auto gap-4'>
				{isSearch ? (
					<>
						<SearchComponent />
					</>
				) : (
					<CategoriesList />
				)}
			</ul>
			<FaTimes
				className=' absolute hover:scale-110 hover:opacity-75 transition-all top-4  md:right-12 right-6 animate-fadeIn'
				onClick={() => handleTogglement(togglemenu)}
			/>
		</nav>
	);
};

export default Sidemenu;
