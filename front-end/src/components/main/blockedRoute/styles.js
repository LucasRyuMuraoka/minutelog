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
`;

const Subtitle = styled.h2`
	font-size: 1rem;
	cursor: default;
	
	span {
		color: var(--anchor-color);
	}
`;

export {
	Container,
	Subtitle,
	Title,
}
