'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft } from 'react-icons/md';

const LeaguesComponent = () => {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [showSelectedCountry, setShowSelectedCountry] = useState(false);

	const topLeagues = {
		countries: [
			{
				name: 'Spain',
				leagues: [
					{
						name: 'La Liga',
						logo: 'https://example.com/la-liga-logo.png',
					},
					{
						name: 'Segunda División',
						logo: 'https://example.com/segunda-division-logo.png',
					},
					{
						name: 'Segunda División B',
						logo: 'https://example.com/segunda-division-b-logo.png',
					},
				],
			},
			{
				name: 'England',
				leagues: [
					{
						name: 'Premier League',
						logo: 'https://example.com/premier-league-logo.png',
					},
					{
						name: 'Championship',
						logo: 'https://example.com/championship-logo.png',
					},
					{
						name: 'League One',
						logo: 'https://example.com/league-one-logo.png',
					},
				],
			},
			{
				name: 'Germany',
				leagues: [
					{
						name: 'Bundesliga',
						logo: 'https://example.com/bundesliga-logo.png',
					},
					{
						name: '2. Bundesliga',
						logo: 'https://example.com/2-bundesliga-logo.png',
					},
					{
						name: '3. Liga',
						logo: 'https://example.com/3-liga-logo.png',
					},
				],
			},
			{
				name: 'Italy',
				leagues: [
					{
						name: 'Serie A',
						logo: 'https://example.com/serie-a-logo.png',
					},
					{
						name: 'Serie B',
						logo: 'https://example.com/serie-b-logo.png',
					},
					{
						name: 'Serie C',
						logo: 'https://example.com/serie-c-logo.png',
					},
				],
			},
			{
				name: 'France',
				leagues: [
					{
						name: 'Ligue 1',
						logo: 'https://example.com/ligue-1-logo.png',
					},
					{
						name: 'Ligue 2',
						logo: 'https://example.com/ligue-2-logo.png',
					},
					{
						name: 'Championnat National',
						logo: 'https://example.com/championnat-national-logo.png',
					},
				],
			},
			{
				name: 'Brazil',
				leagues: [
					{
						name: 'Campeonato Brasileiro Série A',
						logo: 'https://example.com/brasileiro-serie-a-logo.png',
					},
					{
						name: 'Campeonato Brasileiro Série B',
						logo: 'https://example.com/brasileiro-serie-b-logo.png',
					},
					{
						name: 'Campeonato Brasileiro Série C',
						logo: 'https://example.com/brasileiro-serie-c-logo.png',
					},
				],
			},
			{
				name: 'Argentina',
				leagues: [
					{
						name: 'Primera División',
						logo: 'https://example.com/primera-division-logo.png',
					},
					{
						name: 'Primera Nacional',
						logo: 'https://example.com/primera-nacional-logo.png',
					},
					{
						name: 'Primera B Metropolitana',
						logo: 'https://example.com/primera-b-metropolitana-logo.png',
					},
				],
			},
			{
				name: 'Colombia',
				leagues: [
					{
						name: 'Categoría Primera A',
						logo: 'https://example.com/primera-a-logo.png',
					},
					{
						name: 'Categoría Primera B',
						logo: 'https://example.com/primera-b-logo.png',
					},
					{
						name: 'Categoría Primera C',
						logo: 'https://example.com/primera-c-logo.png',
					},
				],
			},
		],
	};

	const onClose = () => setShowSelectedCountry((prev) => !prev);

	useEffect(() => {
		selectedCountry ? setShowSelectedCountry(true) : onClose();
	}, [selectedCountry]);

	return (
		<div className='w-full bg-gray-700 flex flex-col gap-3 p-5'>
			{topLeagues.countries.map((country, i) => (
				<div
					key={i}
					className={clsx(
						'py-2 bg-slate-400 text-sm text-gray-500 overflow-hidden  rounded-md hover:bg-transparent/40',
						showSelectedCountry && selectedCountry === country.name
							? ' bg-transparent/30'
							: ''
					)}
				>
					<p
						className=' overflow-hidden z-30 cursor-pointer w-full  text-gray-600 flex items-center justify-between px-3'
						// toggle leages per coutnry
						onClick={() => {
							setSelectedCountry(country.name);
							onClose();
						}}
					>
						{country.name}

						<i
							className={clsx(
								`
                  text-xl 
                  `,
								showSelectedCountry && selectedCountry === country.name
									? ' rotate-90'
									: '-rotate-90'
							)}
						>
							<MdChevronLeft />
						</i>
					</p>
					{showSelectedCountry && selectedCountry === country.name ? (
						<div
							className={clsx(
								'mx-5 mt-5 py-2 bg-slate-400 text-sm text-gray-600 px-3 rounded-md  transition-all delay-500 duration-500'
							)}
						>
							{selectedCountry === country.name &&
								country.leagues.map((division, i) => (
									<div
										className='hover:bg-transparent/40 cursor-pointer hover:text-slate-300'
										key={i}
										// todo fetch games as per league
										onClick={() => {}}
									>
										{division.name}
									</div>
								))}
						</div>
					) : (
						''
					)}
				</div>
			))}
		</div>
	);
};

export default LeaguesComponent;
