import styled from "styled-components";

const Container = styled.section`
	height: 100%;
	padding: 3.438rem 5.188rem;

	display: flex;
	flex-direction: column;
	
	gap: 8.75rem;

	.link {
		.anchor {
			color: var(--anchor-color);
		}
	}


	@media only screen and (max-width: 770px) {
		padding: 3.438rem 2rem;
	}
`;

const Content = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 3.125rem;
`;

const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: 900;

	@media only screen and (max-width: 770px) {
		font-size: 1.875rem;
	}

	@media only screen and (max-width: 400px) {
		font-size: 1.6rem;
	}
`;

const FieldTitle = styled.p`
	font-size: 1.5rem;
	font-weight: 700;

	@media only screen and (max-width: 770px) {
		font-size: 1.2rem;
	}
`;

const FieldSubtitle = styled.p`
	font-size: 1.2rem;
	position: relative;
	bottom: 0.094rem;

	&.password {
		color: #B30000;
	}

	@media only screen and (max-width: 770px) {
		font-size: 1rem;
		bottom: 0.1rem;

		&.email {
			bottom: 0.15rem;
		}
	}
`;

const FieldAndAnchor = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
`;

const FieldContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

const Field = styled.section`
	display: flex;
	align-items: end;
	gap: 0.313rem;
`;

const ButtonsContainer = styled.section`
	display: flex;
	gap: 0.5rem;
`;

const Btn = styled.button`
	width: 13.438rem;
	height: 4.688rem;

	border: 0;
	border-radius: 0.625rem;

	font-size: 1.625rem;
	font-weight: 800;

	color: var(--btn-font-color);

	&.blue {
		background-color: var(--btn-edit-primary);
	
		&:hover {
			background-color: var(--btn-edit-hover);
		}
	}

	&.red {
		border: 0.125rem solid var(--btn-delete-primary);
		background-color: transparent;
		color: var(--btn-delete-primary);

		&:hover {
			background-color: var(--btn-delete-primary);
			color: var(--btn-font-color);
		}
	}
`;

export {
	Btn,
	ButtonsContainer,
	Container,
	Content,
	Field,
	FieldAndAnchor,
	FieldContainer,
	FieldSubtitle,
	FieldTitle,
	Title
};
