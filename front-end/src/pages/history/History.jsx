import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { GridTemplate } from "../../components/templates/GridTemplate";
import { Sidebar } from "../../components/sidebar";
import { Footer } from "../../components/footer";
import { MainHistory } from "../../components/main/mainHistory/MainHistory";

const History = () => {

	useDinamicPageTitle("History");

	return (
		<GridTemplate>
			<Sidebar type="sidebar"/>
			<MainHistory type="main"/>
			<Footer type="footer" />
		</GridTemplate>
	);
}

export { History };
