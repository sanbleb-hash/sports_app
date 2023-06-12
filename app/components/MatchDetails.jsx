'use client';

import React, { useEffect } from 'react';

import { fixtures } from '../actions/fixtureActions';
import Image from 'next/image';

import { useRouter, useSearchParams } from 'next/navigation';
import { fixtureLineups } from '../actions/lineUpsAction';

const MatchDetails = ({ id }) => {
	let fixtureId;
	const paramId = useSearchParams('id').get('id');

	id === '' || id === undefined || id === null
		? (fixtureId = paramId)
		: (fixtureId = id);

	const fixture = fixtures.response
		.map((match) => match)
		.find((x) => x.fixture.id === Number(fixtureId));

	const router = useRouter();
	const players = fixtureLineups.response;
	console.log(fixture);

	return (
		<div className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2 p-4 rounded-lg  '>
			<header className=' w-full '>
				<div className=' flex items-center min-w-1/2 justify-between py-2 border-b border-gray-300 pb-2'>
					<Image
						src={fixture?.league?.logo}
						alt='league logo'
						height={15}
						width={20}
						className='  rounded-full border border-gray-500 relative '
					/>
					<p className=' text-xs text-gray-500'>{fixture?.league?.name}</p>
				</div>
				<div
					className=' flex justify-between w-full text-gray-500 pt-2 
             '
				>
					<p
						className='text-xs font-semibold text-gray-500 capitalize cursor-pointer'
						onClick={() => router.push(`/team/${fixture?.teams?.home?.id}`)}
					>
						{fixture?.teams?.home?.name}
					</p>
					{/* score bord */}
					<span className=' flex items-center text-rose-400 gap-4 text-2sm'>
						<span className=' flex flex-col text-smgap-2'>
							<small>{fixture?.goals?.home}</small>
							<small className='  text-xs  text-gray-400'>
								({fixture?.score?.halftime.home})
							</small>
						</span>
						-
						<span className=' flex flex-col text-smgap-2'>
							<small>{fixture?.goals?.away}</small>
							<small className='  text-xs  text-gray-400'>
								({fixture?.score?.halftime?.away})
							</small>
						</span>
					</span>
					<p
						className='text-xs font-semibold text-gray-500 capitalize cursor-pointer'
						onClick={() => router.push(`/team/${fixture?.teams?.away?.id}`)}
					>
						{fixture?.teams?.away?.name}
					</p>
				</div>
			</header>

			<article
				className=' w-full text-white
            z-20 bg-black/30 px-2 rounded-lg
           flex flex-col items-center justify-center '
			>
				<small className=' text-xs text-white text-center'>
					{fixture?.fixture?.status?.short}
				</small>
				<article className='  text-white flex w-full justify-between items-start p-4 '>
					<div className=' flex flex-col gap-2'>
						<span className='text-xs'>possesion</span>
						<span className=' flex-1 border rounded-md p-2 text-[8px]'>
							12% | 88%
						</span>
					</div>
					<div className=' flex flex-col gap-2'>
						<span className='text-xs'>shots</span>
						<span className=' flex-1 border rounded-md p-2 text-[8px]'>
							12 | 8
						</span>{' '}
					</div>
					<div className=' flex flex-col gap-2 '>
						<span className='text-xs'>on target</span>{' '}
						<span className=' flex-1 border rounded-md p-2 text-[8px] self-end'>
							1 | 0
						</span>{' '}
					</div>
				</article>
				<footer
					className=' w-full text-white
            z-20 bg-black/30 px-2 py-6 rounded-lg
           flex items-center justify-center gap-2 '
				>
					<div className=' border-r border-gray-300 px-3'>
						<h3 className=' text-sm font-semibold my-3 text-gray-300 text-center w-[100px] truncate '>
							{players[1]?.team?.name}
						</h3>
						<p className=' text-xs text-gray-700 p-1 mb-3 bg-slate-200 rounded-md'>
							{players[1]?.formation}
						</p>
						<div className=' flex flex-col gap-2 text-xs text-ellipsis'>
							{players[1].startXI.map((player) => (
								<div
									key={player?.player?.id}
									className=' flex items-start flex-col gap-y-2'
								>
									<p className=' flex items-center gap-2'>
										{' '}
										<small className=' text-[8px] bg-black p-1 rounded-3xl text-slate-200'>
											{player?.player?.number}
										</small>{' '}
										-<span className=' '>{player?.player?.name}</span>
									</p>
								</div>
							))}
							<div className=' text-gray-400 text-xs'>
								<h3 className=' text-sm font-semibold my-3'>subs</h3>
								<div className=' flex flex-col items-start'>
									<p className=' text-xs  mb-3'>
										{' '}
										<span className=' text-opacity-90 uppercase'>
											coach :{' '}
										</span>{' '}
										{players[1]?.coach?.name}{' '}
									</p>

									{players[1].substitutes.map((player) => (
										<div
											key={player?.player?.id}
											className=' flex items-start flex-col gap-y-2'
										>
											<p className=' flex items-center gap-2'>
												{' '}
												<small className=' text-[8px] bg-black p-1 rounded-3xl text-slate-200'>
													{player?.player?.number}
												</small>{' '}
												-<span className=' '>{player?.player?.name}</span>
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div>
						<h3 className=' text-sm font-semibold my-3 text-gray-300 text-center w-[100px] truncate '>
							{players[0]?.team?.name}
						</h3>
						<p className=' text-xs text-gray-700  p-1 mb-3 bg-slate-200 rounded-md'>
							{players[0]?.formation}
						</p>
						<div className=' flex flex-col gap-2 text-xs text-ellipsis'>
							{players[0].startXI.map((player) => (
								<div
									key={player?.player?.id}
									className=' flex items-start flex-col gap-y-2'
								>
									<p className=' flex items-center gap-2'>
										{' '}
										<small className=' text-[8px] bg-black p-1 rounded-3xl text-slate-200'>
											{player?.player?.number}
										</small>{' '}
										-<span className=' '>{player?.player?.name}</span>
									</p>
								</div>
							))}
							<div className=' text-gray-400 text-xs'>
								<h3 className=' text-sm font-semibold my-3'>subs</h3>
								<div className=' flex flex-col items-start'>
									<p className=' text-xs  mb-3 flex items-start flex-col gap-y-2'>
										{' '}
										<span className=' text-opacity-90 uppercase'>
											coach :{players[0]?.coach?.name}{' '}
										</span>
									</p>

									{players[0].substitutes.map((player) => (
										<div
											key={player?.player?.id}
											className=' flex items-start flex-col gap-y-2'
										>
											<p className=' flex items-center gap-2'>
												{' '}
												<small className=' text-[8px] bg-black p-1 rounded-3xl text-slate-200'>
													{player?.player?.number}
												</small>{' '}
												-<span className=' '>{player?.player?.name}</span>
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</footer>
			</article>
		</div>
	);
};

export default MatchDetails;
