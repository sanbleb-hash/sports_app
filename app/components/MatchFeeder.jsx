'use client';

import React from 'react';
import { FaBasketballBall, FaChevronCircleDown } from 'react-icons/fa';
import { BsHeart, BsPinFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const MatchFeeder = ({ data, icon, isHeader }) => {
	const router = useRouter();
	console.log(data);

	return (
		<>
			<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-4 rounded-lg  '>
				{isHeader && (
					<header className='w-full flex items-center justify-between '>
						<div className=' w-full flex items-center gap-4 pb-2 '>
							{/* country flag */}
							<i className=' text-2xl p-1 rounded-full'>
								<FaBasketballBall />
							</i>
							<div className=' flex flex-col items-start capitalize '>
								{/* country */}
								<h2 className=' text-sm text-gray-500'>basket ball</h2>
								{/* competetion */}
								<p className=' text-xs text-slate-400'>nba</p>
							</div>
						</div>
						<div className=' border-l pl-4 border-gray-400'>
							<BsHeart className=' text-gray-600' />
						</div>
					</header>
				)}

				{/* games */}
				<div
					className='w-full flex items-center justify-between cursor-pointer '
					onClick={() => console.log('clicked')}
				>
					<div className=' w-full flex items-center gap-4 pb-2 '>
						{/*time and status */}
						<div className=' flex flex-col items-center justify-center text-xs font-medium text-gray-400 uppercase '>
							<span>15:00</span>
							<span>
								{data?.lastPeriod === 'period2'
									? '2nd half'
									: 'period1'
									? '1st half'
									: ft}
							</span>
						</div>

						<div className=' flex flex-col items-start justify-center capitalize  border-l pl-4 border-gray-400 '>
							{/*team1 */}
							<p
								className=' text-sm text-gray-400 text-start'
								onClick={() => router.push('team/team1')}
							>
								{data?.homeTeam?.name || 'team1'}
							</p>
							{/* team2 */}
							<p
								className=' text-sm text-start   text-slate-600'
								onClick={() => router.push('team/team1')}
							>
								{data?.awayTeam?.name || 'team2'}
							</p>
						</div>
					</div>
					{/* scoreline */}
					<div className=' flex items-center'>
						<div className=' flex flex-col items-start justify-center capitalize  border-r pr-4 border-gray-400 '>
							{/*team1 score*/}
							<p className=' text-sm text-gray-400 text-start'>
								{data?.homeScore.current || '1'}
							</p>
							{/* team2 score */}
							<p className=' text-sm text-start   text-slate-600'>
								{data?.awayScore.current || '2'}
							</p>
						</div>

						<div className='pl-4 '>{icon}</div>
					</div>
				</div>
			</article>

			<hr className=' bg-white  h-[1/2px] my-7' />
		</>
	);
};

export default MatchFeeder;
