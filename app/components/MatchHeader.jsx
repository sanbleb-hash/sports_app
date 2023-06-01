'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FavoriteContext } from '../libs/context/favoriteContext';
import clsx from 'clsx';

const MatchHeader = ({ image, data }) => {
	const { state, dispatch } = useContext(FavoriteContext);

	console.log(state);
	const handleFavoring = (id) => {
		dispatch({
			type: 'Favoring',
			payload: id,
		});
		console.log(id);
	};

	return (
		<header className='w-full flex items-center justify-between '>
			<div className=' w-full flex items-center gap-4 pb-2 '>
				{/* country flag */}
				<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full overflow-hidden border border-gray-500 drop-shadow-lg'>
					<Image
						src={data[0]?.league?.flag || image}
						alt={data[0]?.league?.country}
						fill
						className=' object-cover'
					/>
				</i>
				<div className=' flex flex-col items-start capitalize '>
					{/* country */}
					<h2 className=' text-sm text-gray-500'>{data[0]?.league?.country}</h2>
					{/* competetion */}
					<p className=' text-xs text-slate-400 truncate w-3/4'>
						{data[0]?.league?.name}
					</p>
				</div>
			</div>
			<div className=' border-l pl-4 border-gray-400'>
				{state?.favored === true ? (
					<BsHeartFill
						className={clsx(
							' text-red-500',
							state?.favored === true ? ' text-red-500' : ''
						)}
					/>
				) : (
					<BsHeart
						className={clsx(
							' text-gray-600',
							state?.favored === true ? ' text-red-500' : ''
						)}
						onClick={() => handleFavoring(data[0]?.league?.id)}
					/>
				)}
			</div>
		</header>
	);
};

export default MatchHeader;
