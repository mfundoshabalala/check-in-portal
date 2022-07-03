import React from "react";

const Widget = () => {
	return (
		<div className='flex flex-wrap justify-between flex-1 p-3 duration-300 border rounded shadow-sm widget h-28 hover:bg-teal-800 hover:text-white'>
			<div className='flex flex-col justify-between left'>
				<span className='font-black tracking-tight uppercase title opacity-90'>Users</span>
				<span className='text-3xl font-medium tracking-wide count'>12345</span>
				<span className='text-xs underline cursor-pointer link'>Show more</span>
			</div>
			<div className='flex flex-col items-center justify-between right'>
				<div className='percentage positive'>20%</div>
				<i className='fa fa-user' />
			</div>
		</div>
	);
};

export default Widget;
