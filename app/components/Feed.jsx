import React from 'react';
import Feed from './feedCard/page';

const BuzzerFeeder = () => {
	return (
		<div className=' flex gap-2 items-center overflow-x-auto min-h-[110px] bg-slate-200 py-3 '>
			<Feed />
			<Feed />
			<Feed />
			<Feed />
		</div>
	);
};

export default BuzzerFeeder;
