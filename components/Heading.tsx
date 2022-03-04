import React from "react";

type HeadingProps = {
	title: string;
};

type HeadingComponent = React.FC<HeadingProps>;

const Heading: HeadingComponent = ({ title }) => {
	return <h1 className='mb-4 text-3xl font-black capitalize text-slate-700'>{title}</h1>;
};

export default Heading;
