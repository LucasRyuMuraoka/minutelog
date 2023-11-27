import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-areas: 
		"sidenav main main"
		"sidenav main main"
		"footer footer footer"
	;
	
	.sidenav {
		grid-area: sidenav;
		height: 100vh;
		
		@media only screen and (max-width: 770px) {
			width: 20vw;
		}
	}
	
	.main {
		grid-area: main;
		height: 100vh;

		@media only screen and (max-width: 770px) {
			width: 80vw;
		}
	}
	
	.footer {
		grid-area: footer;
		width: 100vw;
	}

	@media only screen and (max-width: 770px) {
		grid-template-areas: 
		"sidenav main main"
		"sidenav main main"
		"footer footer footer"
	;	
	}
`;

export {
	Container
}
