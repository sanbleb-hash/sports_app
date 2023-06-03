'use client';

import React, { useEffect, useState } from 'react';

import Calender from '../components/Calender';
import LeagueMatchFeeder from '../components/LeagueMatchFeeder';
import FeaturedMatch from '../components/FeaturedMatch';
import { BsPinFill } from 'react-icons/bs';
import { useSearchParams } from 'next/navigation';
import MatchDetails from '../components/MatchDetails';

const HomePage = ({ data, featureMatch }) => {
	const icon = <BsPinFill className=' text-gray-600' />;
	const id = useSearchParams().get('id');

	const [showDetails, setShowDetails] = useState(false);

	useEffect(() => {
		if (id?.length > 0) {
			setShowDetails(true);
		}
	}, [id]);

	return (
		<>
			<aside className=' hidden md:block col-span-1 min-h-full'>
				<Calender />
			</aside>
			<section className=' col-span-3 md:col-span-2 lg:col-span-1 min-h-full  bg-slate-700 rounded-lg p-5'>
				<LeagueMatchFeeder data={data?.response} icon={icon} isHeader />
			</section>
			<aside className=' hidden lg:block  col-span-1 min-h-[40vh]  bg-slate-700 rounded-lg p-5'>
				{showDetails === true ? (
					<MatchDetails id={id} name={name} />
				) : (
					<FeaturedMatch data={featureMatch} isHeader />
				)}
			</aside>
		</>
	);
};

export default HomePage;
