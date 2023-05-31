'use client';

import React from 'react';

import { BsHeart } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Matches from './Matches';
import Image from 'next/image';

const LeagueMatchFeeder = ({ data, icon, isHeader }) => {
	const router = useRouter();

	const psl = data.filter((match) => match.league.country === 'South-Africa');
	const epl = data.filter((match) => match.league.country === 'England');
	const laliga = data.filter((match) => match.league.country === 'Spain');
	const bundesliga = data.filter((match) => match.league.country === 'Germany');
	const ligueA = data.filter((match) => match.league.country === 'France');
	const serieA = data.filter((match) => match.league.country === 'Italy');
	const brazil = data.filter((match) => match.league.country === 'Brazil');
	const mexico = data.filter((match) => match.league.country === 'Mexico');
	const argentina = data.filter(
		(match) => match.league.country === 'Argentina'
	);
	const world = data.filter((match) => match.league.country === 'World');
	console.log(serieA[0].league.flag);

	return (
		<>
			{world.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<header className='w-full flex items-center justify-between '>
								<div className=' w-full flex items-center gap-4 pb-2 '>
									{/* country flag */}
									<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
										<Image
											src={world[0]?.league?.logo || ''}
											alt={world[0]?.league?.country}
											fill
											className=' object-cover'
										/>
									</i>
									<div className=' flex flex-col items-start capitalize '>
										{/* country */}
										<h2 className=' text-sm text-gray-500'>
											{world[0]?.league?.country}
										</h2>
										{/* competetion */}
										<p className=' text-xs text-slate-400 truncate w-3/4'>
											{world[0]?.league?.name}
										</p>
									</div>
								</div>
								<div className=' border-l pl-4 border-gray-400'>
									<BsHeart className=' text-gray-600' />
								</div>
							</header>
						)}

						{/* games */}

						{world.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}

			{epl.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<header className='w-full flex items-center justify-between '>
								<div className=' w-full flex items-center gap-4 pb-2 '>
									{/* country flag */}
									<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
										<Image
											src={epl[0]?.league?.logo || ''}
											alt={epl[0]?.league?.country}
											fill
											className=' object-cover'
										/>
									</i>
									<div className=' flex flex-col items-start capitalize '>
										{/* country */}
										<h2 className=' text-sm text-gray-500'>
											{epl[0]?.league?.country}
										</h2>
										{/* competetion */}
										<p className=' text-xs text-slate-400 truncate w-3/4'>
											{epl[0]?.league?.name}
										</p>
									</div>
								</div>
								<div className=' border-l pl-4 border-gray-400'>
									<BsHeart className=' text-gray-600' />
								</div>
							</header>
						)}

						{/* games */}

						{epl.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}

			{laliga.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<header className='w-full flex items-center justify-between '>
								<div className=' w-full flex items-center gap-4 pb-2 '>
									{/* country flag */}
									<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
										<Image
											src={laliga[0]?.league?.logo || ''}
											alt={laliga[0]?.league?.country}
											fill
											className=' object-cover'
										/>
									</i>
									<div className=' flex flex-col items-start capitalize '>
										{/* country */}
										<h2 className=' text-sm text-gray-500'>
											{laliga[0]?.league?.country}
										</h2>
										{/* competetion */}
										<p className=' text-xs text-slate-400 truncate w-3/4'>
											{laliga[0]?.league?.name}
										</p>
									</div>
								</div>
								<div className=' border-l pl-4 border-gray-400'>
									<BsHeart className=' text-gray-600' />
								</div>
							</header>
						)}

						{/* games */}
						{laliga.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}
			{bundesliga.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<header className='w-full flex items-center justify-between '>
								<div className=' w-full flex items-center gap-4 pb-2 '>
									{/* country flag */}
									<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
										<Image
											src={bundesliga[0]?.league?.logo || ''}
											alt={bundesliga[0]?.league?.country}
											fill
											className=' object-cover'
										/>
									</i>
									<div className=' flex flex-col items-start capitalize '>
										{/* country */}
										<h2 className=' text-sm text-gray-500'>
											{bundesliga[0]?.league?.country}
										</h2>
										{/* competetion */}
										<p className=' text-xs text-slate-400 truncate w-3/4'>
											{bundesliga[0]?.league?.name}
										</p>
									</div>
								</div>
								<div className=' border-l pl-4 border-gray-400'>
									<BsHeart className=' text-gray-600' />
								</div>
							</header>
						)}

						{/* games */}

						{bundesliga.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}

			{serieA.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					{
						<>
							{isHeader && (
								<header className='w-full flex items-center justify-between '>
									<div className=' w-full flex items-center gap-4 pb-2 '>
										{/* country flag */}
										<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
											<Image
												src={serieA[0]?.league?.flag || ''}
												alt={serieA[0]?.league?.country}
												fill
												className=' object-cover'
											/>
										</i>
										<div className=' flex flex-col items-start capitalize '>
											{/* country */}
											<h2 className=' text-sm text-gray-500'>
												{serieA[0]?.league?.country}
											</h2>
											{/* competetion */}
											<p className=' text-xs text-slate-400 truncate w-3/4'>
												{serieA[0]?.league?.name}
											</p>
										</div>
									</div>
									<div className=' border-l pl-4 border-gray-400'>
										<BsHeart className=' text-gray-600' />
									</div>
								</header>
							)}

							{/* games */}
							{serieA.map((league) => (
								<Matches key={league?.league?.id} data={league} />
							))}
						</>
					}
				</article>
			)}

			{ligueA.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					{
						<>
							{isHeader && (
								<header className='w-full flex items-center justify-between '>
									<div className=' w-full flex items-center gap-4 pb-2 '>
										{/* country flag */}
										<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
											<Image
												src={ligueA[0]?.league?.logo || ''}
												alt={ligueA[0]?.league?.country}
												fill
												className=' object-cover'
											/>
										</i>
										<div className=' flex flex-col items-start capitalize '>
											{/* country */}
											<h2 className=' text-sm text-gray-500'>
												{ligueA[0]?.league?.country}
											</h2>
											{/* competetion */}
											<p className=' text-xs text-slate-400 truncate w-3/4'>
												{ligueA[0]?.league?.name}
											</p>
										</div>
									</div>
									<div className=' border-l pl-4 border-gray-400'>
										<BsHeart className=' text-gray-600' />
									</div>
								</header>
							)}

							{/* games */}
							{ligueA.map((league) => (
								<Matches key={league?.league?.id} data={league} />
							))}
						</>
					}
				</article>
			)}
			{psl.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					{
						<>
							{isHeader && (
								<header className='w-full flex items-center justify-between '>
									<div className=' w-full flex items-center gap-4 pb-2 '>
										{/* country flag */}
										<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
											<Image
												src={psl[0]?.league?.logo || ''}
												alt={psl[0]?.league?.country}
												fill
												className=' object-cover'
											/>
										</i>
										<div className=' flex flex-col items-start capitalize '>
											{/* country */}
											<h2 className=' text-sm text-gray-500'>
												{psl[0]?.league?.country}
											</h2>
											{/* competetion */}
											<p className=' text-xs text-slate-400 truncate w-3/4'>
												{psl[0]?.league?.name}
											</p>
										</div>
									</div>
									<div className=' border-l pl-4 border-gray-400'>
										<BsHeart className=' text-gray-600' />
									</div>
								</header>
							)}

							{/* games */}
							{psl.map((league) => (
								<Matches key={league?.league?.id} data={league} />
							))}
						</>
					}
				</article>
			)}
			{brazil.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<header className='w-full flex items-center justify-between '>
								<div className=' w-full flex items-center gap-4 pb-2 '>
									{/* country flag */}
									<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
										<Image
											src={brazil[0]?.league?.logo || ''}
											alt={brazil[0]?.league?.country}
											fill
											className=' object-cover'
										/>
									</i>
									<div className=' flex flex-col items-start capitalize '>
										{/* country */}
										<h2 className=' text-sm text-gray-500'>
											{brazil[0]?.league?.country}
										</h2>
										{/* competetion */}
										<p className=' text-xs text-slate-400 truncate w-3/4'>
											{brazil[0]?.league?.name}
										</p>
									</div>
								</div>
								<div className=' border-l pl-4 border-gray-400'>
									<BsHeart className=' text-gray-600' />
								</div>
							</header>
						)}

						{/* games */}
						{brazil.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}

			{argentina.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<header className='w-full flex items-center justify-between '>
								<div className=' w-full flex items-center gap-4 pb-2 '>
									{/* country flag */}
									<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
										<Image
											src={argentina[0]?.league?.logo || ''}
											alt={argentina[0]?.league?.country}
											fill
											className=' object-cover'
										/>
									</i>
									<div className=' flex flex-col items-start capitalize '>
										{/* country */}
										<h2 className=' text-sm text-gray-500'>
											{argentina[0]?.league?.country}
										</h2>
										{/* competetion */}
										<p className=' text-xs text-slate-400 truncate w-3/4'>
											{argentina[0]?.league?.name}
										</p>
									</div>
								</div>
								<div className=' border-l pl-4 border-gray-400'>
									<BsHeart className=' text-gray-600' />
								</div>
							</header>
						)}

						{/* games */}
						{argentina.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}
			{mexico.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<header className='w-full flex items-center justify-between '>
								<div className=' w-full flex items-center gap-4 pb-2 '>
									{/* country flag */}
									<i className=' relative w-[30px] h-[30px] text-2xl p-1 rounded-full'>
										<Image
											src={mexico[0]?.league?.logo || ''}
											alt={mexico[0]?.league?.country}
											fill
											className=' object-cover'
										/>
									</i>
									<div className=' flex flex-col items-start capitalize '>
										{/* country */}
										<h2 className=' text-sm text-gray-500'>
											{mexico[0]?.league?.country}
										</h2>
										{/* competetion */}
										<p className=' text-xs text-slate-400 truncate w-3/4'>
											{mexico[0]?.league?.name}
										</p>
									</div>
								</div>
								<div className=' border-l pl-4 border-gray-400'>
									<BsHeart className=' text-gray-600' />
								</div>
							</header>
						)}

						{/* games */}

						{mexico.map((league) => (
							<Matches key={league?.league.id} data={league} />
						))}
					</>
				</article>
			)}

			<hr className=' bg-white  h-[1/2px] my-7' />
		</>
	);
};

export default LeagueMatchFeeder;
