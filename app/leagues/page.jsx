import React from 'react';
import LeaguesComponent from '../components/LeaguesComponent';
import MatchFeeder from '../components/MatchFeeder';
import { BsPinFill } from 'react-icons/bs';
import FeedCard from '../components/FeedCard';

const LeaguesPage = () => {
	const icon = <BsPinFill className=' text-gray-600' />;
	return (
		<div className=' grid grid-cols-3  gap-3 pt-40 pb-20 w-[80vw] shadow-lg mx-auto'>
			<div className='col-span-3 md:hidden min-h-[10vh] drop-shadow-lg bg-black p-2'>
				<FeedCard icon={icon} isHeader />
			</div>
			<div className=' col-span-3 md:col-span-2'>
				<LeaguesComponent />
			</div>
			<div className=' md:col-span-1 hidden md:block'>
				<MatchFeeder icon={icon} isHeader />
			</div>
		</div>
	);
};

export default LeaguesPage;
