import { useEffect, useState } from "react";
import { Header } from "../../header";
import { Link } from "react-router-dom";
import { Alert } from "../../alert/Alert";
import { BlockedRoute } from "../blockedRoute/BlockedRoute";
import { UsersService } from "../../../services/users.service";
import { Container, ButtonsContainer, Content, Field, FieldAndAnchor, FieldContainer, FieldSubtitle, FieldTitle, Title } from "./styles";

const MainProfile = () => {
	
	const usersService = new UsersService();
	const [ userId, setUserId ] = useState("");
	const [ userInformations, setUserInformations ] = useState();
	
	useEffect(() => {
		setUserId(sessionStorage.getItem("token"));
	}, []);

	useEffect(() => {
		if(userId) {
			usersService.findById(userId).then(data => {
				setUserInformations(data);
			}).catch(error => {
				console.log(error);
			})
		}
	}, [userId])

	return (
		<Container>
			<Header />
			{
				sessionStorage.getItem("token") ?
					<Content>
						<Title>Seu Perfil</Title>

						<FieldAndAnchor>
							<FieldContainer>
								<Field>
									<FieldTitle>Nome:</FieldTitle>
									<FieldSubtitle>{ userInformations ? userInformations.name : "" }</FieldSubtitle>
								</Field>
								<Field>
									<FieldTitle>E-mail:</FieldTitle>
									<FieldSubtitle>{ userInformations ? userInformations.email : "" }</FieldSubtitle>
								</Field>
								<Field>
									<FieldTitle>Senha:</FieldTitle>
									<FieldSubtitle className="password">{ userInformations ? userInformations.password.substring(0, (userInformations.password.length /2)).concat("...") : "" }</FieldSubtitle>
								</Field>
							</FieldContainer>
							<Link to="/history" className="link">
								<span className="anchor hover-underline-animation-purple">
									Checar histórico
								</span>
							</Link>
						</FieldAndAnchor>

						<ButtonsContainer>
							<Alert userInformations={ userInformations } title={ "Atualizar conta" } isDelete={ false }/>
							<Alert userInformations={ userInformations } title={ "Deletar conta" } isDelete={ true }/>
						</ButtonsContainer>
					</Content>
				:
					<BlockedRoute title="Rota Bloqueada!" subtitle="Para acessar essa rota é necessário realizar o login no sistema."/>
			}	
		</Container>
	);
}

export { MainProfile };
