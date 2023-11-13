import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth.service";
import { Container, TitleContainer, Title, Subtitle, BtnPrimary } from "./styles";

const Header = () => {
	
	const authService = new AuthService();
	const navigate = useNavigate();

	const handleLogout = () => {
		authService.handleLogout();
	}

	const handleRedirect = () => {
		navigate("/");
	}

	const handleBtnClick = () => {
		navigate("/login");
	}
	
	return (
		<Container>
			<TitleContainer>
				<Title onClick={ handleRedirect }>MinuteLog</Title>
				<Subtitle onClick={ handleRedirect }>Plataform</Subtitle>
			</TitleContainer>
			{
				!sessionStorage.getItem("token") ?
					<BtnPrimary onClick={ handleBtnClick }>Login</BtnPrimary>
				:
					<BtnPrimary onClick={ handleLogout }>Logout</BtnPrimary>
			}
		</Container>
	);
}

export { Header };
