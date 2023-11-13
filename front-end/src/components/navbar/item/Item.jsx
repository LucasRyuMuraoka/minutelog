/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
	
	const navigate = useNavigate();

	const handleRedirect = () => {
		(!sessionStorage.getItem("token")) ? navigate("/") : navigate(item.path);
	}

	return (
		<Container>
				<img src={ item.img } />
				<span className="hover-underline-animation" onClick={ handleRedirect }>{ item.title }</span>
		</Container>
	);
}

export { Item };
