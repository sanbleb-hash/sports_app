import clsx from 'clsx';
import React from 'react';

const RecentForm = ({ data }) => {
	const form = data.split('');

	return (
		<div className=' p-2 min-h-[20vh] bg-gray-800 rounded-lg w-full pb-5'>
			<div className=' flex flex-col gap-3 justify-between'>
				<h3 className=' text-xl text-gray-300'>Recent form</h3>
				<div className=' flex flex-wrap w-full items-center gap-3'>
					{form.map((x, i) => (
						<span
							key={i}
							className={clsx(
								' p-1 text-[10px]  text-white rounded-md ',
								x === 'W'
									? 'bg-green-400'
									: x === 'L'
									? 'bg-rose-300'
									: ' bg-gray-500'
							)}
						>
							{x}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default RecentForm;
