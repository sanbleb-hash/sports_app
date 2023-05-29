'use client';

import {
	BsChevronCompactDown,
	BsFillClockFill,
	BsClockHistory,
	BsFillCalendar2CheckFill,
	BsSearch,
} from 'react-icons/bs';
import { FaTimes, FaUser } from 'react-icons/fa';

import React, { useState } from 'react';
import Image from 'next/image';
import CategoriesList from './categoriesList';
import SearchComponent from './SearchComponent';

const TopNav = () => {
	const [isLatest, setIslatest] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	return (
		<header className=' w-screen min-h-[10vh] lg:h-[8vh] bg-gray-800 text-white fixed top-0 flex items-center flex-col  gap-y-1  '>
			<nav className=' flex w-[90vw] md:w-[80vw] min-h-[50px]  mx-auto items-center justify-between'>
				<h2 className=' relative flex items-center gap-2 text-white text-sm font-semibold '>
					<Image
						src='/imgs/sofascore.logo.png'
						alt='logo'
						className=' w-[30px]  h-[30px]'
						width={100}
						height={100}
					/>
					<p className=' text-sm capitalize'>sofaScoreKnockOff</p>
				</h2>

				<ul
					className=' flex items-center gap-4 object-cover
            '
				>
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
					{!isSearch && (
						<li className=' lg:hidden flex items-center text-white text-sm'>
							<BsSearch
								className=' text-sm'
								onClick={() => setIsSearch(true)}
							/>
						</li>
					)}

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
			<nav
				aria-label='secondary navigaton'
				className=' flex min-h-[50px] w-full  h-full mx-auto items-center justify-between bg-gray-600'
			>
				<ul className=' flex items-center justify-center  w-[90vw] md:w-[80vw] mx-auto gap-4'>
					{isSearch ? (
						<>
							<SearchComponent />
							<FaTimes
								className=' absolute hover:scale-110 hover:opacity-75 transition-all  md:right-6 right-3'
								onClick={() => setIsSearch((prev) => !prev)}
							/>
						</>
					) : (
						<CategoriesList />
					)}
				</ul>
			</nav>
		</header>
	);
};

export default TopNav;
