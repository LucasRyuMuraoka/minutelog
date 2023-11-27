/* eslint-disable react/prop-types */
import { AuthService } from "../../../services/auth.service";
import { Container, Icon, IconBg, Title } from "./styles";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
	
	const authService = new AuthService();
	const navigate = useNavigate();

	const handleRedirect = () => {
		(!sessionStorage.getItem("token")) ? navigate("/") : navigate(item.path);
	}

	const handleLogout = () => {
		authService.handleLogout();
	}

	return (
		<Container>
			{
				item.id === 4 ?
					<>
						<IconBg onClick={ handleLogout } >
							<Icon src={ item.img } alt={`Icone para a ${item.title} do sistema`} />
						</IconBg>
						<Title className="hover-underline-animation" onClick={ handleLogout }>{ item.title }</Title>
					</>
				:
				<>
					<IconBg onClick={ handleRedirect } >
						<Icon src={ item.img } alt={`Icone para a ${item.title} do sistema`} />
					</IconBg>
					<Title className="hover-underline-animation" onClick={ handleRedirect }>{ item.title }</Title>
				</>
			}
		</Container>
	);
}

export { Item };
