import React from 'react';
import { BiFootball } from 'react-icons/bi';

const FeedCard = ({ data }) => {
	return (
		<div className=' w-[100px] h-[102px] bg-gradient-to-t bg-indigo-600 via-indigo-400 from-indigo-800 bg-cover relative rounded-lg flex flex-col items-center justify-between py-2 '>
			<header className=' '>
				<BiFootball className='  text-white/20 text-5xl   z-10 relative ' />
				<div
					className='absolute text-white text-xs
           top-[20%] left-2 z-20 bg-black/30'
				>
					<small>wada</small> - <small>bremen</small>
				</div>
			</header>

			<footer
				className=' text-white
            z-20 bg-black/30 px-2 rounded-xs
           flex flex-col items-center justify-center w-[90%]'
			>
				<small className=' text-[8px] text-gray-200 text-center'>1.half</small>
				<article className='  text-slate-200 flex w-full justify-between items-center text-sm'>
					<small>0</small>
					<small>3</small>
				</article>
			</footer>
		</div>
	);
};

export default FeedCard;
