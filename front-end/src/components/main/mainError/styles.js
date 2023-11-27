import styled from "styled-components";

const Container = styled.section`
	height: 100%;
	padding: 3.438rem 5.188rem;

	display: flex;
	flex-direction: column;
	
	gap: 8.75rem;

	overflow: hidden;	

	@media only screen and (max-width: 770px) {
		padding: 3.438rem 2rem;
	}
`;

export { Container };
