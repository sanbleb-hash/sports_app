'use client';

import { IoMdBasketball, IoMdTennisball } from 'react-icons/io';
import { GiHockey } from 'react-icons/gi';
import { RiFootballLine } from 'react-icons/ri';

import {
	MdOutlineSportsCricket,
	MdOutlineSportsMotorsports,
} from 'react-icons/md';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

const categories = [
	{
		id: 1,
		name: 'Football',
		icon: 'football',
		subcategories: [
			{
				id: 101,
				name: 'Premier League',
			},
			{
				id: 102,
				name: 'La Liga',
			},
			{
				id: 103,
				name: 'Bundesliga',
			},
			{
				id: 104,
				name: 'Serie A',
			},
		],
	},
	{
		id: 2,
		name: 'Basketball',
		icon: 'basketball',
		subcategories: [
			{
				id: 201,
				name: 'NBA',
			},
			{
				id: 202,
				name: 'EuroLeague',
			},
			{
				id: 203,
				name: 'ACB',
			},
			{
				id: 204,
				name: 'NCAA',
			},
		],
	},
	{
		id: 3,
		name: 'Tennis',
		icon: 'tennis',
		subcategories: [
			{
				id: 301,
				name: 'ATP',
			},
			{
				id: 302,
				name: 'WTA',
			},
			{
				id: 303,
				name: 'Grand Slams',
			},
		],
	},
	{
		id: 4,
		name: 'Cricket',
		icon: 'cricket',
		subcategories: [
			{
				id: 401,
				name: 'International',
			},
			{
				id: 402,
				name: 'IPL',
			},
			{
				id: 403,
				name: 'Big Bash League',
			},
		],
	},
	{
		id: 5,
		name: 'Hockey',
		icon: 'hockey',
		subcategories: [
			{
				id: 501,
				name: 'NHL',
			},
			{
				id: 502,
				name: 'KHL',
			},
			{
				id: 503,
				name: 'IIHF World Championship',
			},
		],
	},
	{
		id: 6,
		name: 'Motorsport',
		icon: 'motorsport',
		subcategories: [
			{
				id: 601,
				name: 'Formula 1',
			},
			{
				id: 602,
				name: 'MotoGP',
			},
			{
				id: 603,
				name: 'NASCAR',
			},
		],
	},
];

export const subCategoriesData = categories.map((category, i) => (
	<div key={category.id}>
		{/* <Image  src={category.icon} alt={category.name} /> */}
		<ul>
			{category.subcategories.map((subcategory) => (
				<li key={subcategory.id}>{subcategory.name}</li>
			))}
		</ul>
	</div>
));

const CategoriesList = () => {
	const [showMore, setShowMore] = useState(false);
	const [isActive, setIsActive] = useState('football');

	return (
		<div className=' w-full text-sm flex items-center justify-between gap-2'>
			{categories.map((category, i) => (
				<div
					className={clsx(
						' lg:flex flex-col items-center justify-center group/icons transition-all cursor-pointer hover:bg-black/25 py-2 px-4 hidden translate-y-0 delay-150 duration-300',
						isActive === category.name &&
							' text-gray-300 transition-all bg-black/25'
					)}
					key={category.id}
					onClick={() => setIsActive(category.name)}
				>
					<span className=' text-2xl text-slate-100 group-hover/icons:scale-125 transition-all duration-150 delay-200'>
						{category.icon === 'football' ? (
							<RiFootballLine />
						) : category.icon === 'basketball' ? (
							<IoMdBasketball />
						) : category.icon === 'tennis' ? (
							<IoMdTennisball />
						) : category.icon === 'cricket' ? (
							<MdOutlineSportsCricket />
						) : category.icon === 'hockey' ? (
							<GiHockey />
						) : (
							<MdOutlineSportsMotorsports />
						)}
					</span>
					<h3
						className={clsx(
							'  font-light group-hover/icons:scale-50  group-hover/icons:text-gray-300 duration-150 transition-all  delay-200',
							isActive === category.name && ' text-gray-300 transition-all'
						)}
					>
						{category.name}
					</h3>
				</div>
			))}
			<>
				{showMore
					? categories.slice(0, 3).map((category, i) => (
							<div
								className={clsx(
									' flex flex-col items-center justify-center group/icons transition-all cursor-pointer hover:bg-black/25 py-2 px-4 lg:hidden translate-y-0 delay-150 duration-300',
									isActive === category.name &&
										' text-gray-300 transition-all bg-black/25'
								)}
								key={category.id}
								onClick={() => setIsActive(category.name)}
							>
								<span className=' text-2xl text-slate-100 group-hover/icons:scale-125 transition-all duration-150 delay-200'>
									{category.icon === 'football' ? (
										<RiFootballLine />
									) : category.icon === 'basketball' ? (
										<IoMdBasketball />
									) : category.icon === 'tennis' ? (
										<IoMdTennisball />
									) : category.icon === 'cricket' ? (
										<MdOutlineSportsCricket />
									) : category.icon === 'hockey' ? (
										<GiHockey />
									) : (
										<MdOutlineSportsMotorsports />
									)}
								</span>
								<h3
									className={clsx(
										'  font-light group-hover/icons:scale-50  group-hover/icons:text-gray-300 duration-150 transition-all  delay-200'
									)}
								>
									{category.name}
								</h3>
							</div>
					  ))
					: categories.slice(3, categories.length).map((category, i) => (
							<div
								className={clsx(
									' flex flex-col items-center justify-center group/icons transition-all cursor-pointer hover:bg-black/25 py-2 px-4 lg:hidden translate-y-0 delay-150 duration-300',
									isActive === category.name &&
										' text-gray-300 transition-all bg-black/25'
								)}
								key={category.id}
								onClick={() => setIsActive(category.name)}
							>
								<span className=' text-2xl text-slate-100 group-hover/icons:scale-125 transition-all duration-150 delay-200'>
									{category.icon === 'football' ? (
										<RiFootballLine />
									) : category.icon === 'basketball' ? (
										<IoMdBasketball />
									) : category.icon === 'tennis' ? (
										<IoMdTennisball />
									) : category.icon === 'cricket' ? (
										<MdOutlineSportsCricket />
									) : category.icon === 'hockey' ? (
										<GiHockey />
									) : (
										<MdOutlineSportsMotorsports />
									)}
								</span>
								<h3
									className={clsx(
										'  font-light group-hover/icons:scale-50  group-hover/icons:text-gray-300 duration-150 transition-all  delay-200'
									)}
								>
									{category.name}
								</h3>
							</div>
					  ))}
				<button
					className=' lg:hidden flex items-center justify-center gap-2 text-sm font-light text-gray-300 group/chevron'
					onClick={() => setShowMore((prev) => !prev)}
				>
					show more
					{showMore ? (
						<FaChevronDown
							className=' text-gray-200 delay-200 transition-all text-lg group-hover/chevron:opacity-75'
							onClick={() => setShowMore((prev) => !prev)}
						/>
					) : (
						<FaChevronUp className=' text-gray-200 delay-200 transition-all text-lg group-hover/chevron:opacity-75' />
					)}
				</button>
			</>
		</div>
	);
};

export default CategoriesList;
