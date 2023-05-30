import React from 'react';
import { BiFootball } from 'react-icons/bi';

const FeaturedMatch = () => {
	const players = [
		{
			name: 'John Anderson',
		},
		{
			name: 'Michael Baker',
		},
		{
			name: 'David Clark',
		},
		{
			name: 'Sarah Collins',
		},
		{
			name: 'Tom Davis',
		},
		{
			name: 'Jessica Evans',
		},
		{
			name: 'Alex Foster',
		},
		{
			name: 'Ryan Garcia',
		},
		{
			name: 'Olivia Hernandez',
		},
		{
			name: 'Jake Johnson',
		},
		{
			name: 'Megan King',
		},
		{
			name: 'Brandon Lee',
		},
		{
			name: 'Emily Martinez',
		},
		{
			name: 'Noah Nelson',
		},
		{
			name: 'Chloe Owens',
		},
		{
			name: 'Ethan Parker',
		},
		{
			name: 'Lily Quinn',
		},
		{
			name: 'Gabriel Rodriguez',
		},
		{
			name: 'Madison Smith',
		},
		{
			name: 'Daniel Thompson',
		},
	];

	return (
		<div className='  flex flex-col w-full min-h-[10vh] bg-slate-300 items-center gap-2 p-4 rounded-lg  '>
			<header className=' w-full '>
				<BiFootball className='  text-gray-500 text-xl z-10 relative ' />
				<div
					className=' flex justify-between w-full text-gray-500 
             '
				>
					<small className='text-xl text-gray-500 capitalize'>wadan</small>
					<span className=' flex items-center text-rose-400 gap-4 text-2xl'>
						<small>0</small>-<small>3</small>
					</span>
					<small className='text-xl text-gray-500 capitalize'>bremen</small>
				</div>
			</header>

			<article
				className=' w-full text-white
            z-20 bg-black/30 px-2 rounded-lg
           flex flex-col items-center justify-center '
			>
				<small className=' text-xs text-white text-center'>1.half</small>
				<article className='  text-white flex w-full justify-between items-start p-4 '>
					<div className=' flex flex-col gap-2'>
						<span className='text-xs'>possesion</span>
						<span className=' flex-1 border rounded-md p-2 text-[8px]'>
							12% | 88%
						</span>
					</div>
					<div className=' flex flex-col gap-2'>
						<span className='text-xs'>shots</span>
						<span className=' flex-1 border rounded-md p-2 text-[8px]'>
							12 | 8
						</span>{' '}
					</div>
					<div className=' flex flex-col gap-2 '>
						<span className='text-xs'>on target</span>{' '}
						<span className=' flex-1 border rounded-md p-2 text-[8px] self-end'>
							1 | 0
						</span>{' '}
					</div>
				</article>
				<footer
					className=' w-full text-white
            z-20 bg-black/30 px-2 py-6 rounded-lg
           flex items-center justify-center gap-2 '
				>
					<div className=' border-r border-gray-300 px-3'>
						<h3 className=' text-sm font-semibold my-3 text-gray-400 text-center '>
							1st 11
						</h3>
						<div className=' flex flex-col gap-2 text-xs text-ellipsis'>
							{players.slice(0, 11).map((player, i) => (
								<span key={i}>
									{i + 1} .{player.name}
								</span>
							))}
							<div className=' text-gray-400 text-xs'>
								<h3 className=' text-sm font-semibold my-3'>subs</h3>
								<div className=' flex flex-col items-start'>
									{players
										.slice(11, players.lastIndexOf(players))
										.map((player, i) => (
											<span key={i}>
												{i + 1} .{player.name}
											</span>
										))}
								</div>
							</div>
						</div>
					</div>
					<div>
						<h3 className=' text-sm font-semibold my-3 text-gray-400 text-center '>
							1st 11
						</h3>
						<div className=' flex flex-col gap-2 text-xs text-ellipsis'>
							{players.slice(0, 11).map((player, i) => (
								<span key={i}>
									{i + 1} .{player.name}
								</span>
							))}
							<div className=' text-gray-400 text-xs'>
								<h3 className=' text-sm font-semibold my-3'>subs</h3>
								<div className=' flex flex-col items-start'>
									{players
										.slice(11, players.lastIndexOf(players))
										.map((player, i) => (
											<span key={i}>
												{i + 1} .{player.name}
											</span>
										))}
								</div>
							</div>
						</div>
					</div>
				</footer>
			</article>
		</div>
	);
};

export default FeaturedMatch;
