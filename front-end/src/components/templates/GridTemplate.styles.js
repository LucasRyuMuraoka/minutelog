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
	}
	
	.main {
		grid-area: main;
		height: 100vh;
	}
	
	.footer {
		grid-area: footer;
	}
`;

export {
	Container
}
