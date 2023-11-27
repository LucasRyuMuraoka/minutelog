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

	@media only screen and (max-width: 950px) {
		font-size: 2.2rem;
	}

	@media only screen and (max-width: 490px) {
		font-size: 1.8rem;
	}
`;

const Subtitle = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;

	cursor: pointer;

	@media only screen and (max-width: 950px) {
		font-size: 1rem;
	}

	@media only screen and (max-width: 490px) {
		display: none;
	}
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

	@media only screen and (max-width: 950px) {
		width: 6.25rem;	
		height: 2.813rem;

		font-size: 1rem;
	}

	@media only screen and (max-width: 490px) {
		width: 5.5rem;
		height: 2.5rem;
	}
`;

export {
	Container,
	TitleContainer,
	Title,
	Subtitle,
	BtnPrimary
};
