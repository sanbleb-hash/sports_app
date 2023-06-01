'use client';

import { tableData, teamStatistics } from '@/app/actions/fixtureActions';
import MatchFeeder from '@/app/components/MatchFeeder';
import RecentForm from '@/app/components/RecentForm';
import Table from '@/app/components/Table';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const TeamId = () => {
	const { teamId } = useParams();
	const { response } = teamStatistics;
	const { response: table } = tableData;

	const wiget = (
		<span className=' bg-green-500 w-[20px] h-[20px] rounded-3xl flex items-center justify-center text-sm p-2 '>
			w
		</span>
	);

	return (
		<section className=' w-[90vw] md:w-[80vw] min-h-[30vh] flex flex-col md:grid grid-cols-3  bg-gray-500 py-36 mx-auto md:p-5 '>
			<article className=' col-span-1 md:col-span-2 md:mt-32  '>
				<div className=' w-full min-h-[20vh] flex flex-col md:flex-row items-start justify-between p-3 gap-5 bg-gradient-to-r bg-black/5 via-black/5 from-black/30 rounded-lg '>
					<div className=' w-full min-h-[20vh] flex flex-col md:flex-row items-center md:items-start p-3 gap-5 bg-gradient-to-r from-black/30 rounded-lg '>
						<Image
							src={response?.team?.logo || '/imgs/newcastle.logo.png'}
							alt='team logo'
							width='70'
							height='70'
							className='  shadow-md w'
						/>
						<div className=' flex flex-col items-center gap-3  '>
							<h2 className=' text-lg font-semibold text-gray-300'>
								{response?.team?.name}
							</h2>
							<span className=' text-sm text-gray-400'>
								{response?.league?.country}
							</span>
						</div>
					</div>
					{/* competetions card */}
					<div className=' w-full md:w-1/2 lg:w-1/4 flex flex-col items-center md:items-start gap-2 bg-gradient-to-tr  bg-black/20 via-black/5 from-black/60 rounded-md p-2 shadow-md'>
						<h2 className=' font-semibold text-lg text-gray-300'>
							competetions
						</h2>
						<div className=' w-full flex flex-col items-center md:items-start gap-2  p-2 shadow-md'>
							<span className=' text-sm text-gray-400'>
								{response?.league?.name}
							</span>
							<span className=' text-sm text-gray-400'>fa cup</span>
							<span className=' text-sm text-gray-400'>ueropa league</span>
						</div>
					</div>
				</div>
				<div className=' p-2 min-h-[30vh] bg-gray-800 rounded-lg w-full mt-5 '>
					<div className=' flex flex-col items-start  bg-gradient-to-tr  bg-black/20 via-black/5 from-black/60 rounded-md  gap-3 p-5 mb-3  '>
						<p className=' text-sm text-gray-400'>
							<span className=' text-sm md:text-lg font-semibold capitalize'>
								biggest home wins
							</span>{' '}
							: {response?.biggest.wins.home}
						</p>
						<p className=' text-sm text-gray-400'>
							<span className=' text-sm md:text-lg font-semibold capitalize'>
								biggest away wins
							</span>{' '}
							: {response?.biggest.wins.away}
						</p>
						<p className=' text-sm text-gray-400 flex items-center gap-3'>
							<span className=' text-sm md:text-lg font-semibold capitalize  border-l pl-2 '>
								venue : <small className=' text-sm'>sampa room</small>
							</span>
							<span className=' text-sm md:text-lg font-semibold capitalize  border-l pl-2 '>
								capacity : <small className=' text-sm'>86,000</small>
							</span>
							<span className=' text-sm md:text-lg font-semibold capitalize border-l pl-2'>
								city : <small className=' text-sm'>liverpool</small>
							</span>
						</p>
					</div>

					<MatchFeeder icon={wiget} />
					<MatchFeeder icon={wiget} />
					<MatchFeeder icon={wiget} />
					<MatchFeeder icon={wiget} />
				</div>
			</article>
			<aside className=' flex flex-col gap-5 p-2  md:mt-32 '>
				<RecentForm data={response.form} />
				<div>
					<Table data={table} />
				</div>
			</aside>
		</section>
	);
};

export default TeamId;
