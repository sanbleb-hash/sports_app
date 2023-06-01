'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calender() {
	const [value, onChange] = useState(new Date());

	return (
		<div
			className='
      '
		>
			<Calendar
				onClickDay={(value) => console.log(value)}
				onChange={onChange}
				value={value}
				defaultActiveStartDate={new Date(value)}
				className='text-gray-600 text-sm rounded-lg p-5'
			/>
		</div>
	);
}
