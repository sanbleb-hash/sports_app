import { fixtures } from '../actions/fixtureActions';
import HomePage from '../home/page';

export default async function Home() {
	const data = await fixtures;
	const number = function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	number(0, data.response.length);
	const featureMatch = data.response.at(number(0, data.response.length));

	return (
		<section className=' grid grid-cols-3 gap-3 pt-24  pb-32 w-[80vw] shadow-lg mx-auto'>
			<HomePage data={data} featureMatch={featureMatch} />
		</section>
	);
}
