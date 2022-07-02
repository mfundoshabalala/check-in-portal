import React from "react";

const BasicLayout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return <div className='flex items-center justify-center h-full text-center'>{children}</div>;
};

export default BasicLayout;
