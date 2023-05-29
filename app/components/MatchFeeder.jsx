'use client';

import React from 'react';
import { FaBasketballBall, FaChevronCircleDown } from 'react-icons/fa';
import { BsPinFill } from 'react-icons/bs';

const MatchFeeder = ({ data }) => {
	console.log(data);

	return (
		<>
			<div className=' flex flex-col w-full '>
				<article className=' w-full flex  flex-col items-center gap-2 '>
					<header className='w-full flex items-center justify-between '>
						<div className=' w-full flex items-center gap-4 pb-2 '>
							{/* country flag */}
							<i className=' text-2xl p-1 rounded-full'>
								<FaBasketballBall />
							</i>
							<div className=' flex flex-col items-center capitalize '>
								{/* country */}
								<h2 className=' text-sm text-gray-400'>
									{data?.tournament?.category.name}
								</h2>
								{/* competetion */}
								<p className=' text-sm text-slate-600'>
									{data?.tournament?.name}
								</p>
							</div>
						</div>
						<div className=' border-l pl-4 border-gray-400'>
							<BsPinFill className=' text-gray-600' />
						</div>
					</header>

					{/* games */}
					<div className='w-full flex items-center justify-between '>
						<div className=' w-full flex items-center gap-4 pb-2 '>
							{/*time and status */}
							<div className=' flex flex-col items-center justify-center text-xs font-medium text-gray-400 uppercase'>
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
								<p className=' text-sm text-gray-400 text-start'>
									{data?.homeTeam?.name}
								</p>
								{/* team2 */}
								<p className=' text-sm text-start   text-slate-600'>
									{data?.awayTeam?.name}
								</p>
							</div>
						</div>
						{/* scoreline */}
						<div className=' flex items-center'>
							<div className=' flex flex-col items-start justify-center capitalize  border-r pr-4 border-gray-400 '>
								{/*team1 score*/}
								<p className=' text-sm text-gray-400 text-start'>
									{data?.homeScore.current}
								</p>
								{/* team2 score */}
								<p className=' text-sm text-start   text-slate-600'>
									{data?.awayScore.current}
								</p>
							</div>

							<div className='pl-4 '>
								<BsPinFill className=' text-gray-600' />
							</div>
						</div>
					</div>
				</article>
			</div>
			<hr className=' bg-white  h-[2px] my-7' />
		</>
	);
};

export default MatchFeeder;
