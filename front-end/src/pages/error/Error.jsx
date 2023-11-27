import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { GridTemplate } from "../../components/templates/GridTemplate";
import { Sidebar } from "../../components/sidebar";
import { MainError } from "../../components/main/mainError/MainError";
import { Footer } from "../../components/footer";

const Error = () => {

	useDinamicPageTitle("Error");

	return (
		<GridTemplate>
			<Sidebar type="sidebar"/>
			<MainError type="main"/>
			<Footer type="footer" />
		</GridTemplate>
	);
}

export { Error };
