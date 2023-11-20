import styled from "styled-components";


/* Without Login */

const Container = styled.section`
	padding: 3.438rem 5.188rem;

	display: flex;
	flex-direction: column;
	
	gap: 100px;

	min-height: 100vh;
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	gap: 100px;

	position: relative;

	.anchor {
		color: var(--anchor-color);
	}
`;

const Title = styled.h1`
	font-size: 40px;
	font-weight: 800;

	position: relative;
	z-index: 4;

	cursor: default;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 40px;

	position: relative;
	z-index: 1;
`;

const InputContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 2px;
`;

const Label = styled.label`
	font-size: 1.2rem;
	position: relative;
	left: 9px;

	font-weight: 700;
`;

const Input = styled.input`
	max-width: 500px;
	width: 100%;
	height: 40px;

	font-size: 1.2rem;

	padding: 2px 8px;

	border: 2px solid var(--btn-primary);
	border-radius: 0.35rem;

	outline: none;

	&:hover, &:focus {
		border-color: var(--btn-primary-hover);
		box-shadow: rgba(104, 44, 226, 1) 0px 0px 3px;
	}
`;

const Button = styled.button`
	font-size: 1.1rem;
	font-weight: 700;

	max-width: 500px;
	width: 100%;
	height: 40px;
	
	background-color: transparent;
	color: var(--btn-primary);

	border: 2px solid var(--btn-primary);
	border-radius: 0.35rem;

	&:hover, &:active {
		background-color: var(--btn-primary);
		color: var(--btn-font-color);

		border-radius: 2rem;
	}
`;

const Question = styled.span`
	cursor: default;
	font-weight: 500;

	position: relative;
	z-index: 1;

	color: #3a3a3a;
`;

const ImageContainer = styled.div`
	border: 1px solid red;
	position: absolute;

	margin-left: 450px;
	left: 35%;
`;

const Image = styled.img`
	width: 40.625rem;
	height: auto;

	position: absolute;
	z-index: 1;

	transform: rotateY(180deg);
`;

const Elipse = styled.div`
	background-color: var(--elipse-background);
	
	width: 387.93px;
	height: 387.93px;

	border-radius: 50%;

	position: absolute;
	top: 270px;
	left: -20px;
	margin-left: 400px; 

	z-index: 0;
`;


/* With Login */
const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;

	.w-img {
		display: flex;
		align-items: center;
		position: relative;
		z-index: 99;

		img {
			height: auto;
			width: 150px;

			position: relative;
			left: -45px
		}
	}
	
`;

const Subtitle = styled.h2`
	font-size: 1rem;
	
	position: relative;
	left: 6px;
	top: -30px;

	z-index: 99;

	cursor: default;

	span {
		color: var(--anchor-color);
	}
`;

export {
	Button,
	Container,
	Elipse,
	Form,
	Image,
	ImageContainer,
	Input,
	InputContainer,
	Label,
	Main,
	Question,
	Title,
	Subtitle,
	TitleContainer,
};
