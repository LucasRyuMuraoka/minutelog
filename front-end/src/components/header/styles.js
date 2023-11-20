import styled from "styled-components";

const Container = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const TitleContainer = styled.section`
	width: auto;

	display: flex;
	justify-content: start;
	align-items: end;
	
	gap: 0.3%;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 800;

	cursor: pointer;
`;

const Subtitle = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;

	cursor: pointer;
`;

const BtnPrimary = styled.button`
	width: 8.75rem;
	height: 3.125rem;

	border: 0;
	border-radius: 0.625rem;

	font-size: 1.25rem;
	font-weight: 800;

	background-color: var(--btn-primary);
	color: var(--btn-font-color);

	&:hover {
		background-color: var(--btn-primary-hover);
		transform: scale(1.06);
	}
`;

export {
	Container,
	TitleContainer,
	Title,
	Subtitle,
	BtnPrimary
};
