/* eslint-disable react/prop-types */
import { AuthService } from "../../../services/auth.service";
import { Container } from "./styles";
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
			<img src={ item.img } width={ 20 } height={ 20 } alt={`Icone para a ${item.title} do sistema`}/>
			{
				item.id === 4 ?
					<span className="hover-underline-animation" onClick={ handleLogout }>{ item.title }</span>
				:
					<span className="hover-underline-animation" onClick={ handleRedirect }>{ item.title }</span>
			}
		</Container>
	);
}

export { Item };
