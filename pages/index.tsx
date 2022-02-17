import BackToTopAnchor from "components/BackToTopAnchor";
import AboutSection from "components/layouts/AboutSection";
// import ArticlesSection from "components/layouts/ArticlesSection";
import ContactSection from "components/layouts/ContactSection";
import HomeSection from "components/layouts/HomeSection";
import PortfolioSection from "components/layouts/PortfolioSection";

const MainPage = () => {
	return (
		<>
			<BackToTopAnchor />
			<HomeSection />
			<AboutSection />
			{/* <ArticlesSection /> */}
			<PortfolioSection />
			<ContactSection />
		</>
	);
};

export default MainPage;
