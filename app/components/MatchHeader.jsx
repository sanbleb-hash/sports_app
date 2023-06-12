'use client';

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import { FavoriteContext } from '../libs/context/favoriteContext';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

const MatchHeader = ({ data }) => {
	const [favored, setFavored] = useState(false);
	const router = useRouter();

	const {
		state: { favorites },
		isLoading,
		dispatch,
	} = useContext(FavoriteContext);

	const handleFavoring = (id) => {
		dispatch({
			type: 'FavorIngStart',
		});
		const { league } = data?.find((item) => item?.league?.id === id);

		dispatch({
			type: 'Favoring',
			payload: { ...league },
		});
	};

	// fields initialisation

	const image = data[0]?.league?.flag || data?.league?.flag;
	const itemId = data[0]?.league?.id || data?.league?.id;
	const countryName = data[0]?.league?.country || data?.league?.country;
	const leagueName = data[0]?.league?.name || data?.league?.name;

	useEffect(() => {
		if (favorites?.some((favorite) => favorite?.id === itemId))
			setFavored(true);
	}, [itemId, favorites]);

	return (
		<header className='w-full flex items-center justify-between '>
			<div className=' w-full flex items-center gap-4 pb-2 '>
				{/* country flag */}
				<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full overflow-hidden border border-gray-500 drop-shadow-lg'>
					<Image
						src={image}
						alt='country flag'
						fill
						className=' object-cover'
					/>
				</i>
				<div className=' flex flex-col items-start capitalize '>
					{/* country */}
					<h2 className=' text-sm text-gray-500'>{countryName}</h2>
					{/* competetion */}
					<p className=' text-xs text-slate-400 truncate'>{leagueName}</p>
				</div>
			</div>
			<div className=' border-l pl-4 border-gray-400'>
				{isLoading ? (
					<ImSpinner2 className='text-lg text-gray-500 animate-spin' />
				) : favored ? (
					<BsHeartFill
						className={clsx(' text-red-500', favored ? ' text-red-500' : '')}
						onClick={() => {
							handleFavoring(itemId);
							router.refresh();
						}}
					/>
				) : (
					<BsHeart
						className={clsx(' text-gray-600')}
						onClick={() => handleFavoring(itemId)}
					/>
				)}
			</div>
		</header>
	);
};

export default MatchHeader;
