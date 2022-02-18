import React from "react";

const PanelComponent: FormPanelComponent = ({ children }) => {
	return <div className='mt-5 flex justify-between items-center gap-4'>{children}</div>;
};

export default PanelComponent;
