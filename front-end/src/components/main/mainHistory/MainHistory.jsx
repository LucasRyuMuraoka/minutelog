import { Header } from "../../header";
import { Link } from "react-router-dom";
import { TableList } from "../../tableList";
import { Container, Main, Title } from "./styles";
import { arrowSvg } from "../../../assets/icons/icons";
import { BlockedRoute } from "../blockedRoute/BlockedRoute";

const MainHistory = () => {
	return (
		<Container>
			<Header />
			{
				(sessionStorage.getItem("token")) ?
					<Main>
						<Title>Histórico de pontos</Title>
						<TableList />
						<Link className="link">
							<span className="anchor">
								Gerar relatório completo
								<img src={ arrowSvg } width={ 7 } height={ 10 } className="arrow" alt="Pequena seta roxa apontando para a direita"/>
							</span>
						</Link>
					</Main>
				:
					<BlockedRoute title="Rota Bloqueada!" subtitle="Para acessar essa rota é necessário realizar o login no sistema."/>
			}
		</Container>
	);
}

export { MainHistory };
