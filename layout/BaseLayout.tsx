import React from "react";

type BaseLayoutProps = React.FunctionComponent<{ children: React.ReactNode }>;

const BaseLayout: BaseLayoutProps = ({ children }) => {
	return (
		<div className='flex items-center justify-center w-full h-screen bg-purple-800'>{children}</div>
	);
};

export default BaseLayout;
