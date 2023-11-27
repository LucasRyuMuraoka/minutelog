import styled from "styled-components";

const Container = styled.section`
	display: flex;
	flex-direction: column;
`;

const Title =  styled.h1`
	font-size: 36px;
	font-weight: 800;

	display: flex;
	align-items: center;
	gap: 20px;

	cursor: default;

	img {
		width: 30px;
		height: auto;
	}

	@media only screen and (max-width: 490px) {
		font-size: 20px;
	}
`;

const Subtitle = styled.h2`
	font-size: 1rem;
	cursor: default;
	
	span {
		color: var(--anchor-color);
	}

	@media only screen and (max-width: 490px) {
		font-size: 0.95rem;
	}
`;

export {
	Container,
	Subtitle,
	Title,
}
