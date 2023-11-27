import styled from "styled-components";

const Container = styled.li`
	display: flex;
	align-items: center;
	gap: 5%;

	cursor: pointer;

	@media only screen and (max-width: 770px) {
		position: relative;
		left: 29%;
	}
`;

const IconBg = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	top: -1px;


	@media only screen and (max-width: 770px) {
		background-color: rgb(104, 44, 226, 0.4) ;
	
		padding: 20px;
		border: 0;
		border-radius: 50%;

		border: 2px solid var(--btn-primary-hover);
	}

	@media only screen and (max-width: 414px) {
		transform: scale(0.8);
	}
`;

const Icon = styled.img`
	width: 20px;
	height: 20px;
	 
	@media only screen and (max-width: 950px) {
		width: 15px;
	 	height: 15px;
	}

	@media only screen and (max-width: 770px) {
		transform: scale(1.5);
	}
`;

const Title = styled.span`
	font-size: 20px;
	font-weight: 700;
	

	@media only screen and (max-width: 950px) {
		font-size: 1.1rem;
	}

	@media only screen and (max-width: 770px) {
		opacity: 0;
	}
`;

export {
	Container,
	Icon,
	IconBg,
	Title
};
