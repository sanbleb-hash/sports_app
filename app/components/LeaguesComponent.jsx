'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { leagues } from '../actions/countryLeages';

const LeaguesComponent = () => {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [showSelectedCountry, setShowSelectedCountry] = useState(false);

	const onClose = () => {
		setShowSelectedCountry((prev) => !prev);
		if (selectedCountry.length > 0) setSelectedCountry('');
	};

	useEffect(() => {
		selectedCountry ? setShowSelectedCountry(true) : onClose();
		// eslint-disable-next-line
	}, [selectedCountry]);
	const dataFrom = Array.from(new Set(leagues.response));

	return (
		<div className='w-full bg-gray-700 flex flex-col gap-3 p-5'>
			{dataFrom.map((country, i) => (
				<div
					key={i}
					className={clsx(
						'py-2 bg-slate-400 text-sm text-gray-500 overflow-hidden  rounded-md hover:bg-transparent/40',
						showSelectedCountry && selectedCountry === country.country.name
							? ' bg-transparent/30'
							: ''
					)}
				>
					<p
						className=' overflow-hidden z-30 cursor-pointer w-full  text-gray-600 flex items-center justify-between px-3'
						// toggle leages per coutnry
						onClick={() => {
							setSelectedCountry(country.country.name);
							onClose();
						}}
					>
						{country.country.name}

						<i
							className={clsx(
								`
                  text-xl 
                  `,
								showSelectedCountry && selectedCountry === country.country.name
									? ' rotate-90'
									: '-rotate-90'
							)}
						>
							<MdChevronLeft />
						</i>
					</p>
					{selectedCountry === country.country.name ? (
						<div
							className={clsx(
								'mx-5 mt-2 ml-4 py-2  text-sm text-gray-600 px-3 rounded-md  transition-all delay-500 duration-500'
							)}
						>
							{dataFrom
								.filter((x) => x.country.name === selectedCountry)
								.map((division, i) => (
									<div
										className='bg-transparent/50 rounded-md p-2 shadow-lg cursor-pointer hover:text-slate-300
                              flex flex-col items-start gap-3 
                              '
										key={i}
										// todo fetch games as per league
										onClick={() => {}}
									>
										{division.league.map((competetion, i) => (
											<span
												className=' text-slate-400 text-xs hover:bg-black w-full p-2'
												key={competetion?.id}
											>
												{competetion?.name}
											</span>
										))}
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
