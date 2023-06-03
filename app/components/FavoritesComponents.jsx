'use client';

import React, { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from '../libs/context/favoriteContext';
import MatchHeader from './MatchHeader';
import Matches from './Matches';
import { fixtures } from '../actions/fixtureActions';
import { useSearchParams } from 'next/navigation';
import MatchDetails from './MatchDetails';
import FeaturedMatch from './FeaturedMatch';

const FavoritesComponents = () => {
	const [countries, setCountries] = useState([]);
	const [showDetails, setShowDetails] = useState(false);

	const id = useSearchParams().get('id');

	const {
		state: { favorites },
	} = useContext(FavoriteContext);

	useEffect(() => {
		const distinctCountries = favorites.reduce((acc, favorite) => {
			if (!acc.includes(favorite.country)) {
				acc.push(favorite);
			}
			return acc;
		}, []);

		setCountries(distinctCountries);
	}, [favorites]);

	useEffect(() => {
		if (id) setShowDetails(true);
	}, [id]);

	// initialising country categories
	let leagues;
	countries.map(
		(country, i) =>
			(leagues = fixtures.response.filter(
				(fixture) => fixture.league.country === country?.country
			))
	);

	return (
		<section className=' grid items-start grid-cols-3 gap-3 pb-32 shadow-lg mx-auto'>
			<div className='w-full col-span-3 md:col-span-2 flex items-center justify-center md:items-start md:justify-start flex-wrap gap-5'>
				{favorites?.length > 0 ? (
					countries.map((country, i) => (
						<div
							key={i}
							className='flex flex-col min-w-[280px] max-w-[320px] min-h-[10vh] bg-slate-300 items-center gap-2 p-1 rounded-lg mb-3'
						>
							<>
								<MatchHeader data={[...leagues]} />
								{fixtures.response
									.filter(
										(fixture) => fixture.league.country === country?.country
									)
									.map((country, i) => (
										<>
											<Matches key={i} data={country} />
										</>
									))}
							</>
						</div>
					))
				) : (
					<span className='text-xs md:text-lg text-gray-500 text-center'>
						no favorites <br /> all your favorite leagues will be here
					</span>
				)}
			</div>
			<aside className=' hidden lg:block  col-span-1 min-h-[40vh]  bg-slate-700 rounded-lg p-5'>
				{showDetails ? (
					<MatchDetails id={id} />
				) : (
					<span className='text-xs md:text-lg text-gray-400 text-center'>
						advertise here
					</span>
				)}
			</aside>
		</section>
	);
};

export default FavoritesComponents;
