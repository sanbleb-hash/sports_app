import Calender from './components/Calender';

import LeagueMatchFeeder from './components/LeagueMatchFeeder';
import FeaturedMatch from './components/FeaturedMatch';
import { BsPinFill } from 'react-icons/bs';
import { fixtures } from './actions/fixtureActions';
import { match } from 'assert';

export default async function Home() {
	const icon = <BsPinFill className=' text-gray-600' />;
	const data = await fixtures;
	const number = function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	number(0, data.response.length);
	const featureMatch = data.response.at(number(0, data.response.length));

	return (
		<section className=' grid grid-cols-3 gap-3 pt-40 pb-20 w-[80vw] shadow-lg mx-auto'>
			<aside className=' hidden md:block col-span-1 min-h-full'>
				<Calender />
			</aside>
			<section className=' col-span-3 md:col-span-2 lg:col-span-1 min-h-full  bg-slate-700 rounded-lg p-5'>
				<LeagueMatchFeeder
					key={match.id}
					data={data.response}
					icon={icon}
					isHeader
				/>
			</section>
			<aside className=' hidden lg:block  col-span-1 min-h-[40vh]  bg-slate-700 rounded-lg p-5'>
				<FeaturedMatch data={featureMatch} isHeader />
			</aside>
		</section>
	);
}
