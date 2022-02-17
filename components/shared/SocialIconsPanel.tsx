interface FloatingSocialsPanelProps {
	children: React.ReactNode;
}

const FloatingSocialsPanel: React.FC<FloatingSocialsPanelProps> = ({ children }) => {
	return (
		<div className='fixed flex flex-col justify-center gap-4 bottom-10 left-10'>{children}</div>
	);
};

export default FloatingSocialsPanel;
