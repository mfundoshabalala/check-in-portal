import React from "react";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='search'>
				<input type='search' value='' placeholder='Search...' />
				<i className='fa fa-search' />
			</div>
		</div>
	);
};

export default Navbar;
