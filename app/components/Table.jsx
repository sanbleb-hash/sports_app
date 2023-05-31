'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Table = ({ data }) => {
	const router = useRouter();
	const [league] = data;

	const standings = league.league.standings;
	console.log(league);
	return (
		<div className=' p-2 min-h-[30vh] bg-gray-800 rounded-lg w-full'>
			<header className=' w-full flex justify-between items-center'>
				<h3 className=' text-xs capitalize text-gray-300 mb-4'>
					{league?.league?.name} standings
				</h3>
				<Image
					src={league?.league?.flag}
					alt='team logo'
					height='30'
					width='30'
				/>
			</header>
			<div className=' flex flex-col gap-3 w-full py-5 '>
				<div className=' flex w-full  gap-3  items-center justify-between text-gray-400'>
					<span>team</span>
					<div className=' flex  items-center justify-between '>
						<span className=' text-sm px-3 '>p</span>
						<span className=' text-sm px-3 '>w</span>
						<span className=' text-sm px-3 '>d</span>
						<span className=' text-sm px-3 '>l</span>
						<span className=' text-sm px-3 '>p</span>
					</div>
				</div>
				{league.league.standings[0]?.map((team, i) => (
					<div
						key={i}
						className=' flex items-start justify-between w-full odd:bg-black text-slate-300 cursor-pointer hover:bg-slate-400 '
						onClick={() =>
							router.push(
								`/team/${team.team.id}?leagueId=${league?.league?.id}`
							)
						}
					>
						<div className=' flex items-start    text-slate-300  '>
							<span className=' text-xs px-3 self-start '>{team?.rank}</span>
							<span className=' text-xs px-3 self-start '>
								{team?.team?.name}
							</span>
						</div>

						<div className='  flex items-center self-end '>
							<span className=' text-xs px-3 '>{team?.all?.played}</span>
							<span className=' text-xs px-3 '>{team?.all?.win}</span>
							<span className=' text-xs px-3 '>{team?.all?.draw}</span>
							<span className=' text-xs px-3 '>{team?.all?.lose}</span>
							<span className=' text-xs px-3 '>{team?.points}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Table;
