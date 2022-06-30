import React from "react";
// components
import Heading from "./Heading";
import BrandLogo from "./BrandLogo";

const Header: FormHeaderComponent = ({ headingTitle }) => {
	return (
		<header className='flex flex-col items-center justify-between gap-2'>
			<BrandLogo href='/' alt='Capaciti Logo' />
			<Heading headingTitle={headingTitle ?? "Candidate Checking System"} />
		</header>
	);
};

export default Header;
