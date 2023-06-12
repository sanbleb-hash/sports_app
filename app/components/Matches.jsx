'use client';

import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { usePathname, useRouter } from 'next/navigation';
import { MdOutlineStadium, MdStadium } from 'react-icons/md';
import clsx from 'clsx';

const Matches = ({ data, icon = null }) => {
	const [teamId, setTeamId] = useState('');
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const newUrl = qs.stringifyUrl({
			url: pathname,
			query: {
				id: teamId,
			},
		});
		router.push(newUrl);
	}, [pathname, router, teamId]);
	const time = data?.fixture?.date?.split('T')[1].slice(0, 5);
	const awayWin = data?.goals?.away > data?.goals?.home;
	const homeWin = data?.goals?.home > data?.goals?.away;

	const getTime = (time) => {
		const miliSeconds = Math.floor(time / 60);
		const seconds = Math.floor(miliSeconds / 60);
		const mins = seconds % 60;

		return `${mins}  : ${seconds} muns`;
	};

	return (
		<article className=' w-full px-2 border-b border-gray-50 pb-2 '>
			<div className='w-full flex items-center justify-between  hover:bg-transparent/5 transition-all '>
				<div className=' w-full  flex items-center gap-4 pb-2 '>
					{/*time and status */}
					<div
						className=' hidden  lg:flex flex-col items-center justify-center text-xs font-medium text-gray-400 uppercase cursor-pointer '
						onClick={() => setTeamId(`${data?.fixture?.id}`)}
					>
						<span className=' text-[8px]'> {time}</span>
						<span>
							({data?.fixture?.status?.short}){' '}
							<span>
								{data?.fixture?.status?.elapsed < 10 ? (
									<>0{data?.fixture?.status?.elapsed}</>
								) : (
									data?.fixture?.status?.elapsed
								)}
								{data?.fixture?.status?.short !== 'FT' ? (
									<small className=' text-rose-400 text-sm animate-pulse'>
										&apos;
									</small>
								) : null}
							</span>{' '}
						</span>
					</div>

					<div
						className=' flex lg:hidden flex-col items-center justify-center text-xs font-medium text-gray-400 uppercase cursor-pointer '
						onClick={() => {
							router.push(`/match-details?id=${data?.fixture?.id}`);
						}}
					>
						<span> {time}</span>
						<span>
							{data?.fixture?.status?.short}
							<span>
								{data?.fixture?.status?.elapsed < 10 ? (
									<>0{data?.fixture?.status?.elapsed}</>
								) : (
									data?.fixture?.status?.elapsed
								)}
								{data?.fixture?.status?.short !== 'FT' ? (
									<small className=' text-rose-400 text-sm animate-pulse'>
										&apos;
									</small>
								) : null}
							</span>{' '}
						</span>
					</div>

					<div className='flex flex-col items-start justify-center capitalize  border-l  border-gray-400 pl-2 '>
						{/*team1 */}
						<p
							className={clsx(
								` text-xs z-20
                   text-start text-gray-400 cursor-pointer hover:underline`,
								homeWin && ' text-slate-600',
								awayWin && ' text-slate-600'
							)}
							onClick={() => setTeamId(`${data?.teams?.home?.id}`)}
						>
							{data?.teams?.home?.name || 'team1'}
						</p>
						{/* team2 */}
						<p
							className={clsx(
								` text-xs z-20
                   text-start text-gray-400 cursor-pointer hover:underline`,
								awayWin && ' text-slate-600',
								homeWin && ' text-slate-600'
							)}
							onClick={() => router.push(`team/${data?.teams?.home?.id}`)}
						>
							{data?.teams?.away?.name || 'team2'}
						</p>
					</div>
				</div>
				{/* scoreline */}
				<div className=' flex items-center'>
					<div className=' flex flex-col items-start justify-center capitalize  border-r pr-4 border-gray-400 '>
						{/*team1 score*/}
						<p
							className={clsx(
								' text-xs text-gray-400 text-start',
								homeWin && ' text-slate-600',
								awayWin && ' text-slate-600'
							)}
						>
							{data?.goals?.home || 1}
						</p>
						{/* team2 score */}
						<p
							className={clsx(
								' text-xs text-gray-400 text-start',
								awayWin && ' text-slate-600',
								homeWin && ' text-slate-600'
							)}
						>
							{data?.goals?.away || 0}
						</p>
					</div>
				</div>
			</div>
			<span className=' text-[8px] flex text-gray-400 items-center gap-2 '>
				<MdOutlineStadium className='text-lg text-gray-400' />
				{data?.fixture?.venue?.name}
			</span>
		</article>
	);
};

export default Matches;
