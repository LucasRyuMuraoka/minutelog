import styled from "styled-components";
import { Header } from "../../header";
import { Link } from "react-router-dom";
import { BlockedRoute } from "../blockedRoute/BlockedRoute";

const Container = styled.section`
	height: 100%;
	padding: 3.438rem 5.188rem;

	display: flex;
	flex-direction: column;
	
	gap: 8.75rem;

	overflow: hidden;

	.link {
		.anchor {
			color: var(--anchor-color);
		}
	}
`;

const Content = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 3.125rem;
`;

const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: 900;
`;

const FieldTitle = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
`;

const FieldSubtitle = styled.p`
	font-size: 1.2rem;
	position: relative;
	bottom: 0.094rem;

	&.password {
		color: red;
	}
`;

const FieldAndAnchor = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
`;

const FieldContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

const Field = styled.section`
	display: flex;
	align-items: end;
	gap: 0.313rem;
`;

const ButtonsContainer = styled.section`
	display: flex;
	gap: 1.25rem;
`;

const Btn = styled.button`
	width: 13.438rem;
	height: 4.688rem;

	border: 0;
	border-radius: 0.625rem;

	font-size: 1.625rem;
	font-weight: 800;

	color: var(--btn-font-color);

	&.blue {
		background-color: var(--btn-edit-primary);
	
		&:hover {
			background-color: var(--btn-edit-hover);
		}
	}

	&.red {
		border: 0.125rem solid var(--btn-delete-primary);
		background-color: transparent;
		color: var(--btn-delete-primary);

		&:hover {
			background-color: var(--btn-delete-primary);
			color: var(--btn-font-color);
		}
	}
`;

const MainProfile = () => {
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
									<FieldSubtitle>Example123</FieldSubtitle>
								</Field>
								<Field>
									<FieldTitle>E-mail:</FieldTitle>
									<FieldSubtitle>example@example.com</FieldSubtitle>
								</Field>
								<Field>
									<FieldTitle>Password:</FieldTitle>
									<FieldSubtitle className="password">Criptografada.</FieldSubtitle>
								</Field>
							</FieldContainer>
							<Link to="/history" className="link">
								<span className="anchor hover-underline-animation-purple">
									Checar histórico
								</span>
							</Link>
						</FieldAndAnchor>

						<ButtonsContainer>
							<Btn className="blue">Editar</Btn>
							<Btn className="red">Excluir</Btn>
						</ButtonsContainer>
					</Content>
				:
					<BlockedRoute title="Rota Bloqueada!" subtitle="Para acessar essa rota é necessário realizar o login no sistema."/>
			}	
		</Container>
	);
}

export { MainProfile };
