import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='search'>
				<input type='search' value='' placeholder='Search...' />
				<i className='fa fa-search' />
			</div>
			<div className='flex items-center gap-x-12'>
				<div className='items'>
					<i className='fa fa-moon' />
					<div className='relative flex items-center'>
						<i className='fa fa-bell' />
						<span className='absolute top-0 w-3 h-3 bg-red-700 border rounded-full -right-1' />
					</div>
				</div>
				<div className='avatar'>
					<Image src='http://unsplash.it/g/200?gravity=center' alt='' layout='fill' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
