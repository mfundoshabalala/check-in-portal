import Footer from "components/Footer";
import Header from "components/Header";
import ContentContainer from "./ContentContainer";
import SVGComponent from "components/shared/SVGComponent";
import FloatingSocialsPanel from "components/shared/SocialIconsPanel";

const MainSiteLayout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<>
			<Header />
			<ContentContainer>{children}</ContentContainer>
			<FloatingSocialsPanel>
				<SVGComponent title='github' />
				<SVGComponent title='facebook' />
				<SVGComponent title='linkedin' />
				<SVGComponent title='twitter' />
			</FloatingSocialsPanel>
			<Footer />
		</>
	);
};

export default MainSiteLayout;
