/* eslint-disable react/prop-types */
import { errorSvg } from "../../../assets/icons/icons";
import { Container, Subtitle, Title, } from "./styles";

const BlockedRoute = ({ title, subtitle }) => {
	return(
		<Container>
			<Title>{ title }<img src={ errorSvg } /></Title>
			<Subtitle>{ subtitle }</Subtitle>
		</Container>
	);
}

export { BlockedRoute };
