import styled from "styled-components";

const Container = styled.section`
	height: 100%;
	padding: 3.438rem 5.188rem;

	display: flex;
	flex-direction: column;
	
	gap: 8.75rem;

	overflow: hidden;

	.link {
		.anchor {
			color: var(--anchor-color);
		}
	}
	
	@media only screen and (max-width: 770px) {
		padding: 3.438rem 2rem;
	}
`;

const AnchorAndTitleContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	
	.link {
		.anchor {
			display: flex;
			align-items: center;
			gap: 0.625rem;
			width: 6.875;

			.arrow {
				position: relative;
				top: 0.088rem;
			}

			&:hover {
				.arrow {
					transform: translateX(0.313rem);
				}
			}
		}
	}
`;

const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;

	&.w-login {
		gap: 1.25rem;
		
		align-items: center;
		justify-content: center;
	}
`;

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 800;
	letter-spacing: 3%;

	cursor: default;

	@media only screen and (max-width: 950px) {
		font-size: 2rem;
	}

	@media only screen and (max-width: 490px) {
		font-size: 1.5rem
	}

	@media only screen and (max-width: 414px) {
		font-size: 1.35rem;
	}
`;

const Content = styled.section`
	width: 100%;

	&.w-login {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		gap: 2.813rem;
		
		height: 100%;

		position: relative;
		bottom: 5%;
		right: 2%;

	}

	@media only screen and (max-width: 414px) {
		&.w-login {
			gap: 1.5rem;
		}
	}
`;

const ImageAndElipse = styled.div`
	position: relative;
	left: 43.5%;
	width: 6.25rem;

	@media only screen and (max-width: 414px) {
		display: none;
	}
`;

const Image = styled.img`
	position: relative;
  left: 51%;

	z-index: 1;
`;

const Elipse = styled.div`
	background-color: var(--elipse-background);
	
	width: 24.246rem;
	height: 24.246rem;

	border-radius: 50%;

	position: absolute;
	bottom: -45%;
	left: 58%;
	margin-left: 25rem;

	z-index: 0;
`;

const TitleMinimal = styled.h1`
	font-size: 2.25rem;
	font-weight: 700;

	cursor: default;

	&.italic {
		font-style: italic;
	}

	@media only screen and (max-width: 950px) {
		font-size: 2rem;

		&.italic {
			margin-top: -10px;
		}
	}

	@media only screen and (max-width: 490px) {
		font-size: 1.5rem;
	}

	@media only screen and (max-width: 414px) {
		font-size: 1.25rem;
	}
`;

const BtnNewPoint = styled.button`
	font-weight: 700;
	font-size: 2.25rem;
	color: var(--btn-font-color);
	background-color: var(--btn-primary);

	width: 18.75rem;
	height: 5.625rem;

	border: 0;
	border-radius: 1.25rem;

	&:hover {
		background-color: var(--btn-primary-hover);
	}

	@media only screen and (max-width: 950px) {
		width: 15.625rem;
		height: 4.375rem;

		font-size: 2rem;
	}
	
	@media only screen and (max-width: 414px) {
		width: 13rem;
		border-radius: 1rem;

		font-size: 1.5rem;
	}
`;

export {
	AnchorAndTitleContainer,
	Container,
	Content,
	Elipse,
	Image,
	Title,
	TitleContainer,
	ImageAndElipse,
	BtnNewPoint,
	TitleMinimal,
}
