import Image from 'next/image';
import React from 'react';
import { BsHeart } from 'react-icons/bs';

const MatchHeader = ({ image, data }) => {
	console.log(image);
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
				<BsHeart className=' text-gray-600' />
			</div>
		</header>
	);
};

export default MatchHeader;
