'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsBell, BsClockFill, BsTrophy } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';
import { SearchContext } from '../libs/context/searchContext';

const BottomNav = () => {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState('/');
	const { handleTogglement, togglemenu } = useContext(SearchContext);
	// setting the activePath
	useEffect(() => {
		setIsActive(pathname);
	}, [pathname]);

	return (
		<footer className=' z-50 w-screen h-[10vh]  bg-gray-800 text-white  fixed bottom-0'>
			<nav className=' flex w-[90vw] md:w-[80vw] h-full mx-auto items-center justify-between capitalize'>
				<Link
					href='/'
					className={clsx(
						' flex items-center flex-col text-white text-sm group py-2 px-2   ',
						isActive === '/' ? ' bg-gray-900 border-b-2 border-gray-700' : ''
					)}
				>
					<BsClockFill
						size={18}
						className=' group-hover:scale-110 transition delay-100 ease-in-out'
					/>
					matches
				</Link>

				<Link
					href='/leagues'
					className={clsx(
						' flex items-center flex-col text-white text-sm group py-2 px-2 ',
						isActive === '/leagues'
							? ' bg-gray-900 border-b-2 border-gray-700'
							: ''
					)}
				>
					<BsTrophy
						size={18}
						className=' group-hover:scale-110 transition delay-100 ease-in-out'
					/>
					leagues
				</Link>
				<Link
					href='/my-favorites'
					className={clsx(
						' flex items-center flex-col text-white text-sm group py-2 px-2 ',
						isActive === '/my-favorites'
							? ' bg-gray-900 border-b-2 border-gray-700'
							: ''
					)}
				>
					<BsBell
						size={18}
						className=' group-hover:scale-110 transition delay-100 ease-in-out'
					/>
					fevourites
				</Link>
				<button className=' flex items-center flex-col text-white text-sm group py-2 px-2 '>
					{!togglemenu ? (
						<FaBars
							size={18}
							className=' group-hover:scale-110 transition delay-100 ease-in-out'
							onClick={() => handleTogglement(togglemenu)}
						/>
					) : (
						<FaTimes
							size={18}
							className=' group-hover:scale-110 transition delay-100 ease-in-out'
							onClick={() => handleTogglement(togglemenu)}
						/>
					)}
					menu
				</button>
			</nav>
		</footer>
	);
};

export default BottomNav;
