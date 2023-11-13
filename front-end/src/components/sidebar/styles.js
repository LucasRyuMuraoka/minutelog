import styled from "styled-components";

const Container = styled.div`
	color: var(--sidebar-font-color);
	background-color: var(--sidebar-background);

	padding: 60px 0;

	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 190px;
`;

const Title = styled.h1`
	font-size: 1.25rem;
	font-weight: 800;

	cursor: default;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: center;
`;

const ListItem = styled.ul`
	width: 250px;

	display: flex;
	flex-direction: column;
	gap: 65px;
`;

export {
	Container,
	ListItem,
	Nav,
	Title,
}
