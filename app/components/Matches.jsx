'use client';

import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { usePathname, useRouter } from 'next/navigation';

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
	console.log(data);
	return (
		<div className='w-full flex items-center justify-between  hover:bg-transparent/5 transition-all px-2 border-b border-gray-500 pb-2 '>
			<div className=' w-full  flex items-center gap-4 pb-2 '>
				{/*time and status */}
				<div
					className=' flex flex-col items-center justify-center text-xs font-medium text-gray-400 uppercase cursor-pointer '
					onClick={() => setTeamId(`${data?.fixture?.id}`)}
				>
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
                   text-gray-400 text-start  cursor-pointer hover:underline'
						onClick={() => router.push(`team/${data?.teams?.home?.id}`)}
					>
						{data?.teams?.home?.name || 'team1'}
					</p>
					{/* team2 */}
					<p
						className=' text-xs z-20
                   text-start  cursor-pointer hover:underline  text-slate-600'
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
	);
};

export default Matches;
