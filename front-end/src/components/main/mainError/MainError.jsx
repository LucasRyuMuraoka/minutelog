import { Container } from "./styles";
import { Header } from "../../header";
import { BlockedRoute } from "../blockedRoute";

const MainError = () => {
	return (
		<Container>
			<Header />
			<BlockedRoute title="Página Não Encontrada!" subtitle="A URL informada não reflete nenhuma rota do sistema."/>
		</Container>
	);
}

export { MainError };
