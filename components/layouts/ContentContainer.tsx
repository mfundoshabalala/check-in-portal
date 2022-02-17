interface ContentContainerProps {
	children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
	return <main className='w-screen overflow-y-scroll snap-y'>{children}</main>;
};

export default ContentContainer;
