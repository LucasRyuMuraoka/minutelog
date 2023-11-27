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

	@media only screen and (max-width: 990px) {
		gap: 155px;
	}

	@media only screen and (max-width: 770px) {
		gap: 22%;
	}

	@media only screen and (max-width: 414px) {
		gap: 15%;
	}
`;

const Title = styled.h1`
	span {
		font-size: 1.25rem;
		font-weight: 800;

		cursor: default;


		&.responsive {
			display: none;
		}
	}

	@media only screen and (max-width: 770px) {
		span {
			&.responsive {
				display: block;
			}

			&.notResponsive  {
				display: none;
			}
		}	
	}
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

	@media only screen and (max-width: 800px) {
		position: relative;
		left: 8%;
	}

	@media only screen and (max-width: 770px) {
		left: 0;
	}

	@media only screen and (max-width: 414px) {
		gap: 30px;
	}
`;

export {
	Container,
	ListItem,
	Nav,
	Title,
}
