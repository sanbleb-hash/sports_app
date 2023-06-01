'use client';

import React from 'react';

import Matches from './Matches';
import MatchHeader from './MatchHeader';

const LeagueMatchFeeder = ({ data, icon, isHeader }) => {
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

	return (
		<>
			{world.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<MatchHeader data={world} image={world[0]?.league?.flag} />
						)}

						{/* games */}

						{world.map((league, i) => (
							<Matches key={i} data={league} />
						))}
					</>
				</article>
			)}

			{epl.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					<>
						{isHeader && (
							<MatchHeader data={epl} image={epl[0]?.league?.flag} />
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
							<MatchHeader data={laliga} image={laliga[0]?.league?.flag} />
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
							<MatchHeader
								data={bundesliga}
								image={bundesliga[0]?.league?.flag}
							/>
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
								<MatchHeader data={serieA} image={serieA[0]?.league?.flag} />
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
								<MatchHeader data={ligueA} image={ligueA[0]?.league?.flag} />
							)}
						</>
					}
					{ligueA.map((league) => (
						<Matches key={league?.league.id} data={league} />
					))}
				</article>
			)}
			{psl.length > 0 && (
				<article className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2   p-1 rounded-lg mb-3  '>
					{
						<>
							{isHeader && (
								<MatchHeader data={psl} image={psl[0]?.league?.flag} />
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
							<MatchHeader data={brazil} image={brazil[0]?.league?.flag} />
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
							<MatchHeader
								data={argentina}
								image={argentina[0]?.league?.flag}
							/>
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
							<MatchHeader data={mexico} image={mexico[0]?.league?.flag} />
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
