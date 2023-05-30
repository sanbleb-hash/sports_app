import Calender from './components/Calender';

import MatchFeeder from './components/MatchFeeder';
import FeaturedMatch from './components/FeaturedMatch';
import { BsPinFill } from 'react-icons/bs';

export default function Home() {
	const icon = <BsPinFill className=' text-gray-600' />;
	return (
		<section className=' grid grid-cols-3 gap-3 pt-40 pb-20 w-[80vw] shadow-lg mx-auto'>
			<aside className=' hidden md:block col-span-1 min-h-full'>
				<Calender />
			</aside>
			<section className=' col-span-3 md:col-span-2 lg:col-span-1 min-h-full  bg-slate-700 rounded-lg p-5'>
				<MatchFeeder icon={icon} isHeader />
			</section>
			<aside className=' hidden lg:block  col-span-1 min-h-[40vh]  bg-slate-700 rounded-lg p-5'>
				<FeaturedMatch />
			</aside>
		</section>
	);
}
