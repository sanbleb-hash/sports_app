'use client';

import {
	BsFillClockFill,
	BsClockHistory,
	BsFillCalendar2CheckFill,
	BsSearch,
} from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import React, { useContext, useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import Sidemenu from './Sidemenu';
import { SearchContext } from '../libs/context/searchContext';

const TopNav = () => {
	const [isLatest, setIslatest] = useState(false);
	const { isSearch, dispatch, togglemenu, handleTogglement } =
		useContext(SearchContext);

	return (
		<header className=' w-screen min-h-[10vh] lg:h-[8vh] bg-gray-800 text-white fixed z-50 top-0 flex items-center flex-col  gap-y-1  '>
			<nav className=' flex w-[90vw] md:w-[80vw] min-h-[50px]  mx-auto items-center justify-between'>
				<h2 className=' relative flex items-center gap-2 text-white text-sm font-semibold '>
					<Image
						src='/imgs/sofascore.logo.png'
						alt='logo'
						className=' w-[30px]  h-[30px]'
						width={100}
						height={100}
					/>
					<Link href={'/'} className=' text-sm capitalize'>
						sofaScoreKnockOff
					</Link>
				</h2>

				<ul
					className=' flex items-center gap-4 object-cover
            '
				>
					<li className='  flex items-center text-white text-sm'>
						<BsSearch
							className=' text-sm'
							onClick={() => {
								handleTogglement(togglemenu);

								dispatch(isSearch);
							}}
						/>
					</li>
					<li
						className=' flex items-center gap- bg-transparent/20 rounded-full  w-[2rem]  '
						onClick={() => setIslatest((prev) => !prev)}
					>
						<button className=' flex items-center gap-2 transition-all delay-200 duration-150'>
							{isLatest ? (
								<span className=' flex items-center gap-2'>
									<BsFillClockFill className=' text-white text-lg self-start transition-all delay-200 duration-150' />
									<span className='bg-green-300 h-2 w-2 animate-pulse rounded-3xl'></span>
								</span>
							) : (
								<BsClockHistory className=' text-white text-lg self-end ml-4 transition-all delay-200 duration-150' />
							)}
						</button>
					</li>

					{isLatest ? (
						<li className=' flex items-center text-white text-sm'>
							<BsFillCalendar2CheckFill className=' text-sm' />
						</li>
					) : (
						<span className=' text-[8px] md:text-[10px]  py-2  px-2 bg-green-500 rounded-lg flex items-center justify-center '>
							all time
						</span>
					)}
					<li>
						<FaUser />
					</li>
				</ul>
			</nav>
			{togglemenu && <Sidemenu />}
		</header>
	);
};

export default TopNav;
