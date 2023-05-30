'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Table = () => {
	const router = useRouter();

	const standings = [
		{
			team: 'Team A',
			played: 10,
			won: 7,
			drawn: 2,
			lost: 1,
			goalsFor: 25,
			goalsAgainst: 10,
			goalDifference: 15,
			points: 23,
		},
		{
			team: 'Team B',
			played: 10,
			won: 6,
			drawn: 3,
			lost: 1,
			goalsFor: 20,
			goalsAgainst: 12,
			goalDifference: 8,
			points: 21,
		},
		{
			team: 'Team C',
			played: 10,
			won: 5,
			drawn: 4,
			lost: 1,
			goalsFor: 18,
			goalsAgainst: 10,
			goalDifference: 8,
			points: 19,
		},
		{
			team: 'Team D',
			played: 10,
			won: 4,
			drawn: 4,
			lost: 2,
			goalsFor: 15,
			goalsAgainst: 12,
			goalDifference: 3,
			points: 16,
		},
		{
			team: 'Team E',
			played: 10,
			won: 3,
			drawn: 5,
			lost: 2,
			goalsFor: 14,
			goalsAgainst: 12,
			goalDifference: 2,
			points: 14,
		},
		{
			team: 'Team F',
			played: 10,
			won: 2,
			drawn: 5,
			lost: 3,
			goalsFor: 10,
			goalsAgainst: 12,
			goalDifference: -2,
			points: 11,
		},
		{
			team: 'Team G',
			played: 10,
			won: 2,
			drawn: 3,
			lost: 5,
			goalsFor: 8,
			goalsAgainst: 15,
			goalDifference: -7,
			points: 9,
		},
		{
			team: 'Team H',
			played: 10,
			won: 1,
			drawn: 4,
			lost: 5,
			goalsFor: 6,
			goalsAgainst: 18,
			goalDifference: -12,
			points: 7,
		},
		{
			team: 'Team I',
			played: 10,
			won: 1,
			drawn: 3,
			lost: 6,
			goalsFor: 5,
			goalsAgainst: 20,
			goalDifference: -15,
			points: 6,
		},
		{
			team: 'Team J',
			played: 10,
			won: 0,
			drawn: 2,
			lost: 8,
			goalsFor: 3,
			goalsAgainst: 25,
			goalDifference: -22,
			points: 2,
		},
	];
	return (
		<div className=' p-2 min-h-[30vh] bg-gray-800 rounded-lg w-full'>
			<h3 className=' text-sm capitalize text-gray-300 mb-4'>standings</h3>
			<div className=' flex flex-col gap-3 w-full '>
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
				{standings.map((team, i) => (
					<div
						key={i}
						className=' flex items-center justify-between w-full odd:bg-black text-slate-300 cursor-pointer hover:bg-slate-400 '
						onClick={() => router.push('/team/' + team.team)}
					>
						<span className=' text-sm px-3 '>{team.team}</span>
						<div className='  flex items-center self-end '>
							<span className=' text-sm px-3 '>{team.played}</span>
							<span className=' text-sm px-3 '>{team.won}</span>
							<span className=' text-sm px-3 '>{team.drawn}</span>
							<span className=' text-sm px-3 '>{team.lost}</span>
							<span className=' text-sm px-3 '>{team.points}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Table;
