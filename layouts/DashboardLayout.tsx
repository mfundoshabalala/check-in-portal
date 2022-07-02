import React from "react";

const DashboardLayout: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	return <div className='dashboard'>{children}</div>;
};

export default DashboardLayout;
