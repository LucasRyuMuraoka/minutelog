import { useEffect, useState } from "react";
import { Item } from "../navbar/item";
import { homeSvg, listSvg, logoutSvg, profileSvg } from "../../assets/icons/icons";
import { Container, ListItem, Nav, Title } from "./styles";

const Sidebar = () => {

	const [items, setItems] = useState([]);

	useEffect(() => {
		let navItems = [
			{
				id: 1,
				title: "Página Principal",
				img: homeSvg,
				path: "/"
			},
			{
				id: 2,
				title: "Histórico de Ponto",
				img: listSvg,
				path: "/history"
			},
			{
				id: 3,
				title: "Meu Perfil",
				img: profileSvg,
				path: "/profile"
			},
			{
				id: 4,
				title: "Sair",
				img: logoutSvg,
				path: "/"
			},
		];

		setItems(navItems);
	}, []);

	return (
		<Container>
			<Title>MinuteLog</Title>
			<Nav>
				<ListItem>
					{
						items.map(item => <Item key={ item.id } item={ item }/>)
					}
				</ListItem>
			</Nav>	
		</Container>
	);
}

export { Sidebar };
