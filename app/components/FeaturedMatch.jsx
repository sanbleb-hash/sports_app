'use client';

import React from 'react';

import { BsHeart } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const FeaturedMatch = ({ data, icon, isHeader }) => {
	const router = useRouter();

	return (
		<>
			<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-4 rounded-lg  '>
				{isHeader && (
					<header className='w-full flex items-center justify-between '>
						<div className=' w-full flex items-center gap-4 pb-2 '>
							{/* country flag */}
							<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
								<Image
									src={data?.league?.logo || ''}
									alt={data?.league?.country}
									fill
									className=' object-cover'
								/>
							</i>
							<div className=' flex flex-col items-start capitalize '>
								{/* country */}
								<h2 className=' text-sm text-gray-500'>
									{data?.league?.country}
								</h2>
								{/* competetion */}
								<p className=' text-xs text-slate-400 truncate w-3/4'>
									{data?.league?.name}
								</p>
							</div>
						</div>
						<div className=' border-l pl-4 border-gray-400'>
							<BsHeart className=' text-gray-600' />
						</div>
					</header>
				)}
				<div
					className='w-full flex items-center justify-between cursor-pointer hover:bg-transparent/5 transition-all px-2 border-b border-gray-500 pb-2 '
					onClick={() => setTeamId(`${data?.fixture?.id}`)}
				>
					<div className=' w-full flex items-center gap-4 pb-2 '>
						{/*time and status */}
						<div className=' flex flex-col items-center justify-center text-xs font-medium text-gray-400 uppercase '>
							<span>15:00</span>
							<span>
								{data?.fixture?.periods === 'second'
									? '2nd half'
									: 'first'
									? '1st half'
									: ft}
							</span>
						</div>

						<div className=' flex flex-col items-start justify-center capitalize  border-l  border-gray-400 '>
							{/*team1 */}
							<p
								className=' text-xs z-20
                   text-gray-400 text-start hover:underline'
								onClick={() => router.push(`team/${data?.fixture?.id}`)}
							>
								{data?.teams?.home?.name || 'team1'}
							</p>
							{/* team2 */}
							<p
								className=' text-xs z-20
                   text-start hover:underline  text-slate-600'
								onClick={() => router.push(`team/${data?.fixture?.id}`)}
							>
								{data?.teams?.away?.name || 'team2'}
							</p>
						</div>
					</div>
					{/* scoreline */}
					<div className=' flex items-center'>
						<div className=' flex flex-col items-start justify-center capitalize  border-r pr-4 border-gray-400 '>
							{/*team1 score*/}
							<p className=' text-xs text-gray-400 text-start'>
								{data?.goals?.home || 1}
							</p>
							{/* team2 score */}
							<p className=' text-xs text-start   text-slate-600'>
								{data?.goals?.away || 0}
							</p>
						</div>

						<div className=' '>{icon}</div>
					</div>
				</div>
			</article>

			<hr className=' bg-white  h-[1/2px] my-7' />
		</>
	);
};

export default FeaturedMatch;
