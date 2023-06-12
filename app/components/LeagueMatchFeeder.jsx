'use client';

import React, { useEffect, useState } from 'react';

import Matches from './Matches';
import MatchHeader from './MatchHeader';

const LeagueMatchFeeder = ({ data, icon, isHeader }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const distinctCountries = data?.reduce((acc, favorite) => {
			if (!acc.includes(favorite.country)) {
				acc.push(favorite);
			}

			return acc;
		}, []);
		setCountries(distinctCountries);
	}, [data]);

	// initialising country categories
	let leagues = [];

	countries.map((country, i) => {
		const newList = data.filter(
			(fixture) => fixture.league.country === country?.league?.country
		);
		leagues.push(newList);
	});

	return (
		<article className='  flex flex-col w-full min-h-[40vh] bg-inherit items-center rounded-lg mb-3  '>
			{countries &&
				data?.length > 0 &&
				countries.map((country, i) => (
					<div
						key={i}
						className='flex flex-col w-full min-w-[280px] max-w-[320px] min-h-[10vh] bg-slate-300 items-center gap-4 p-1 rounded-lg mb-5'
					>
						<MatchHeader data={[country]} />
						{countries
							.filter(
								(fixture) =>
									fixture.league.country === country?.league?.country &&
									fixture.league.name === country?.league?.name
							)

							.map((country, i) => (
								<Matches key={i} data={country} />
							))}
					</div>
				))}
		</article>
	);
};

export default LeagueMatchFeeder;
