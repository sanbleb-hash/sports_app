'use client';

import React from 'react';

import Matches from './Matches';
import MatchHeader from './MatchHeader';

const LeagueMatchFeeder = ({ data, icon, isHeader }) => {
	// leage cards
	const psl = data?.filter((match) => match.league.country === 'South-Africa');
	const epl = data?.filter((match) => match.league.country === 'England');
	const laliga = data?.filter((match) => match.league.country === 'Spain');
	const bundesliga = data?.filter(
		(match) => match.league.country === 'Germany'
	);
	const ligueA = data?.filter((match) => match.league.country === 'France');
	const serieA = data?.filter((match) => match.league.country === 'Italy');
	const brazil = data?.filter((match) => match.league.country === 'Brazil');
	const mexico = data?.filter((match) => match.league.country === 'Mexico');
	const argentina = data?.filter(
		(match) => match.league.country === 'Argentina'
	);
	const world = data?.filter((match) => match.league.country === 'World');

	return (
		<>
			{world?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && <MatchHeader data={world} />}

						{/* games */}

						{world?.map((league, i) => (
							<Matches key={i} data={league} />
						))}
					</>
				</article>
			)}

			{epl?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && <MatchHeader data={epl} />}

						{/* games */}

						{epl?.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}

			{laliga?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && <MatchHeader data={laliga} />}

						{/* games */}
						{laliga?.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}
			{bundesliga?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<MatchHeader
								data={bundesliga}
								image={bundesliga[0]?.league?.flag}
							/>
						)}

						{/* games */}

						{bundesliga?.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}

			{serieA?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					{
						<>
							{isHeader && <MatchHeader data={serieA} />}

							{/* games */}
							{serieA?.map((league) => (
								<Matches key={league?.league?.id} data={league} />
							))}
						</>
					}
				</article>
			)}

			{ligueA?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					{<>{isHeader && <MatchHeader data={ligueA} />}</>}
					{ligueA?.map((league) => (
						<Matches key={league?.league.id} data={league} />
					))}
				</article>
			)}
			{psl?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					{
						<>
							{isHeader && <MatchHeader data={psl} />}

							{/* games */}
							{psl?.map((league) => (
								<Matches key={league?.league?.id} data={league} />
							))}
						</>
					}
				</article>
			)}
			{brazil?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && <MatchHeader data={brazil} />}

						{/* games */}
						{brazil?.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}

			{argentina?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && <MatchHeader data={argentina} />}

						{/* games */}
						{argentina?.map((league) => (
							<Matches key={league?.league?.id} data={league} />
						))}
					</>
				</article>
			)}
			{mexico?.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && <MatchHeader data={mexico} />}

						{/* games */}

						{mexico?.map((league) => (
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
