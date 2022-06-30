import React from "react";

const PanelComponent: FormPanelComponent = ({ children, className }) => {
	return <div className={`flex items-center gap-6 ${className}`}>{children}</div>;
};

export default PanelComponent;
