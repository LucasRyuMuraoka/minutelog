import styled from "styled-components";

const Container = styled.section`
	height: 100%;
	padding: 3.438rem 5.188rem;

	display: flex;
	flex-direction: column;
	
	gap: 140px;

	overflow: hidden;

	.link {
		.anchor {
			color: var(--anchor-color);
		
			display: flex;
			align-items: center;
			gap: 10px;

			.arrow {
				position: relative;
				top: 1px;
			}

			&:hover {
				.arrow {
					transform: translateX(5px);
				}
			}
		}
	}

	@media only screen and (max-width: 770px) {
		padding: 3.438rem 2rem;
	}
`;

const Main = styled.section`
	display: flex;
	flex-direction: column;
	gap: 45px;
`;

const Title =  styled.h1`
	font-size: 2.25rem;
	font-weight: 800;

	display: flex;
	align-items: center;
	gap: 20px;

	cursor: default;

	@media only screen and (max-width: 770px) {
		font-size: 1.875rem;
	}

	@media only screen and (max-width: 400px) {
		font-size: 1.6rem;
	}
`;

export {
	Container,
	Main,
	Title,
}
