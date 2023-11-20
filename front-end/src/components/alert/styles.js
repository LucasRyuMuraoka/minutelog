import styled from "styled-components";

const Form = styled.form`
	margin-top: 20px;

	display: flex;
	flex-direction: column;
	gap: 20px;

	position: relative;
	z-index: 1;
`;

const InputContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 2px;
`;

const Label = styled.label`
	font-size: 0.95rem;
	position: relative;

	font-weight: 700;
	
	span {
		color: red;
	}
`;

const Input = styled.input`
	max-width: 500px;
	width: 100%;
	height: 32px;

	font-size: 1rem;

	padding: 0 8px;

	border: 2px solid var(--btn-primary);
	border-radius: 0.35rem;

	outline: none;

	&:hover, &:focus {
		border-color: var(--btn-primary-hover);
		box-shadow: rgba(104, 44, 226, 1) 0px 0px 3px;
	}
`;

export {
	Form,
	Input,
	InputContainer,
	Label
}
