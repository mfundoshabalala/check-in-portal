import React from "react";
import BrandLogo from "./BrandLogo";
import Heading from "./Heading";

type HeaderComponent = React.FunctionComponent<{ title?: string }>;

const Header: HeaderComponent = ({ title }) => {
	return (
		<header className='flex flex-col items-center justify-between gap-2'>
			<BrandLogo href='/' alt='Capaciti Logo' />
			<Heading title={title ?? "Candidate Checking System"} />
		</header>
	);
};

export default Header;
