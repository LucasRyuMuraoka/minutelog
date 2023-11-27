import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { GridTemplate } from "../../components/templates/GridTemplate";
import { Sidebar } from "../../components/sidebar";
import { MainProfile } from "../../components/main/mainProfile";
import { Footer } from "../../components/footer";

const Profile = () => {

	useDinamicPageTitle("Profile");

	return (
		<GridTemplate>
			<Sidebar type="sidebar"/>
			<MainProfile type="main"/>
			<Footer type="footer" />
		</GridTemplate>
	);
}

export { Profile };
