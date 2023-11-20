/* eslint-disable react/prop-types */
import { errorSvg } from "../../../assets/icons/icons";
import { Container, Subtitle, Title, } from "./styles";

const BlockedRoute = ({ title, subtitle }) => {
	return(
		<Container>
			<Title>{ title }<img src={ errorSvg } alt="Icone redondo e vermelho com um X, com as bordas arredondadas, centralizado" /></Title>
			<Subtitle>{ subtitle }</Subtitle>
		</Container>
	);
}

export { BlockedRoute };
