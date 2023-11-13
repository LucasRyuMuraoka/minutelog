import styled from "styled-components";
import { BlockedRoute } from "../blockedRoute";
import { Header } from "../../header";

const Container = styled.section`
	height: 100%;
	padding: 3.438rem 5.188rem;

	display: flex;
	flex-direction: column;
	
	gap: 8.75rem;

	overflow: hidden;	
`;

const MainError = () => {
	return (
		<Container>
			<Header />
			<BlockedRoute title="Página Não Encontrada!" subtitle="A URL informada não reflete nenhuma rota do sistema."/>
		</Container>
	);
}

export { MainError };
