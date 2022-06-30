import React from "react";

type HeadingProps = {
	headingTitle: string;
	headingClass?: string;
};

type HeadingComponent = React.FC<HeadingProps>;

const Heading: HeadingComponent = ({ headingTitle, headingClass }) => {
	return (
		<h1
			className={`mb-6 text-2xl font-black tracking-tight capitalize text-slate-700 ${headingClass}`}
		>
			{headingTitle}
		</h1>
	);
};

export default Heading;
