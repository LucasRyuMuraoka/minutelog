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
`;

const Main = styled.section`
	display: flex;
	flex-direction: column;
	gap: 45px;
`;

const Title =  styled.h1`
	font-size: 36px;
	font-weight: 800;

	display: flex;
	align-items: center;
	gap: 20px;

	cursor: default;
`;

export {
	Container,
	Main,
	Title,
}
