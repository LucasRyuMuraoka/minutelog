import { MainHome } from "../../components/main/mainHome";
import { Footer } from "../../components/footer";
import { Sidebar } from "../../components/sidebar";
import { GridTemplate } from "../../components/templates/GridTemplate";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";

const Home = () => {
	
	useDinamicPageTitle("Home");

	return (
		<GridTemplate>
			<Sidebar type="sidebar"/>
			<MainHome type="main"/>
			<Footer type="footer" />
		</GridTemplate>
	);
}

export { Home };
